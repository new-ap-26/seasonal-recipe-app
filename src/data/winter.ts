import type { Recipe } from '../types'
import { cookedStorage, pendingNutrition, pendingYakuzen, provisional, reviewed, soupStorage, untested } from './shared'

export const winterRecipes: Recipe[] = [
  {
    id: 'buri-daikon', name: 'ぶり大根', description: 'ぶりのあらのうまみを大根に含ませて、甘辛く煮る冬の煮物。切り身でも作れます。', servings: 3, servingLabel: '2〜3人分', cookingTimeNote: '加熱時間の目安：約30分（下ごしらえは別）', category: '主菜', season: ['冬'], tags: ['旬食材'],
    ingredients: [
      { name: 'ぶりのあら', amount: '300g', type: 'food', amountType: 'fixed' },
      { name: '大根（直径7〜8cmのもの）', amount: '1/2本（約500g）', type: 'food', amountType: 'fixed' },
      { name: 'しょうがの薄切り', amount: '2かけ分', type: 'food', amountType: 'fixed' },
      { name: '水', amount: '1と1/2カップ', type: 'liquid', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ3', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' }
    ],
    steps: [
      { text: 'たっぷりの湯を沸かして弱火にし、ぶりのあらを入れる。表面が白くなったら冷水にとり、ぬめりや血を指でこすって洗い流し、ざるに上げる（霜ふり）。落としぶたを用意する。', cue: '表面が白っぽくなったら、すぐ冷水にとる。' },
      { text: '大根は2cm厚さの輪切りにし、皮を厚めにむいて半月に切る。直径25cmほどの耐熱皿に並べて水大さじ1をふり、ふんわりとラップをかけて電子レンジで約10分加熱する。冷水にとって冷まし、水けを拭く。', cue: '電子レンジで約10分。' },
      { text: 'フライパンに甘辛つゆの材料を入れて強火で煮立て、大根、ぶりのあら、しょうがを入れる。落としぶたをして中火で12〜15分煮る。途中で1〜2回、上下を返す。大根の水分によって煮る時間を加減する。', cue: '中火で12〜15分。途中で1〜2回、上下を返す。' },
      { text: '落としぶたを外して強めの中火にし、フライパンを揺すりながら1〜2分煮つめる。火を止めて器に盛る。', cue: '鍋底に煮汁が少し残るくらいで火を止める。' }
    ],
        cookingTips: ['あらの代わりに切り身を使う場合は、手順3で大根としょうがを先に5分ほど煮てから切り身を加え、さらに10分ほど煮る（切り身はあらより堅くなりやすいため）。'], seasonInfo: 'ぶりと大根を冬に楽しむ定番料理です。', nutritionNote: '参考資料の記載：1/3量あたり232kcal、塩分2.7g。材料や製品により変動します。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'chicken-hakusai-umani', name: '鶏と白菜のうま煮', description: '鶏肉と白菜をとろりと煮合わせる冬のあったか主菜。', servings: 2, cookingTime: 25, category: '主菜', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: '鶏もも肉', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '白菜', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'にんじん', amount: '50g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: 'だし汁', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '片栗粉', amount: '小さじ2', type: 'seasoning', group: '水溶き片栗粉', amountType: 'fixed' }, { name: '水', amount: '小さじ2', type: 'liquid', group: '水溶き片栗粉', amountType: 'fixed' }],
    steps: [
      { text: '鶏肉は余分な脂を除いて一口大に切る。白菜は芯と葉に分け、芯は1cm幅のそぎ切り、葉はざく切りにする。にんじんは3mm厚さの短冊切りにする。片栗粉と水を混ぜておく。' },
      { text: '鍋にだし汁、しょうゆ、みりん、酒、鶏肉、白菜の芯、にんじんを入れて中火にかけ、煮立ったらアクを取る。ふたをして弱めの中火で8〜10分煮る。', cue: '鶏肉の中心まで十分に火を通す。' },
      { text: '白菜の葉を加え、2〜3分煮る。', cue: '葉がしんなりしたら次へ。' },
      { text: '火を弱め、水溶き片栗粉をもう一度混ぜてから回し入れる。中火にして、混ぜながら1分ほど煮る。', cue: '全体にとろみがつき、ふつふつと煮立つまで加熱する。' }
    ],
        cookingTips: ['白菜の葉は後から加える。', '片栗粉は火を弱めてから加え、再度しっかり加熱する。'], seasonInfo: '冬の白菜をたっぷり使う煮物です。', nutritionNote: '鶏肉はたんぱく質、白菜はビタミンCやカリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'hakusai-salmon-simmer', name: '白菜と鮭の煮物', description: '鮭のうまみを白菜に含ませる、やさしい冬の煮物。', servings: 2, cookingTime: 25, category: '主菜', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: '生鮭', amount: '2切れ', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '白菜', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'だし汁', amount: '250ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: '酒', amount: '大さじ2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうが', amount: '1/2片', type: 'food', group: '香味', amountType: 'optional' }],
    steps: [
      { text: '鮭は3等分に切る。白菜は芯と葉に分けてざく切りにする。しょうがを使う場合は、せん切りにする。' },
      { text: '鍋に白菜の芯、だし汁、酒、しょうゆ、みりんを入れて中火にかけ、煮立ったら弱めの中火で5分煮る。' },
      { text: '鮭と白菜の葉、好みでしょうがを加える。' },
      { text: '落としぶたをして、弱めの中火で8〜10分煮る。', cue: '鮭の中心まで十分に火を通す。' }
    ],
        cookingTips: ['鮭を煮すぎない。', '白菜の芯から先に煮る。'], seasonInfo: '白菜と鮭を冬に楽しむ煮物です。', nutritionNote: '鮭はたんぱく質やビタミンD、白菜はビタミンCなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'hakusai-nibitashi', name: '白菜の煮びたし', description: '白菜にだしを含ませる、ほっとする冬の副菜。', servings: 2, cookingTime: 15, category: '副菜', season: ['冬'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '白菜', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [
      { text: '白菜は芯と葉に分け、芯は1cm幅のそぎ切り、葉はざく切りにする。油揚げは熱湯を回しかけて油抜きし、1cm幅に切る。' },
      { text: '鍋にだし汁、しょうゆ、みりん、白菜の芯、油揚げを入れて中火にかけ、煮立ったら弱めの中火で4〜5分煮る。', cue: '芯がやわらかくなったら次へ。' },
      { text: '白菜の葉を加え、2分ほど煮る。' },
      { text: '火を止め、5分ほどおいて味を含ませる。' }
    ],
        cookingTips: ['葉は最後に加える。', '煮すぎず白菜の食感を残す。'], seasonInfo: '冬の白菜を使うやさしい副菜です。', nutritionNote: '白菜はビタミンCやカリウム、油揚げはたんぱく質などを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spinach-ohitashi', name: 'ほうれん草のおひたし', description: 'だしの風味を含ませる冬の定番青菜副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['冬'], tags: ['時短'],
    ingredients: [{ name: 'ほうれん草', amount: '1束', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'だし汁', amount: '100ml', type: 'liquid', group: '浸し地', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '浸し地', amountType: 'fixed' }, { name: 'みりん', amount: '小さじ1', type: 'seasoning', group: '浸し地', amountType: 'fixed' }, { name: 'かつお節', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [
      { text: 'だし汁、しょうゆ、みりんを混ぜて浸し地を作る。みりんのアルコールが気になる場合は、小鍋でひと煮立ちさせてから冷ます。' },
      { text: 'ほうれん草は根元の土をよく洗い落とす。鍋に湯を沸かし、根元から入れて30秒ゆで、葉まで沈めてさらに30秒〜1分ゆでて、冷水にとる。', cue: '茎がしんなりしたら、すぐに冷水にとる。' },
      { text: '水けをしっかり絞り、4cm長さに切る。' },
      { text: '浸し地に10分ほど浸して器に盛り、好みでかつお節をのせる。' }
    ],
        cookingTips: ['ゆですぎない。', '水気を十分に絞る。'], seasonInfo: '寒い時期のほうれん草を楽しむ定番副菜です。', nutritionNote: 'ほうれん草はβ-カロテン、葉酸、鉄などを含みます。', medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器で冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
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
    steps: [
      { text: '大根は皮をむき、5mm厚さのいちょう切りにする。油揚げは熱湯を回しかけて油抜きし、縦半分に切ってから1cm幅に切る。' },
      { text: '鍋にだし汁と大根を入れて中火にかけ、煮立ったら弱めの中火で7〜8分煮る。', cue: '大根が透き通り、竹串がすっと通ったら次へ。' },
      { text: '油揚げを加えて1分煮て、火を弱めてみそを溶き入れる。' },
      { text: '煮立つ直前で火を止める。', cue: 'みそを入れた後は煮立てない。' }
    ],
        cookingTips: ['大根の厚さをそろえる。', 'みそを入れた後は強く煮立てない。'], seasonInfo: '冬の大根を使う定番のみそ汁です。', nutritionNote: '大根はビタミンCやカリウム、油揚げはたんぱく質などを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'taro-takikomi', name: '里芋の炊き込みご飯', description: '里芋のねっとりした食感を楽しむ冬の炊き込みご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 20, cookingTimeNote: '米の浸水30分・炊飯時間は含みません', category: 'ご飯', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '里芋', amount: '200g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [
      { text: '米は洗ってざるに上げ、30分おく。里芋は皮をむいて2cm角に切り、塩少々（分量外）でもんで、ぬめりを洗い流す。油揚げは熱湯を回しかけて油抜きし、細切りにする。' },
      { text: '炊飯器の内釜に米、しょうゆ、酒、みりんを入れ、だし汁を2合の目盛りまで注いでさっと混ぜる。', cue: '調味料を入れてから、目盛りまでだし汁を注ぐ。' },
      { text: '里芋と油揚げを上に広げてのせ、混ぜずに普通に炊く。', cue: '具材をのせたら混ぜない（炊きむらを防ぐ）。' },
      { text: '炊き上がったら、里芋をつぶさないように底からさっくり混ぜる。' }
    ],
        cookingTips: ['里芋は大きさをそろえる。', '具材をのせた後は混ぜない。'], seasonInfo: '冬の里芋を楽しむ炊き込みご飯です。', nutritionNote: '里芋はカリウムや食物繊維などを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'ginger-aburaage-rice', name: '生姜と油揚げの炊き込みご飯', description: '生姜の香りと油揚げのうまみをきかせた冬の炊き込みご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '米の浸水30分・炊飯時間は含みません', category: 'ご飯', season: ['冬'], tags: ['節約'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'しょうが', amount: '25g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [
      { text: '米は洗ってざるに上げ、30分おく。しょうがは皮をこそげて細いせん切りにする。油揚げは熱湯を回しかけて油抜きし、縦半分に切ってから細切りにする。' },
      { text: '炊飯器の内釜に米、しょうゆ、酒、みりんを入れ、だし汁を2合の目盛りまで注いでさっと混ぜる。', cue: '調味料を入れてから、目盛りまでだし汁を注ぐ。' },
      { text: 'しょうがと油揚げを上に広げてのせ、混ぜずに普通に炊く。', cue: '具材をのせたら混ぜない（炊きむらを防ぐ）。' },
      { text: '炊き上がったら、底からさっくり混ぜる。' }
    ],
        cookingTips: ['しょうがは細めに切る。', '具材をのせた後は混ぜない。'], seasonInfo: '寒い時期に香りのよい生姜を楽しむご飯として登録しています。', nutritionNote: '油揚げはたんぱく質やカルシウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'nabeyaki-udon', name: '鍋焼きうどん', description: '具材を小鍋で煮込む、冬のあつあつうどん。', servings: 2, cookingTime: 25, category: '麺', season: ['冬'], tags: ['旬食材'],
    ingredients: [{ name: 'ゆでうどん', amount: '2玉', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '鶏もも肉', amount: '120g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '長ねぎ', amount: '1/2本', type: 'food', group: '具材', amountType: 'fixed' }, { name: '生しいたけ', amount: '2枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'ほうれん草', amount: '60g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '卵', amount: '2個', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '700ml', type: 'liquid', group: 'つゆ', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: 'つゆ', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: 'つゆ', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/3を目安', type: 'seasoning', group: 'つゆ', amountType: 'guideline' }],
    steps: [
      { text: '鶏肉は小さめの一口大、長ねぎは1cm幅の斜め切りにする。しいたけは石づきを落とす。ほうれん草は熱湯で1分ほどゆでて冷水にとり、水けを絞って4cm長さに切る。' },
      { text: '1人用の土鍋2つ（または直径20cmほどの鍋1つ）に、だし汁、しょうゆ、みりんを等分に入れて中火で煮立て、鶏肉、長ねぎ、しいたけを加えて5〜6分煮る。味を見て、塩で調える。', cue: '鶏肉の中心まで十分に火を通す。' },
      { text: 'うどんを加え、2〜3分煮て温める。' },
      { text: '卵を割り入れてふたをし、弱めの中火で2〜3分煮る。ほうれん草を添えて火を止める。', cue: '卵は好みの加減に。白身が透き通っている間は加熱を続ける。' }
    ],
        cookingTips: ['鶏肉を先に十分加熱する。', '卵は好みの加減にしつつ、体調や対象者に応じて十分加熱する。'], seasonInfo: '冬に小鍋で熱々を楽しむ麺料理です。', nutritionNote: '鶏肉はたんぱく質、ほうれん草はβ-カロテンや鉄などを含みます。', medicinalFoodNote: pendingYakuzen, storage: { notes: '作りたてを基本とし、食べる分だけ調理します。' }, verification: provisional, sourceStatus: 'reviewed'
  }
]
