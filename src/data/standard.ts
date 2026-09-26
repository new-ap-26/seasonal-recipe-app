import type { Recipe } from '../types'
import { untested } from './shared'

export const standardRecipes: Recipe[] = [
  {
    id: 'chikuzenni', name: '筑前煮', description: '鶏もものうまみとつゆをしっかり吸った根菜が、しみじみおいしい。', servings: 4, servingLabel: '3〜4人分', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏もも肉（小）', amount: '1枚（約200g）', type: 'food', amountType: 'fixed' }, { name: 'ごぼう', amount: '1本（約150g）', type: 'food', amountType: 'fixed' },
      { name: 'れんこん', amount: '1/2節（約100g）', type: 'food', amountType: 'fixed' }, { name: 'にんじん（小）', amount: '1本（約100g）', type: 'food', amountType: 'fixed' },
      { name: '生しいたけ', amount: '3個', type: 'food', amountType: 'fixed' }, { name: 'こんにゃく（アク抜きしたもの）', amount: '100g', type: 'food', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ1/2', type: 'seasoning', amountType: 'fixed' },
      { name: '水', amount: '1と1/2カップ', type: 'liquid', group: '甘辛つゆ', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ3', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' }
    ],
    steps: [
      { text: 'ごぼうは皮を包丁の背でこそげ、乱切りにする。れんこんは皮をむき、一口大の乱切りにする。ごぼうとれんこんは水にさらし、水けをきる。生しいたけは石づきを切り、4等分にする。こんにゃくはスプーンで一口大にちぎる。鶏肉は余分な脂肪を取り、一口大に切る。水、しょうゆ、みりん、砂糖を混ぜて甘辛つゆを作る。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、鶏肉を入れて炒める。肉の色が変わったら、残りの具材をすべて加え、全体に油が回るまでさらに2分ほど炒め合わせる。', cue: '肉の色が変わったら残りの具材を加え、全体に油が回るまで約2分。' },
      { text: '甘辛つゆを加える。煮立ったらアクを取る。落としぶたをして弱めの中火にし、20〜25分煮る。途中で1〜2回上下を返す。煮汁が具の高さの1/3くらいまで減るのを煮終わりの目安とする。', cue: '煮汁が具の高さの1/3程度まで減ったら煮終わり。' },
      { text: '落としぶたを取り、強めの中火にする。たえず大きく混ぜながら、底に煮汁が少量残るくらいまで1〜2分煮つめる。火を止め、器に盛る。', cue: '底に煮汁が少量残る程度まで、1〜2分煮つめる。' }
    ],
    nutritionNote: '1/4量あたり 207kcal、塩分2.1g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'nikujaga', name: '肉じゃが', description: 'ほっくりと煮えたじゃがいもは、甘辛味がしみしみ。牛肉は先に炒めていったん取り出すと、パサついたり、ちぎれたりする心配なし！', servings: 3, servingLabel: '2〜3人分', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: 'じゃがいも', amount: '3個（約450g）', type: 'food', amountType: 'fixed' },
      { name: '牛こま切れ肉', amount: '150g', type: 'food', amountType: 'fixed' },
      { name: '玉ねぎ', amount: '1/2個（約100g）', type: 'food', amountType: 'fixed' },
      { name: 'にんじん', amount: '1/2本（約80g）', type: 'food', amountType: 'fixed' },
      { name: '水', amount: '1と1/2カップ', type: 'liquid', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ3', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ1/2', type: 'seasoning', amountType: 'fixed' }
    ],
    steps: [
      { text: 'じゃがいもは皮をむいて4つ割りにし、5分ほど水にさらして水けをきる。玉ねぎは幅1.5cmのくし形切りにする。にんじんは皮をむき、小さめの一口大の乱切りにする。甘辛つゆの材料を混ぜる。落としぶたを用意する。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、牛肉を炒める。肉の色が変わるまで1分ほど炒め、取り出す。いったん取り出し、煮る直前に戻すことで堅くなりにくい。', cue: '肉の色が変わるまで1分ほど。' },
      { text: '手順2のフライパンをさっと拭き、サラダ油大さじ1/2を入れて中火で熱する。じゃがいも、にんじん、玉ねぎを入れ、いもの角が透き通るまで2分ほど炒める。牛肉を戻して甘辛つゆを加え、煮立ったらアクを取る。', cue: 'いもの角が透き通るまで2分ほど。煮立ったらアクを取る。' },
      { text: '落としぶたをし、煮くずれないよう様子をみながら、弱めの中火で10〜12分煮る。つゆがふつふつと泡立つくらいの火加減をキープする。途中で1〜2回上下を返す。火の通りが均一になるようにする。', cue: 'つゆがふつふつと泡立つくらいの弱めの中火で10〜12分。途中で1〜2回上下を返す。' },
      { text: 'じゃがいもに竹串を刺してみて、すーっと通ったらOK。落としぶたを取り、強めの中火にする。そっと上下を返しながら2〜3分煮つめる。煮汁が1/3量くらいになったら、火を止める。', cue: 'じゃがいもに竹串がすーっと通ったら、強めの中火で2〜3分。煮汁が1/3量くらいになったら火を止める。' }
    ],
    cookingTips: ['少なめのつゆをなじませたいときは、落としぶたが必須。つゆが落としぶたに当たって落ち、全体にいきわたります。'], nutritionNote: '1/3量あたり 339kcal、塩分2.7g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'saba-misoni', name: 'さばのみそ煮', description: '濃厚な甘めのみそつゆが、なんともご飯のすすむ味！みそは2回に分けて時間差で加えると、本来の香りのよさも楽しめます。', servings: 2, category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: 'さばの切り身（骨つき）', amount: '2切れ（約250g）', type: 'food', amountType: 'fixed' },
      { name: 'しょうがの薄切り', amount: '1かけ分', type: 'food', amountType: 'fixed' },
      { name: 'ねぎ', amount: '1本', type: 'food', amountType: 'fixed' },
      { name: '水', amount: '1カップ', type: 'liquid', group: 'みそつゆ', amountType: 'fixed' },
      { name: 'みそ', amount: '大さじ2', type: 'seasoning', group: 'みそつゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: 'みそつゆ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: 'みそつゆ', amountType: 'fixed' }
    ],
    steps: [
      { text: '落としぶたを用意する（オーブン用シートは直径24cmに切る）。ねぎは長さ5cmに切る。' },
      { text: 'さばは皮目に斜めに5〜6本、切り目を入れる。ざるに並べ入れ、熱湯を全体に回しかける。身の部分が白っぽくなればOK。水をはったボールに移し、血や汚れをこすり取る（霜ふり）。熱湯をかけて表面のたんぱく質を固め、洗い流すことで、生臭さをカットすることができる。', cue: '身の部分が白っぽくなればOK。' },
      { text: '直径約24cmのフライパンにみそつゆ用のみそのうち大さじ1と、水、みりん、砂糖を入れ、みそを溶き混ぜる。中火にかけ、煮立ったらさばを皮を上にして並べ入れる。つゆがまだ煮立っていないところにさばを入れると、生臭くなるので注意。ねぎ、しょうがも加える。', cue: '煮立ってから、さばを皮を上にして入れる。' },
      { text: 'つゆをスプーンですくってさばにかけ、表面全体がぬれたら、落としぶたをのせる。煮汁が1/2量くらいになるまで、5〜6分煮る。', cue: '煮汁が1/2量くらいになるまで5〜6分。' },
      { text: '落としぶたを取り、残りのみそをすきまに加える。スプーンでつゆに溶き混ぜる。さらに、スプーンでつゆをすくい、さばにかけながら1〜2分煮る。つゆ全体にかるくとろみがついたら完成。', cue: 'つゆをかけながら1〜2分。つゆ全体にかるくとろみがついたら完成。' }
    ],
    cookingTips: ['魚は身がくずれやすいので、上下を返すのではなく、つゆをかけながら煮るのが正解。つゆの余分な水分がとび、とろみが出るのもメリット。'], nutritionNote: '1人分 355kcal、塩分1.8g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'chicken-nanban', name: 'チキン南蛮', description: 'まろやかなタルタルと、甘酸っぱいたれが絶妙なバランス。サクッと香ばしいころもにより、からめてどうぞ。', servings: 2, category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏胸肉（皮なし・大）', amount: '1枚（約300g）', type: 'food', amountType: 'fixed' },
      { name: '塩', amount: '少々', type: 'seasoning', amountType: 'guideline' },
      { name: 'こしょう', amount: '少々', type: 'seasoning', amountType: 'guideline' },
      { name: '小麦粉', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: '溶き卵', amount: '1個分', type: 'food', amountType: 'fixed' },
      { name: 'サラダ油', amount: '適宜', type: 'seasoning', amountType: 'optional' },
      { name: '堅ゆで卵', amount: '1個', type: 'food', group: 'タルタルソース', amountType: 'fixed' },
      { name: '玉ねぎ', amount: '1/8個', type: 'food', group: 'タルタルソース', amountType: 'fixed' },
      { name: 'マヨネーズ', amount: '大さじ3', type: 'seasoning', group: 'タルタルソース', amountType: 'fixed' },
      { name: 'レモン汁', amount: '小さじ1/2', type: 'seasoning', group: 'タルタルソース', amountType: 'fixed' },
      { name: '塩', amount: '少々', type: 'seasoning', group: 'タルタルソース', amountType: 'guideline' },
      { name: 'こしょう', amount: '少々', type: 'seasoning', group: 'タルタルソース', amountType: 'guideline' },
      { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '甘酢', amountType: 'fixed' },
      { name: '酢', amount: '大さじ1と1/2', type: 'seasoning', group: '甘酢', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1と1/2', type: 'seasoning', group: '甘酢', amountType: 'fixed' }
    ],
    steps: [
      { text: 'バットに甘酢の材料を入れ、砂糖が溶けるまで混ぜる。玉ねぎはみじん切りにし、5分ほど水にさらしてざるに上げる。ペーパータオルで包み、しっかりと水けを絞る。', cue: '玉ねぎは5分ほど水にさらす。' },
      { text: 'ゆで卵は白身に縦半分に切り目を入れ、黄身を取り出す。白身は粗いみじん切りにしてボールに入れ、黄身はざっとくずしながら加える。残りのタルタルソースの材料を加え、さっと混ぜる。' },
      { text: '鶏肉をまな板に縦長に置く。縦半分のところから包丁を寝かせて入れ、端に向かって厚みを切り開く。鶏肉を回転させ、反対側も同様にする（観音開き）。塩、こしょう各少々をふり、小麦粉を全体にまぶす。', cue: '観音開きにして厚みを均一にする。' },
      { text: 'フライパンにサラダ油を高さ2cmまで入れ、低めの中温に熱する。溶き卵を別のバットに移し、鶏肉を入れて全体にからめる。肉を油に広げ入れる。トングを使ってもよい。返しながら4分ほど揚げる。強火にし、さらに1〜2分揚げて油をきる。', cue: '低めの中温は170℃。乾いた菜箸の先を底に当てると、細かい泡がシュワシュワとまっすぐ出る程度。返しながら4分ほど揚げ、強火でさらに1〜2分。' },
      { text: '甘酢のバットに鶏肉を入れ、上下を返して甘酢をからめる。まな板にのせ、食べやすく切り分ける。器にキャベツを盛り、鶏肉をのせて、バットに残った甘酢をかける。タルタルソースを添える。' }
    ],
    cookingTips: ['鶏胸肉をまるごと揚げるときは、厚みを均一にする作業が必須。揚げる時間を最小限にできるので、しっとりと仕上がります。'], nutritionNote: '1人分 494kcal、塩分3.1g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'pork-shogayaki', name: '豚のしょうが焼き', description: '薄切り肉をさっと炒めて作る、手軽なタイプ。粉をふっておくことで、肉が柔らかく仕上がり、たれもよくからんでつやつやに！', servings: 2, category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '豚ロース薄切り肉', amount: '200g（8〜10枚）', type: 'food', amountType: 'fixed' },
      { name: 'しょうがのすりおろし', amount: '1かけ分', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ1', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: 'キャベツのせん切り', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: '片栗粉', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: 'サラダ油', amount: '適宜', type: 'seasoning', amountType: 'optional' }
    ],
    steps: [
      { text: '豚肉をまな板にさっと広げる。片栗粉小さじ1/2を茶こしに入れ、全体に均一になるようにふる（片面だけでOK）。しょうが焼きだれの材料を混ぜる。', cue: '片栗粉は片面だけでOK。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱する。粉をふった面を下にして、豚肉を並べ入れる（完全に平らに広げず、少しひだが寄っているほうが柔らかく仕上がる）。肉の色が半分変わるまで1分30秒ほど焼く。', cue: '粉をふった面を下にする。肉の色が半分変わるまで1分30秒ほど。' },
      { text: '肉を裏返してさっと焼き、余分な脂をペーパータオルで拭き取る。しょうが焼きだれを加え、強火にする。', cue: '裏返してさっと焼き、余分な脂を拭き取る。たれを加えたら強火。' },
      { text: 'フライパンを揺すって、肉の上下を返しながらたれを肉にからめる。肉の両面に照りが出るまで30秒ほど煮つめ、火を止める。器に盛り、キャベツを添える。', cue: '肉の両面に照りが出るまで30秒ほど。' }
    ],
    cookingTips: ['肉に粉をふってガードすることで、肉汁が逃げず、ジューシーな焼き上がりに。たれに粉が溶けて、ほどよくとろみもつきます。'], nutritionNote: '1人分 315kcal、塩分1.4g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'chicken-tsukune', name: '鶏つくね', description: 'ふんわり柔らかになる秘訣は、酒を多めに入れること。柔めでも扱いやすいので、お弁当向きでも。', servings: 3, servingLabel: '2〜3人分', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏ひき肉', amount: '300g', type: 'food', group: 'たね', amountType: 'fixed' },
      { name: 'ねぎのみじん切り', amount: '1/3本分', type: 'food', group: 'たね', amountType: 'fixed' },
      { name: 'しょうがのすりおろし', amount: '小さじ1/2', type: 'seasoning', group: 'たね', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: 'たね', amountType: 'fixed' },
      { name: '片栗粉', amount: '大さじ1/2', type: 'food', group: 'たね', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '小さじ1/2', type: 'seasoning', group: 'たね', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '卵黄', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: '青じその葉', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: '白いりごま', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: 'サラダ油', amount: '適宜', type: 'seasoning', amountType: 'optional' }
    ],
    steps: [
      { text: '25×15cmくらいのバットにラップを敷く。照り焼きだれの材料を混ぜる。' },
      { text: 'ボールにたねの材料を入れ、粘りが出るまで練り混ぜる。たねを1/8量ずつ、ぬらした手にとり、両手でキャッチボールをするように打ちつけて空気を抜く。長径7cmの小判形にまとめ、ラップを敷いたバットに並べる。', cue: '粘りが出るまで練り混ぜる。1/8量ずつ、長径7cmの小判形に。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、たねを並べ入れる。2分ほど焼いてこんがりしたら裏返し、ふたをする。弱火で1分30秒ほど蒸し焼きにし、余分な脂を拭き取る。', cue: '中火で2分ほど、こんがりしたら裏返す。弱火で1分30秒ほど蒸し焼きにし、余分な脂を拭き取る。' },
      { text: 'たれを加えて強火にし、返しながら2分ほど煮つめる。たれがしっかりからんだら、火を止める。器に青じそを敷き、つくねをのせる。フライパンに残ったたれをかけ、白ごまをふって、卵黄を添える。', cue: 'たれを加えたら強火で、返しながら2分ほど。たれがしっかりからんだら火を止める。' }
    ],
    nutritionNote: '1/3量あたり 314kcal、塩分2.0g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'sanshoku-don', name: '三色丼', description: '甘じょっぱい「照り焼きだれ」は、鶏そぼろの味つけにも！少し多めにできるので、お弁当やおにぎりの具に。', servings: 2, category: '丼・ワンプレート', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏ひき肉', amount: '200g', type: 'food', group: '鶏そぼろ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '卵', amount: '2個', type: 'food', amountType: 'fixed' },
      { name: 'きぬさや', amount: '10枚', type: 'food', amountType: 'fixed' },
      { name: '温かいご飯', amount: 'どんぶり2杯分（約400g）', type: 'food', amountType: 'fixed' },
      { name: '塩', amount: '少々', type: 'seasoning', amountType: 'guideline' },
      { name: '砂糖', amount: '適宜', type: 'seasoning', amountType: 'optional' },
      { name: '酒', amount: '適宜', type: 'seasoning', amountType: 'optional' }
    ],
    steps: [
      { text: 'きぬさやはへたと筋を取り、塩少々を入れた熱湯でさっとゆで、冷水にとる。さめたら水けをきり、斜めに細切りにする。卵を溶きほぐし、みりん大さじ1、砂糖、酒各大さじ1/2、塩ひとつまみを混ぜる。' },
      { text: 'フライパンに卵液を入れ、中火にかける。菜箸3〜4本でたえず混ぜながら、2分ほど炒る。ぽろぽろになったら取り出し、フライパンをさっと拭く。', cue: '菜箸3〜4本でたえず混ぜながら2分ほど。ぽろぽろになったら取り出す。' },
      { text: 'フライパンに照り焼きだれの材料を入れて混ぜ、ひき肉を混ぜる。火にかける前にたれと混ぜると味がよくなじみ、細かくきれいにほぐれる。肉全体にたれがなじんだら、中火にかける。', cue: '火にかける前にたれとひき肉を混ぜる。肉全体にたれがなじんだら中火。' },
      { text: '手順2と同じ要領で、4分ほどたえず混ぜながら炒る。煮汁がわずかに残るくらいになったら火を止める。器にご飯を等分に盛り、鶏そぼろを1/2量ずつ、炒り卵ときぬさやを1/2量ずつのせる。', cue: '4分ほどたえず混ぜながら炒る。煮汁がわずかに残るくらいになったら火を止める。' }
    ],
    nutritionNote: '1人分 635kcal、塩分2.5g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'nasu-pork-miso-itame', name: 'なすと豚バラのみそ炒め', description: '「鍋しぎ」とも呼ばれるこの料理は、甘めのみそ味が魅力。炒めたなすのとろっと柔らかなおいしさも、満喫できます。', servings: 2, category: '主菜', season: ['夏'], tags: ['定番'],
    ingredients: [
      { name: 'なす', amount: '3個（約240g）', type: 'food', amountType: 'fixed' },
      { name: '豚バラ薄切り肉', amount: '120g', type: 'food', amountType: 'fixed' },
      { name: 'ピーマン', amount: '2個（約60g）', type: 'food', amountType: 'fixed' },
      { name: '赤唐辛子の小口切り', amount: '1/2本分', type: 'seasoning', amountType: 'fixed' },
      { name: 'みそ', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: 'サラダ油', amount: '適宜', type: 'seasoning', amountType: 'optional' }
    ],
    steps: [
      { text: 'なすはへたを切り、ピーラーで皮をしま目にむく（これで火の通りがよくなる）。大きめの一口大の乱切りにし、水に5分ほどさらしてざるに上げ、水けを拭く。ピーマンは縦半分に切ってへたと種を取り、小さめの一口大に切る。豚肉は長さ6〜7cmに切る。みそだれの材料を混ぜる。', cue: 'なすは水に5分ほどさらす。' },
      { text: 'フライパンにサラダ油大さじ2を強めの中火で熱し、なすを入れて2〜3分炒める。皮につやが出て、身にかるく焼き色がついたら取り出す。', cue: '強めの中火で2〜3分。皮につやが出て、身にかるく焼き色がついたら取り出す。' },
      { text: '同じフライパンに豚肉を入れ、中火で1〜2分炒める。色が変わって脂が出てきたら、ピーマン、赤唐辛子を加え、全体に油が回るまで30秒ほど炒める。', cue: '中火で1〜2分。肉の色が変わって脂が出てきたらピーマン、赤唐辛子を加え、全体に油が回るまで30秒ほど。' },
      { text: '手順2のなすを戻し入れ、みそだれを加える。たれが全体にからまるまで、手早く炒め合わせ、火を止める。', cue: 'たれが全体にからまるまで手早く炒め合わせる。' }
    ],
    cookingTips: ['ちょっとひと手間ですが、なすだけを先に炒めておくことが大きなポイント。きちんと油が回り、中までとろっと仕上がります。'], nutritionNote: '1人分 445kcal、塩分2.3g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'kabocha-beef-miso-itame', name: 'かぼちゃと牛肉のみそ炒め', description: 'こってりめのみそ味は、かぼちゃとも相性◎。食べごたえのある一品です。', servings: 2, category: '主菜', season: ['秋'], tags: ['定番'],
    ingredients: [
      { name: 'かぼちゃ', amount: '1/6個（正味約200g）', type: 'food', amountType: 'fixed' },
      { name: '牛こま切れ肉', amount: '150g', type: 'food', amountType: 'fixed' },
      { name: 'しし唐辛子', amount: '6本', type: 'food', amountType: 'fixed' },
      { name: '赤唐辛子の小口切り', amount: '1/2本分', type: 'seasoning', amountType: 'fixed' },
      { name: 'みそ', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '酒', amount: '適宜', type: 'seasoning', amountType: 'optional' },
      { name: '片栗粉', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: 'サラダ油', amount: '適宜', type: 'seasoning', amountType: 'optional' }
    ],
    steps: [
      { text: 'かぼちゃはわたと種を取り、横半分に切って幅1cmに切る。牛肉は酒、片栗粉各小さじ1をもみ込む。' },
      { text: 'フライパンにサラダ油大さじ1/2を弱めの中火で熱し、かぼちゃを並べて2分焼く。裏返し、水大さじ1をふってふたをし、2分蒸し焼きにして取り出す。', cue: '弱めの中火で2分焼き、裏返して水大さじ1をふり、ふたをして2分蒸し焼き。' },
      { text: '同じフライパンにサラダ油大さじ1/2をたし、牛肉を入れ、中火で1〜2分炒める。色が変わって脂が出てきたら、しし唐辛子、赤唐辛子を加え、全体に油が回るまで30秒ほど炒める。', cue: '中火で1〜2分。肉の色が変わって脂が出てきたらしし唐辛子、赤唐辛子を加え、全体に油が回るまで30秒ほど。' },
      { text: '手順2のかぼちゃを戻し入れ、みそだれを加える。たれが全体にからまるまで、手早く炒め合わせ、火を止める。', cue: 'たれが全体にからまるまで手早く炒め合わせる。' }
    ],
    nutritionNote: '1人分 441kcal、塩分2.3g', verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'oyakodon', name: '親子丼', description: 'とろっ、ふわっとした卵の「半熟感」が絶妙！ 甘じょっぱいつゆと、鶏もものうまみで、食べごたえも満点です。', servings: 2, category: '丼・ワンプレート', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '卵', amount: '3個', type: 'food', amountType: 'fixed' },
      { name: '鶏もも肉（小）', amount: '1枚（約200g）', type: 'food', amountType: 'fixed' },
      { name: '玉ねぎ', amount: '1/2個（約100g）', type: 'food', amountType: 'fixed' },
      { name: '温かいご飯', amount: 'どんぶり2杯分（約400g）', type: 'food', amountType: 'fixed' },
      { name: '三つ葉', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: 'だし汁', amount: '1/2カップ', type: 'liquid', group: '丼つゆ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: '丼つゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '丼つゆ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '丼つゆ', amountType: 'fixed' }
    ],
    steps: [
      { text: '玉ねぎは縦に薄切りにする。三つ葉は根元を切り、長さ3cmに切る。鶏肉は余分な脂肪を取り、小さめの一口大に切る。', cue: '三つ葉は長さ3cm、鶏肉は小さめの一口大。' },
      { text: '直径約20cmのフライパンにつゆの材料を入れて混ぜ、中火にかける。煮立ったら、玉ねぎ、鶏肉を加え、ときどき返しながら6分ほど煮て火を止める。', cue: '中火で煮立ったら玉ねぎ、鶏肉を加え、ときどき返しながら6分ほど。' },
      { text: '卵をボールに割り入れ、卵黄1個分をそっと取り出してとっておく。菜箸で卵を5〜6回混ぜて粗く溶く。白身の大きなかたまりがなくなったら、すぐに混ぜるのをやめる。器に温かいご飯を盛る。', cue: '卵は5〜6回混ぜて粗く溶く。白身の大きなかたまりがなくなったら混ぜるのをやめる。' },
      { text: 'フライパンの鶏肉、玉ねぎ、煮汁の各1/2量を取り出す（煮汁の1/2量の目安は約大さじ4）。残りの具と煮汁を中火にかける。煮立ったら溶き卵の1/2量を回しかけ、すぐにふたをして、30秒〜1分煮る。ときどきフライパンを揺らし、卵が鍋肌にくっつくのを防ぐ。', cue: '具と煮汁を各1/2量（煮汁は約大さじ4）。中火で煮立ったら溶き卵1/2量を回しかけ、ふたをして30秒〜1分。ときどきフライパンを揺らす。' },
      { text: 'フライパンを傾け、具をずらしながらご飯にのせる（むずかしければ、具を下からフライ返しですくえる）。とっておいた卵黄を溶いて1/2量を回しかけ、三つ葉の1/2量を添える。残りも同様に仕上げる。', cue: '卵黄1/2量、三つ葉1/2量を添え、残りも同様に仕上げる。' }
    ],
    cookingTips: ['卵はとにかく「混ぜすぎない」こと！残しておいた白身のかたまりが、仕上がりのとろっとした食感につながります。'], nutritionNote: '1人分 747kcal、塩分3.2g', verification: untested, sourceStatus: 'draft'
  }
]
