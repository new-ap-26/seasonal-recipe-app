import type { Recipe } from '../types'

export const recipes: Recipe[] = [
  {
    id: 'chicken-renkon-teriyaki',
    name: '鶏肉とれんこんの甘辛炒め',
    description: 'れんこんの食感を楽しむ、秋冬向けの主菜。',
    servings: 2,
    cookingTime: 20,
    category: '主菜',
    season: ['秋', '冬'],
    tags: ['旬食材', '作り置き'],
    ingredients: [
      { name: '鶏もも肉', amount: '250g', type: 'food' },
      { name: 'れんこん', amount: '150g', type: 'food' },
      { name: 'ごま油', amount: '小さじ1', type: 'seasoning' },
      { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning' },
      { name: '酒', amount: '大さじ1', type: 'seasoning' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning' },
      { name: '砂糖', amount: '小さじ1', type: 'seasoning' }
    ],
    steps: [
      { text: 'れんこんは5mm程度の半月切りにし、水にさらして水気を切る。鶏肉は一口大に切る。' },
      { text: 'フライパンにごま油を入れ、鶏肉を皮目から焼く。', cue: '皮に焼き色がつくまで触りすぎない。' },
      { text: 'れんこんを加えて炒め、火が通ったら調味料を加える。' },
      { text: '全体を絡めながら煮詰める。', cue: 'たれに軽くとろみがつき、表面に照りが出たら止める。' }
    ],
    nutritionNote: 'れんこんは食物繊維、ビタミンC、カリウムなどを含みます。',
    medicinalFoodNote: '薬膳では、れんこんは乾燥する季節の食材として扱われることがあります。',
    storage: { refrigeratedDays: 3, reheating: '電子レンジ可', notes: '十分に冷ましてから密閉容器へ。' },
    sourceStatus: 'draft'
  },
  {
    id: 'salmon-mushroom-foil',
    name: '鮭ときのこのホイル焼き',
    description: '秋の食材をまとめて楽しめる、手軽な主菜。',
    servings: 2,
    cookingTime: 25,
    category: '主菜',
    season: ['秋'],
    tags: ['旬食材', '時短'],
    ingredients: [
      { name: '生鮭', amount: '2切れ', type: 'food' },
      { name: 'しめじ', amount: '100g', type: 'food' },
      { name: '玉ねぎ', amount: '1/2個', type: 'food' },
      { name: '酒', amount: '大さじ1', type: 'seasoning' },
      { name: 'バター', amount: '10g', type: 'seasoning' },
      { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning' }
    ],
    steps: [
      { text: '玉ねぎを薄切りにし、しめじは小房に分ける。' },
      { text: 'アルミホイルに玉ねぎ、鮭、しめじをのせ、酒とバターを加えて包む。' },
      { text: 'フライパンで蒸し焼きにする。', cue: '鮭の中心まで火が通り、身がふっくらしたら仕上がり。' },
      { text: '仕上げにしょうゆを回しかける。' }
    ],
    nutritionNote: '鮭はたんぱく質やビタミンDなどを含みます。',
    medicinalFoodNote: '薬膳では、鮭は体を温める性質を持つ食材として紹介されることがあります。',
    sourceStatus: 'draft'
  },
  {
    id: 'spinach-sesame',
    name: 'ほうれん草のごま和え',
    description: '定番の副菜。あと一品欲しい日に。',
    servings: 2,
    cookingTime: 10,
    category: '副菜',
    season: ['冬', '通年'],
    tags: ['時短', '作り置き', '冷蔵保存'],
    ingredients: [
      { name: 'ほうれん草', amount: '1束', type: 'food' },
      { name: 'すりごま', amount: '大さじ2', type: 'seasoning' },
      { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning' },
      { name: '砂糖', amount: '小さじ1', type: 'seasoning' }
    ],
    steps: [
      { text: 'ほうれん草をゆでて冷水に取り、水気をよく絞る。' },
      { text: '4cm程度に切る。' },
      { text: 'すりごま、しょうゆ、砂糖を混ぜ、ほうれん草と和える。' }
    ],
    storage: { refrigeratedDays: 2, notes: '水気をしっかり切って保存する。' },
    sourceStatus: 'draft'
  },
  {
    id: 'sweetpotato-onion-miso',
    name: 'さつまいもと玉ねぎのみそ汁',
    description: '秋冬にうれしい、やさしい甘みのみそ汁。',
    servings: 2,
    cookingTime: 15,
    category: '汁物',
    season: ['秋', '冬'],
    tags: ['旬食材', '節約'],
    ingredients: [
      { name: 'さつまいも', amount: '120g', type: 'food' },
      { name: '玉ねぎ', amount: '1/4個', type: 'food' },
      { name: 'だし', amount: '400mL', type: 'liquid' },
      { name: 'みそ', amount: '大さじ1と1/2', type: 'seasoning' }
    ],
    steps: [
      { text: 'さつまいもを7〜8mm幅に切って水にさらす。玉ねぎは薄切りにする。' },
      { text: 'だしでさつまいもと玉ねぎを煮る。', cue: 'さつまいもに竹串がすっと通るまで。' },
      { text: '火を弱め、みそを溶き入れる。沸騰させずに火を止める。' }
    ],
    sourceStatus: 'draft'
  },
  {
    id: 'kinpira-renkon',
    name: 'れんこんのきんぴら',
    description: '作り置きにも使いやすい、しゃきしゃき副菜。',
    servings: 2,
    cookingTime: 15,
    category: '副菜',
    season: ['秋', '冬'],
    tags: ['旬食材', '作り置き', '冷蔵保存'],
    ingredients: [
      { name: 'れんこん', amount: '180g', type: 'food' },
      { name: 'ごま油', amount: '小さじ1', type: 'seasoning' },
      { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning' },
      { name: '砂糖', amount: '小さじ1', type: 'seasoning' },
      { name: '白ごま', amount: '適量', type: 'garnish' }
    ],
    steps: [
      { text: 'れんこんを薄めの半月切りにし、水にさらして水気を切る。' },
      { text: 'ごま油でれんこんを炒める。' },
      { text: 'しょうゆ、みりん、砂糖を加えて汁気がほぼなくなるまで炒め、白ごまを振る。' }
    ],
    storage: { refrigeratedDays: 3, frozenDays: 14, reheating: '電子レンジ可', notes: '完全に冷ましてから保存。' },
    sourceStatus: 'draft'
  }
]
