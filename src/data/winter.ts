import type { Recipe } from '../types'
import { cookedStorage, pendingNutrition, pendingYakuzen, provisional, reviewed, soupStorage } from './shared'

export const winterRecipes: Recipe[] = [
  {
    id: 'buri-daikon', name: 'ぶり大根', description: 'ぶりのうまみを大根にしみ込ませる冬の定番煮物。', servings: 2, cookingTime: 30, category: '主菜', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: 'ぶり（切り身）', amount: '2切れ（180〜200g程度）', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '大根', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'しょうが', amount: '1片', type: 'food', group: '香味', amountType: 'fixed' }, { name: '水', amount: '250ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: '酒', amount: '大さじ3', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [{ text: '大根は1.5cm幅の半月切りにし、耐熱容器で600W 6〜7分加熱する。' }, { text: 'ぶりに熱湯を回しかけ、水気を切る。' }, { text: '鍋に煮汁としょうがを入れて煮立て、ぶりと大根を加える。' }, { text: '落としぶたをして弱めの中火で10〜15分煮る。' }, { text: '大根がやわらかくなったら火を止め、数分置いて味をなじませる。' }],
    cookingTips: ['ぶりは熱湯をかけてから煮る。', '煮汁を完全に煮切らない。'], seasonInfo: 'ぶりと大根を冬に楽しむ定番料理です。', nutritionNote: 'ぶりはたんぱく質や脂質、大根はカリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'chicken-hakusai-umani', name: '鶏と白菜のうま煮', description: '鶏肉と白菜をとろりと煮合わせる冬のあったか主菜。', servings: 2, cookingTime: 25, category: '主菜', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: '鶏もも肉', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '白菜', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'にんじん', amount: '50g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'だし汁', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '片栗粉', amount: '小さじ2', type: 'seasoning', group: '水溶き片栗粉', amountType: 'fixed' }, { name: '水', amount: '小さじ2', type: 'liquid', group: '水溶き片栗粉', amountType: 'fixed' }],
    steps: [{ text: '鶏肉は一口大、白菜は芯と葉を分けて食べやすく切る。にんじんは薄切りにする。' }, { text: '鍋に鶏肉、白菜の芯、にんじん、だし汁と調味料を入れて煮る。' }, { text: '鶏肉の中心まで火が通ったら白菜の葉を加える。' }, { text: '水溶き片栗粉を回し入れ、とろみがつくまで加熱する。' }],
    cookingTips: ['白菜の葉は後から加える。', '片栗粉は火を弱めてから加え、再度しっかり加熱する。'], seasonInfo: '冬の白菜をたっぷり使う煮物です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'hakusai-salmon-simmer', name: '白菜と鮭の煮物', description: '鮭のうまみを白菜に含ませる、やさしい冬の煮物。', servings: 2, cookingTime: 25, category: '主菜', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: '生鮭', amount: '2切れ', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '白菜', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'だし汁', amount: '250ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: '酒', amount: '大さじ2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうが', amount: '1/2片', type: 'food', group: '香味', amountType: 'optional' }],
    steps: [{ text: '鮭は食べやすく切り、白菜は芯と葉に分けてざく切りにする。' }, { text: '鍋に白菜の芯、だし汁、酒、しょうゆ、みりんを入れて煮る。' }, { text: '鮭と白菜の葉、好みでしょうがを加える。' }, { text: '落としぶたをして弱めの中火で煮る。', cue: '鮭の中心まで十分に火を通す。' }],
    cookingTips: ['鮭を煮すぎない。', '白菜の芯から先に煮る。'], seasonInfo: '白菜と鮭を冬に楽しむ煮物です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'hakusai-nibitashi', name: '白菜の煮びたし', description: '白菜にだしを含ませる、ほっとする冬の副菜。', servings: 2, cookingTime: 15, category: '副菜', season: ['冬'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '白菜', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [{ text: '白菜はざく切り、油揚げは細切りにする。' }, { text: '鍋にだし汁、しょうゆ、みりん、白菜の芯、油揚げを入れて煮る。' }, { text: '芯がやわらかくなったら葉を加え、さっと煮る。' }, { text: '火を止め、少し置いて味を含ませる。' }],
    cookingTips: ['葉は最後に加える。', '煮すぎず白菜の食感を残す。'], seasonInfo: '冬の白菜を使うやさしい副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spinach-ohitashi', name: 'ほうれん草のおひたし', description: 'だしの風味を含ませる冬の定番青菜副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['冬'], tags: ['時短'],
    ingredients: [{ name: 'ほうれん草', amount: '1束', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'だし汁', amount: '100ml', type: 'liquid', group: '浸し地', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '浸し地', amountType: 'fixed' }, { name: 'みりん', amount: '小さじ1', type: 'seasoning', group: '浸し地', amountType: 'fixed' }, { name: 'かつお節', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: '浸し地を混ぜる。みりんのアルコールが気になる場合は一度加熱して冷ます。' }, { text: 'ほうれん草を茎側からゆで、冷水に取る。' }, { text: '水気をしっかり絞り、4cm程度に切る。' }, { text: '浸し地に浸し、好みでかつお節をのせる。' }],
    cookingTips: ['ゆですぎない。', '水気を十分に絞る。'], seasonInfo: '寒い時期のほうれん草を楽しむ定番副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器で冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'tonjiru', name: '豚汁', description: '豚肉と根菜をたっぷり使った、冬にうれしい具だくさん汁。', servings: 2, cookingTime: 25, category: '汁物', season: ['冬'], tags: ['節約'],
    ingredients: [{ name: '豚バラ薄切り肉', amount: '100g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '大根', amount: '80g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'にんじん', amount: '40g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'ごぼう', amount: '40g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'こんにゃく', amount: '80g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '長ねぎ', amount: '1/3本', type: 'food', group: '仕上げ', amountType: 'fixed' }, { name: 'ごま油', amount: '小さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '450ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2〜2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: '根菜は火の通りがそろう大きさに切り、こんにゃくも食べやすく切る。' }, { text: '鍋にごま油を熱して豚肉を炒め、根菜とこんにゃくを加える。' }, { text: 'だし汁を加えて煮立て、アクを取りながら根菜がやわらかくなるまで煮る。' }, { text: '火を弱め、みそを少量ずつ溶き入れる。' }, { text: '長ねぎを加えてさっと温める。' }],
    cookingTips: ['根菜は大きさをそろえる。', 'みそは少なめから調整する。'], seasonInfo: '根菜を使う冬の具だくさん汁です。', nutritionNote: '豚肉はたんぱく質やビタミンB1、根菜類は食物繊維などを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'daikon-aburaage-miso', name: '大根と油揚げのみそ汁', description: '大根の甘みと油揚げのコクを楽しむ冬のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['冬'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '大根', amount: '100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1/2枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: '大根はいちょう切り、油揚げは細切りにする。' }, { text: 'だし汁で大根がやわらかくなるまで煮る。' }, { text: '油揚げを加えてひと煮し、火を弱めてみそを溶き入れる。' }, { text: '煮立てずに火を止める。' }],
    cookingTips: ['大根の厚さをそろえる。', 'みそを入れた後は強く煮立てない。'], seasonInfo: '冬の大根を使う定番のみそ汁です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'taro-takikomi', name: '里芋の炊き込みご飯', description: '里芋のねっとりした食感を楽しむ冬の炊き込みご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 20, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '里芋', amount: '200g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米は洗って水気を切る。里芋は皮をむき、一口大に切る。油揚げは細切りにする。' }, { text: '炊飯器に米と調味料を入れ、だし汁を2合目盛りまで加える。' }, { text: '里芋と油揚げを上に広げ、混ぜずに通常炊飯する。' }, { text: '炊き上がったら里芋をつぶさないようにさっくり混ぜる。' }],
    cookingTips: ['里芋は大きさをそろえる。', '具材をのせた後は混ぜない。'], seasonInfo: '冬の里芋を楽しむ炊き込みご飯です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'ginger-aburaage-rice', name: '生姜と油揚げの炊き込みご飯', description: '生姜の香りと油揚げのうまみをきかせた冬の炊き込みご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['冬'], tags: ['節約'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'しょうが', amount: '25g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米を洗う。しょうがは細切り、油揚げは細切りにする。' }, { text: '炊飯器に米と調味料を入れ、だし汁を2合目盛りまで加える。' }, { text: 'しょうがと油揚げを上に広げ、混ぜずに通常炊飯する。' }, { text: '炊き上がったらさっくり混ぜる。' }],
    cookingTips: ['しょうがは細めに切る。', '具材をのせた後は混ぜない。'], seasonInfo: '寒い時期に香りのよい生姜を楽しむご飯として登録しています。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'nabeyaki-udon', name: '鍋焼きうどん', description: '具材を小鍋で煮込む、冬のあつあつうどん。', servings: 2, cookingTime: 25, category: '麺', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: 'ゆでうどん', amount: '2玉', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '鶏もも肉', amount: '120g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '長ねぎ', amount: '1/2本', type: 'food', group: '具材', amountType: 'fixed' }, { name: '生しいたけ', amount: '2枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'ほうれん草', amount: '60g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '卵', amount: '2個', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '700ml', type: 'liquid', group: 'つゆ', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: 'つゆ', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: 'つゆ', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/3を目安', type: 'seasoning', group: 'つゆ', amountType: 'guideline' }],
    steps: [{ text: '鶏肉は一口大、長ねぎは斜め切り、しいたけは石づきを除く。ほうれん草は下ゆでして切る。' }, { text: '小鍋にだし汁と調味料を煮立て、鶏肉、長ねぎ、しいたけを煮る。' }, { text: '鶏肉の中心まで十分に火が通ったら、うどんを加えて温める。' }, { text: '卵を割り入れ、好みの加減まで加熱し、ほうれん草を添える。' }],
    cookingTips: ['鶏肉を先に十分加熱する。', '卵は好みの加減にしつつ、体調や対象者に応じて十分加熱する。'], seasonInfo: '冬に小鍋で熱々を楽しむ麺料理です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { notes: '作りたてを基本とし、食べる分だけ調理します。' }, verification: provisional, sourceStatus: 'reviewed'
  }
]
