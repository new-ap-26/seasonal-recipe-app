import type { Recipe } from '../types'
import { cookedStorage, pendingNutrition, pendingYakuzen, provisional, reviewed, soupStorage } from './shared'

export const summerRecipes: Recipe[] = [
  {
    id: 'pork-eggplant-sweet-soy', name: '豚肉となすの甘辛炒め', description: '豚肉のコクとなすのとろりとした食感を楽しむ夏の主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['夏'], tags: ['旬食材', '時短'],
    ingredients: [{ name: '豚こま切れ肉', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'なす', amount: '3本', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'サラダ油', amount: '大さじ1', type: 'seasoning', group: '炒め用', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }],
    steps: [{ text: 'なすは乱切りにし、豚肉は大きければ食べやすく切る。' }, { text: '調味料を混ぜておく。' }, { text: 'フライパンに油を熱し、豚肉を炒める。' }, { text: 'なすを加えてしんなりするまで炒める。' }, { text: '合わせ調味料を加え、汁気が少なくなるまで絡める。', cue: '豚肉の中心まで十分に火を通す。' }],
    cookingTips: ['なすは油を吸いやすいので追加油は少量ずつ。', '調味料は先に混ぜる。'], seasonInfo: '夏のなすを使う主菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'aji-nanbanzuke', name: 'アジの南蛮漬け', description: '揚げたてのアジを甘酸っぱい南蛮酢になじませる夏の主菜。', servings: 2, cookingTime: 30, cookingTimeNote: '漬けてなじませる時間は含みません', category: '主菜', season: ['夏'], tags: ['旬食材', 'おつまみ'],
    ingredients: [{ name: 'アジ（三枚おろし）', amount: '2尾分', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '玉ねぎ', amount: '1/4個', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'にんじん', amount: '1/4本', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'ピーマン', amount: '1個', type: 'food', group: '野菜', amountType: 'fixed' }, { name: '塩', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: '片栗粉', amount: '大さじ2程度', type: 'seasoning', group: '衣', amountType: 'guideline' }, { name: '揚げ油', amount: '適量', type: 'seasoning', group: '揚げ用', amountType: 'guideline' }, { name: 'だし汁', amount: '大さじ6', type: 'liquid', group: '南蛮酢', amountType: 'fixed' }, { name: '酢', amount: '大さじ5', type: 'seasoning', group: '南蛮酢', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '南蛮酢', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '南蛮酢', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1と1/2', type: 'seasoning', group: '南蛮酢', amountType: 'fixed' }, { name: '赤唐辛子', amount: '1/2本程度', type: 'seasoning', group: '南蛮酢', amountType: 'guideline' }],
    steps: [{ text: '野菜を細切りにし、南蛮酢の材料を軽く温めて野菜を加える。' }, { text: 'アジに塩をふって5分ほど置き、水気をふき取る。' }, { text: '片栗粉を薄くまぶし、170℃程度の油で中心まで火が通るまで揚げる。' }, { text: '揚げたてを南蛮酢へ入れてなじませる。' }],
    cookingTips: ['アジの水気をしっかり取る。', '揚げたてを南蛮酢に入れる。'], seasonInfo: 'アジを夏の旬食材として楽しむ料理です。', nutritionNote: 'アジはたんぱく質や脂質を含みます。', medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器に移して速やかに冷蔵する。', notes: '酢を使っていても保存日数は未設定です。' }, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'chilled-pork-shabu', name: '冷やし豚しゃぶ', description: 'ゆでた豚肉と夏野菜をさっぱり食べる主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['夏'], tags: ['時短'],
    ingredients: [{ name: '豚しゃぶしゃぶ用肉', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'レタス', amount: '100g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'きゅうり', amount: '1/2本', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'トマト', amount: '1個', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'ぽん酢しょうゆ', amount: '適量', type: 'seasoning', group: 'たれ', amountType: 'guideline' }],
    steps: [{ text: '野菜を食べやすく切って器に盛る。' }, { text: '鍋に湯を沸かし、沸騰を少し落ち着かせて豚肉を1枚ずつ加熱する。' }, { text: '豚肉の色が完全に変わり中心まで火が通ったら取り出す。' }, { text: '粗熱を取り、野菜の上に盛ってぽん酢しょうゆを添える。' }],
    cookingTips: ['豚肉は生焼けを避ける。', '氷水に長くさらすと脂が固くなりやすいので粗熱を取る程度にする。'], seasonInfo: '暑い時期に食べやすい夏の主菜として登録しています。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '調理後は長時間室温に置かず、すぐ食べない場合は冷蔵する。', notes: '作りたて推奨。具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'okra-sesame', name: 'オクラのごま和え', description: 'オクラの粘りとごまの香りを生かした夏の副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['夏'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'オクラ', amount: '10本', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'すりごま', amount: '大さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '和え衣', amountType: 'fixed' }],
    steps: [{ text: 'オクラは塩少々（分量外）で表面をこすり、洗う。' }, { text: '沸騰した湯で好みのかたさにゆで、水気を切る。' }, { text: '食べやすく切る。' }, { text: '和え衣を混ぜ、オクラと和える。' }],
    cookingTips: ['ゆですぎない。', '水気をよく切る。'], seasonInfo: '夏のオクラを楽しむ副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器で冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'tomato-cucumber-salad', name: 'トマトときゅうりのさっぱり和え', description: 'トマトときゅうりを、食べる直前にさっと和える夏の副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['夏'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'トマト', amount: '1個（約150g）', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'きゅうり', amount: '1本（約100g）', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '青じそ', amount: '4枚', type: 'garnish', group: '香味', amountType: 'fixed' }, { name: '塩', amount: 'ひとつまみ', type: 'seasoning', group: '下ごしらえ', amountType: 'guideline' }, { name: '酢', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: 'ごま油', amount: '小さじ1/2', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }],
    steps: [{ text: 'きゅうりに塩をふって5分ほど置き、表面の水分をふく。' }, { text: 'トマトは一口大、青じそは細切りにする。' }, { text: '合わせ調味料を混ぜ、食べる直前に全体を和える。' }],
    cookingTips: ['きゅうりの余分な水分を取る。', '食べる直前に和える。'], seasonInfo: 'トマトときゅうりを夏に楽しむ副菜です。', nutritionNote: 'トマトやきゅうりにはカリウムなどが含まれます。', medicinalFoodNote: pendingYakuzen, storage: { notes: '水分が出て食感が変わりやすいため作りたて推奨です。' }, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'eggplant-myoga-miso', name: 'なすとみょうがのみそ汁', description: 'なすのやわらかさとみょうがの香りを楽しむ夏のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['夏'], tags: ['旬食材'],
    ingredients: [{ name: 'なす', amount: '1本', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'みょうが', amount: '1個', type: 'garnish', group: '仕上げ', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: 'なすは半月切り、みょうがは縦半分にして薄切りにする。' }, { text: 'だし汁でなすがやわらかくなるまで煮る。' }, { text: '火を弱めてみそを溶き入れる。' }, { text: '器に盛り、みょうがをのせる。' }],
    cookingTips: ['みょうがは仕上げに加えて香りを残す。', 'みそを入れた後は強く煮立てない。'], seasonInfo: '夏のなすとみょうがを組み合わせたみそ汁です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'summer-vegetable-cold-soup', name: '夏野菜の冷製スープ', description: 'トマトを中心に夏野菜をなめらかに仕上げる冷たいスープ。', servings: 2, cookingTime: 15, cookingTimeNote: '冷やす時間は含みません', category: '汁物', season: ['夏'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'トマト', amount: '2個', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'きゅうり', amount: '1/2本', type: 'food', group: '野菜', amountType: 'fixed' }, { name: '玉ねぎ', amount: '1/8個', type: 'food', group: '野菜', amountType: 'fixed' }, { name: '水', amount: '100ml', type: 'liquid', group: 'スープ', amountType: 'guideline' }, { name: 'オリーブ油', amount: '小さじ2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酢', amount: '小さじ2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/4を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: '野菜を適当な大きさに切る。' }, { text: '全材料をミキサー等でなめらかにする。' }, { text: '味を見て水と塩で調整する。' }, { text: '清潔な容器に移して冷蔵庫で十分に冷やす。' }],
    cookingTips: ['生食する野菜はよく洗う。', '作った後は室温に放置しない。'], seasonInfo: '夏野菜を冷たく味わうスープです。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '作ったら速やかに冷蔵し、冷たい状態を保つ。', notes: '作りたて推奨。具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'corn-rice', name: 'とうもろこしご飯', description: 'とうもろこしの甘みを米に移して炊く夏のご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['夏'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'とうもろこし', amount: '1本', type: 'food', group: '具材', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '塩', amount: '小さじ2/3', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '水', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米を洗う。とうもろこしは実を包丁でそぎ取る。' }, { text: '炊飯器に米、酒、塩を入れ、水を2合目盛りまで加える。' }, { text: 'とうもろこしの実を広げ、好みで芯も上にのせて通常炊飯する。' }, { text: '炊き上がったら芯を除き、さっくり混ぜる。' }],
    cookingTips: ['具をのせた後は混ぜない。', '芯を入れる場合は炊飯後に必ず取り除く。'], seasonInfo: '夏のとうもろこしを味わう炊き込みご飯です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'edamame-rice', name: '枝豆ご飯', description: '枝豆の色と香りを生かした夏の混ぜご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 20, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['夏'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '枝豆（さやつき）', amount: '200g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '塩', amount: '小さじ2/3', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '水', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米に酒と塩を加え、水を2合目盛りまで入れて通常炊飯する。' }, { text: '枝豆は塩ゆでし、さやから豆を出す。' }, { text: '炊き上がったご飯に枝豆を加え、さっくり混ぜる。' }],
    cookingTips: ['枝豆は別ゆでして色と食感を残す。', '混ぜすぎない。'], seasonInfo: '夏の枝豆を楽しむご飯です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'eggplant-pork-somen', name: 'なすと豚肉のそうめん', description: '甘辛く煮たなすと豚肉をのせる、食べごたえのある夏そうめん。', servings: 2, cookingTime: 25, category: '麺', season: ['夏'], tags: ['旬食材'],
    ingredients: [{ name: 'そうめん', amount: '3束（150g）', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '豚バラ薄切り肉', amount: '120g', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'なす', amount: '2本', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'めんつゆ（ストレート）', amount: '300ml', type: 'liquid', group: 'つゆ', amountType: 'guideline' }, { name: 'ごま油', amount: '小さじ1', type: 'seasoning', group: '炒め用', amountType: 'fixed' }, { name: '青ねぎ', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'なすは半月切り、豚肉は食べやすく切る。' }, { text: 'フライパンにごま油を熱し、豚肉となすを炒める。', cue: '豚肉の中心まで十分に火を通す。' }, { text: 'そうめんを表示どおりにゆで、流水でもみ洗いして水気をよく切る。' }, { text: '器にそうめんを盛り、豚肉となすをのせ、冷やしためんつゆをかける。' }, { text: '好みで青ねぎを散らす。' }],
    cookingTips: ['そうめんの水気をしっかり切る。', '具材は食べる直前まで適切に温度管理する。'], seasonInfo: 'なすとそうめんを組み合わせた夏の麺料理です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { notes: 'ゆでたそうめんは作り置きせず、食べる分だけ調理するのを基本とします。' }, verification: provisional, sourceStatus: 'reviewed'
  }
]
