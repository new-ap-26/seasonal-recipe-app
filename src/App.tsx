import { useMemo, useState } from 'react'
import { recipes } from './data/recipes'
import { userRepository } from './repositories/userRepository'
import { applyRevision } from './utils/recipe'
import type { CookingLog, DishCategory, Ingredient, Recipe, Season, UserState } from './types'
import './styles.css'

type Tab = 'home' | 'recipes' | 'season' | 'medicinal' | 'mine'

const categories: ('すべて' | DishCategory | '作り置き')[] = ['すべて','主菜','副菜','作り置き','汁物','ご飯','麺']
const seasons: ('すべて' | Season)[] = ['すべて','春','夏','秋','冬','通年']

function currentSeason(): Season {
  const month = new Date().getMonth() + 1
  if (month >= 3 && month <= 5) return '春'
  if (month >= 6 && month <= 8) return '夏'
  if (month >= 9 && month <= 11) return '秋'
  return '冬'
}

function servingText(recipe: Recipe) {
  return recipe.servingLabel ?? `${recipe.servings}人分`
}

function seasonFoods(season: Season) {
  const map: Record<Exclude<Season, '通年'>, string[]> = {
    春: ['たけのこ', 'あさり', '春キャベツ', '菜の花'],
    夏: ['トマト', 'きゅうり', 'アジ', 'なす'],
    秋: ['れんこん', 'きのこ', '鮭', 'さつまいも'],
    冬: ['大根', '白菜', '長ねぎ', 'ほうれん草']
  }
  return season === '通年' ? [] : map[season]
}

export default function App() {
  const [tab, setTab] = useState<Tab>('home')
  const [state, setState] = useState<UserState>(() => userRepository.load())
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('すべて')
  const [season, setSeason] = useState<(typeof seasons)[number]>('すべて')

  const saveState = (next: UserState) => { setState(next); userRepository.save(next) }
  const selectedBase = recipes.find(r => r.id === selectedId)
  const selected = selectedBase ? applyRevision(selectedBase, state.revisions[selectedBase.id]) : null

  const visibleRecipes = useMemo(() => recipes.map(r => applyRevision(r, state.revisions[r.id])).filter(r => {
    const q = query.trim().toLowerCase()
    const text = `${r.name} ${r.description} ${r.ingredients.map(i => i.name).join(' ')}`.toLowerCase()
    const categoryOk = category === 'すべて' || (category === '作り置き' ? r.tags.includes('作り置き') : r.category === category)
    const seasonOk = season === 'すべて' || r.season.includes(season as Season)
    return (!q || text.includes(q)) && categoryOk && seasonOk
  }), [query, category, season, state.revisions])

  const openRecipe = (id: string) => { setSelectedId(id); setTab('recipes'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const toggleFavorite = (id: string) => saveState({ ...state, favorites: state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites, id] })
  const toggleStaple = (id: string) => saveState({ ...state, staples: state.staples.includes(id) ? state.staples.filter(x => x !== id) : [...state.staples, id] })

  const addLog = (recipe: Recipe, rating: number, tasteTags: string[], memo: string) => {
    const log: CookingLog = { id: crypto.randomUUID(), recipeId: recipe.id, cookedAt: new Date().toISOString(), rating, tasteTags, memo }
    saveState({ ...state, logs: [log, ...state.logs] })
  }

  const reviseRecipe = (recipe: Recipe, changes: Record<string, unknown>) => {
    saveState({ ...state, revisions: { ...state.revisions, [recipe.id]: { recipeId: recipe.id, updatedAt: new Date().toISOString(), changes: { ...(state.revisions[recipe.id]?.changes ?? {}), ...changes } } } })
  }

  const resetRecipe = (id: string) => {
    const revisions = { ...state.revisions }
    delete revisions[id]
    saveState({ ...state, revisions })
  }

  const exportBackup = () => {
    const blob = new Blob([userRepository.export(state)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `旬ごはん-backup-${new Date().toISOString().slice(0,10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importBackup = async (file: File) => {
    try { saveState(userRepository.import(await file.text())); alert('バックアップを復元しました。') }
    catch { alert('バックアップファイルを読み込めませんでした。') }
  }

  return <div className="app-shell">
    <header className="topbar"><div><span className="eyebrow">旬を楽しむ・自分好みに育てる</span><h1>旬ごはん</h1></div><button className="icon-btn" onClick={() => {setTab('recipes');setSelectedId(null)}}>⌕</button></header>
    <main>
      {tab === 'home' && <Home state={state} openRecipe={openRecipe} setTab={setTab} />}
      {tab === 'recipes' && (selected ? <RecipeDetail recipe={selected} state={state} onBack={() => setSelectedId(null)} onFavorite={toggleFavorite} onStaple={toggleStaple} onLog={addLog} onRevise={reviseRecipe} onReset={resetRecipe} /> : <RecipeList items={visibleRecipes} state={state} query={query} setQuery={setQuery} category={category} setCategory={setCategory} season={season} setSeason={setSeason} openRecipe={openRecipe} />)}
      {tab === 'season' && <SeasonPage openRecipe={openRecipe} />}
      {tab === 'medicinal' && <MedicinalPage openRecipe={openRecipe} />}
      {tab === 'mine' && <MinePage state={state} openRecipe={openRecipe} exportBackup={exportBackup} importBackup={importBackup} />}
    </main>
    <nav className="bottom-nav">
      <Nav active={tab==='home'} label="ホーム" icon="⌂" onClick={() => {setTab('home');setSelectedId(null)}} />
      <Nav active={tab==='recipes'} label="レシピ" icon="◉" onClick={() => {setTab('recipes');setSelectedId(null)}} />
      <Nav active={tab==='season'} label="旬" icon="❧" onClick={() => setTab('season')} />
      <Nav active={tab==='medicinal'} label="薬膳" icon="☯" onClick={() => setTab('medicinal')} />
      <Nav active={tab==='mine'} label="マイ" icon="♡" onClick={() => setTab('mine')} />
    </nav>
  </div>
}

function Nav({active,label,icon,onClick}:{active:boolean,label:string,icon:string,onClick:()=>void}) {
  return <button className={active?'active':''} onClick={onClick}><span>{icon}</span><small>{label}</small></button>
}

function Home({state,openRecipe,setTab}:{state:UserState,openRecipe:(id:string)=>void,setTab:(t:Tab)=>void}) {
  const season = currentSeason()
  const baseHero = recipes.find(r => r.season.includes(season)) ?? recipes[0]
  const hero = applyRevision(baseHero, state.revisions[baseHero.id])
  const recentIds = [...new Set(state.logs.map(l => l.recipeId))].filter(id => recipes.some(r => r.id === id)).slice(0,3)
  return <div className="page home">
    <section className="hero-card">
      <div className="food-art">{season}</div><div className="hero-copy"><span className="pill">今季のおすすめ</span><h2>{hero.name}</h2><p>{hero.description}</p><div className="meta">❧ {hero.season.join('・')}　⌛ {hero.cookingTime}分　👥 {servingText(hero)}</div>{hero.cookingTimeNote&&<p className="time-note">※{hero.cookingTimeNote}</p>}<button className="primary" onClick={() => openRecipe(hero.id)}>レシピを見る</button></div>
    </section>
    <section><h3>今、何を食べたい？</h3><div className="quick-grid"><button onClick={() => setTab('season')}>❧<b>旬から</b></button><button onClick={() => setTab('recipes')}>🥕<b>食材から</b></button><button onClick={() => setTab('medicinal')}>☯<b>薬膳から</b></button><button onClick={() => setTab('recipes')}>⌛<b>時間から</b></button></div></section>
    <section><div className="section-head"><h3>{season}の旬</h3><button onClick={() => setTab('season')}>もっと見る</button></div><div className="chips">{seasonFoods(season).map(x=><span key={x}>{x}</span>)}</div></section>
    {recentIds.length>0 && <section><h3>最近作った料理</h3><div className="card-list">{recentIds.map(id => {const r=recipes.find(x=>x.id===id)!;return <button className="mini-card" key={id} onClick={()=>openRecipe(id)}><b>{r.name}</b><span>作った記録を見る →</span></button>})}</div></section>}
  </div>
}

function RecipeList({items,state,query,setQuery,category,setCategory,season,setSeason,openRecipe}:{items:Recipe[],state:UserState,query:string,setQuery:(s:string)=>void,category:(typeof categories)[number],setCategory:(x:(typeof categories)[number])=>void,season:(typeof seasons)[number],setSeason:(x:(typeof seasons)[number])=>void,openRecipe:(id:string)=>void}) {
  return <div className="page"><h2>レシピ</h2><p className="lead">現在は第1バッチ8品を仮データで掲載しています。</p><input className="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="料理名・食材を検索"/><div className="filter-row">{categories.map(c=><button key={c} className={category===c?'selected':''} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="filter-row">{seasons.map(s=><button key={s} className={season===s?'selected':''} onClick={()=>setSeason(s)}>{s}</button>)}</div><div className="recipe-grid">{items.map(r=><button key={r.id} className="recipe-card" onClick={()=>openRecipe(r.id)}><div className="recipe-image">{r.season[0]}</div><div><div className="card-title"><b>{r.name}</b>{state.favorites.includes(r.id)&&<span>♥</span>}</div><p>{r.description}</p><div className="meta">⌛ {r.cookingTime}分　{r.tags.slice(0,2).join('・')}</div>{r.verification?.cookingTestStatus==='untested'&&<span className="status-badge">試作前</span>}</div></button>)}</div>{items.length===0&&<p className="empty">条件に合うレシピがありません。</p>}</div>
}

function RecipeDetail({recipe,state,onBack,onFavorite,onStaple,onLog,onRevise,onReset}:{recipe:Recipe,state:UserState,onBack:()=>void,onFavorite:(id:string)=>void,onStaple:(id:string)=>void,onLog:(r:Recipe,n:number,t:string[],m:string)=>void,onRevise:(r:Recipe,c:Record<string,unknown>)=>void,onReset:(id:string)=>void}) {
  const [rating,setRating]=useState(5)
  const [memo,setMemo]=useState('')
  const [tags,setTags]=useState<string[]>([])
  const [editing,setEditing]=useState(false)
  const [ingredientText,setIngredientText]=useState(recipe.ingredients.map(i=>`${i.name}|${i.amount}|${i.type}|${i.group ?? ''}|${i.amountType ?? ''}`).join('\n'))
  const logs=state.logs.filter(l=>l.recipeId===recipe.id)
  const tasteOptions=['ちょうどいい','濃い','薄い','甘い','甘さ控えめがよい','辛い','酸っぱい']
  const saveRevision=()=>{
    const ingredients = ingredientText.split('\n').map(line=>{
      const [name,amount,type='food',group='',amountType=''] = line.split('|')
      return { name:name?.trim(), amount:amount?.trim(), type:type.trim() as Ingredient['type'], group:group.trim() || undefined, amountType:(amountType.trim() || undefined) as Ingredient['amountType'] }
    }).filter(x=>x.name&&x.amount) as Ingredient[]
    onRevise(recipe,{ingredients})
    setEditing(false)
  }
  return <div className="page detail"><button className="back" onClick={onBack}>← レシピ一覧</button><div className="detail-image">{recipe.season[0]}</div><div className="title-row"><div><h2>{recipe.name}</h2><div className="meta">👥 {servingText(recipe)}　⌛ {recipe.cookingTime}分　{recipe.season.map(s=>`・${s}`)}</div>{recipe.cookingTimeNote&&<p className="time-note">※{recipe.cookingTimeNote}</p>}</div><button className="heart" onClick={()=>onFavorite(recipe.id)}>{state.favorites.includes(recipe.id)?'♥':'♡'}</button></div><div className="chips">{[recipe.category,...recipe.tags].map(x=><span key={x}>{x}</span>)}{recipe.verification?.cookingTestStatus==='untested'&&<span>試作前</span>}</div>
  <section><h3>材料</h3><GroupedIngredients items={recipe.ingredients}/></section>
  <section><h3>作り方</h3><ol className="steps">{recipe.steps.map((s,i)=><li key={i}><span>{i+1}</span><div>{s.text}{s.cue&&<p className="cue">✓ {s.cue}</p>}</div></li>)}</ol></section>
  {recipe.cookingTips?.length&&<section className="info-box"><h3>失敗しにくくするコツ</h3><ul className="tips-list">{recipe.cookingTips.map(t=><li key={t}>{t}</li>)}</ul></section>}
  {recipe.seasonInfo&&<section><h3>旬のポイント</h3><p>{recipe.seasonInfo}</p></section>}
  {recipe.storage&&<section className="info-box"><h3>保存・再加熱</h3>{recipe.storage.refrigeration&&<p><b>冷蔵：</b>{recipe.storage.refrigeration}</p>}{recipe.storage.freezing&&<p><b>冷凍：</b>{recipe.storage.freezing}</p>}{recipe.storage.reheating&&<p><b>再加熱：</b>{recipe.storage.reheating}</p>}{recipe.storage.notes&&<small>{recipe.storage.notes}</small>}</section>}
  {(recipe.nutritionNote||recipe.medicinalFoodNote)&&<section className="two-info"><div><h3>栄養</h3><p>{recipe.nutritionNote??'情報準備中'}</p></div><div><h3>薬膳</h3><p>{recipe.medicinalFoodNote??'情報準備中'}</p><small>※薬膳は伝統的な食養生の考え方です。現代医学上の治療効果を示すものではありません。</small></div></section>}
  <section className="record-box"><h3>今回どうだった？</h3><div className="stars">{[1,2,3,4,5].map(n=><button key={n} onClick={()=>setRating(n)}>{n<=rating?'★':'☆'}</button>)}</div><div className="taste-tags">{tasteOptions.map(t=><button key={t} className={tags.includes(t)?'selected':''} onClick={()=>setTags(tags.includes(t)?tags.filter(x=>x!==t):[...tags,t])}>{t}</button>)}</div><textarea value={memo} onChange={e=>setMemo(e.target.value)} placeholder="次回の参考メモ。例：砂糖を少し減らす、れんこんを厚めに…"/><button className="primary" onClick={()=>{onLog(recipe,rating,tags,memo);setMemo('');setTags([]);alert('調理記録を保存しました。')}}>調理記録を保存</button></section>
  <section><div className="section-head"><h3>自分好みに更新</h3><button onClick={()=>setEditing(!editing)}>{editing?'閉じる':'編集'}</button></div>{editing&&<div className="edit-box"><p>1行につき「材料名|分量|種別|グループ|分量区分」で編集できます。</p><textarea value={ingredientText} onChange={e=>setIngredientText(e.target.value)} rows={12}/><button className="primary" onClick={saveRevision}>マイレシピに反映</button></div>}{state.revisions[recipe.id]&&<div className="revision-note">♡ 自分好みに変更済み　<button onClick={()=>{if(confirm('オリジナルレシピに戻しますか？'))onReset(recipe.id)}}>オリジナルに戻す</button></div>}<button className="secondary" onClick={()=>onStaple(recipe.id)}>{state.staples.includes(recipe.id)?'★ わが家の定番から外す':'☆ わが家の定番にする'}</button></section>
  {logs.length>0&&<section><h3>作った履歴（{logs.length}回）</h3>{logs.slice(0,5).map(l=><div className="log" key={l.id}><b>{new Date(l.cookedAt).toLocaleDateString('ja-JP')}　{'★'.repeat(l.rating)}</b><p>{l.tasteTags.join('・')}</p><p>{l.memo}</p></div>)}</section>}
  </div>
}

function GroupedIngredients({items}:{items:Recipe['ingredients']}) {
  const groups = [...new Set(items.map(i => i.group ?? (i.type === 'seasoning' ? '調味料' : '材料')))]
  return <div>{groups.map(group=><div className="ingredient-group" key={group}><h4>{group}</h4><IngredientTable items={items.filter(i => (i.group ?? (i.type === 'seasoning' ? '調味料' : '材料')) === group)}/></div>)}</div>
}

function IngredientTable({items}:{items:Recipe['ingredients']}) {
  return <div className="ingredient-table">{items.map((x,i)=><div key={`${x.name}-${i}`}><span>{x.name}{x.amountType==='guideline'&&<small className="amount-note">（目安）</small>}{x.amountType==='optional'&&<small className="amount-note">（お好み）</small>}</span><b>{x.amount}</b></div>)}</div>
}

function SeasonPage({openRecipe}:{openRecipe:(id:string)=>void}) {
  const season = currentSeason()
  return <div className="page"><h2>旬を食べる</h2><p className="lead">季節ごとの食材と、その季節におすすめの料理を見つけます。</p><div className="season-cards"><SeasonCard title="春" foods="たけのこ・あさり・春キャベツ・菜の花"/><SeasonCard title="夏" foods="トマト・きゅうり・アジ・なす"/><SeasonCard title="秋" foods="れんこん・きのこ・鮭・さつまいも"/><SeasonCard title="冬" foods="大根・白菜・長ねぎ・ほうれん草"/></div><h3>{season}のおすすめ</h3>{recipes.filter(r=>r.season.includes(season)).map(r=><button className="mini-card" key={r.id} onClick={()=>openRecipe(r.id)}><b>{r.name}</b><span>{r.category}・{r.cookingTime}分</span></button>)}</div>
}

function SeasonCard({title,foods}:{title:string,foods:string}) { return <div className="season-card"><b>{title}</b><p>{foods}</p></div> }

function MedicinalPage({openRecipe}:{openRecipe:(id:string)=>void}) {
  const items = recipes.filter(r => r.medicinalFoodNote)
  return <div className="page"><h2>薬膳</h2><p className="lead">伝統的な食養生の考え方として、季節や食材選びの参考にします。現代医学上の効能とは分けて表示します。</p><section className="info-box"><h3>表示ルール</h3><p>専門資料で確認できた内容だけを掲載し、不十分なものは「確認後に追記予定」とします。</p><small>※薬膳は伝統的な食養生の考え方です。現代医学上の治療効果を示すものではありません。</small></section><h3>関連レシピ</h3>{items.slice(0,4).map(r=><button className="mini-card" key={r.id} onClick={()=>openRecipe(r.id)}><b>{r.name}</b><span>レシピを見る →</span></button>)}</div>
}

function MinePage({state,openRecipe,exportBackup,importBackup}:{state:UserState,openRecipe:(id:string)=>void,exportBackup:()=>void,importBackup:(f:File)=>void}) {
  const fav=recipes.filter(r=>state.favorites.includes(r.id))
  const staple=recipes.filter(r=>state.staples.includes(r.id))
  return <div className="page"><h2>マイ</h2><div className="stats"><div><b>{fav.length}</b><span>お気に入り</span></div><div><b>{state.logs.length}</b><span>作った記録</span></div><div><b>{staple.length}</b><span>わが家の定番</span></div></div><SectionRecipes title="お気に入り" items={fav} openRecipe={openRecipe}/><SectionRecipes title="わが家の定番" items={staple} openRecipe={openRecipe}/><section><h3>データのバックアップ</h3><p className="muted">メモ・評価・マイレシピはこの端末のブラウザに保存されます。機種変更やブラウザデータ削除に備えてバックアップできます。</p><div className="backup-actions"><button className="secondary" onClick={exportBackup}>バックアップを書き出す</button><label className="secondary file-label">バックアップを読み込む<input type="file" accept="application/json" onChange={e=>e.target.files?.[0]&&importBackup(e.target.files[0])}/></label></div></section></div>
}

function SectionRecipes({title,items,openRecipe}:{title:string,items:Recipe[],openRecipe:(id:string)=>void}) {
  return <section><h3>{title}</h3>{items.length?items.map(r=><button className="mini-card" key={r.id} onClick={()=>openRecipe(r.id)}><b>{r.name}</b><span>開く →</span></button>):<p className="muted">まだ登録されていません。</p>}</section>
}
