import type { Recipe } from '../types'
import { cookedStorage, pendingNutrition, pendingYakuzen, provisional, reviewed, soupStorage } from './shared'

export const autumnRecipes: Recipe[] = [
  {
    id: 'chicken-renkon-teriyaki', name: '鶏肉とれんこんの甘辛炒め', description: 'れんこんの食感と鶏肉の香ばしさを楽しむ秋の主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: '鶏もも肉', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'れんこん', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'ごま油', amount: '小さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ2', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '水', amount: '大さじ2', type: 'liquid', group: '合わせ調味料', amountType: 'fixed' }],
    steps: [{ text: 'れんこんは5〜7mm幅に切り、鶏肉は一口大にする。' }, { text: '合わせ調味料を混ぜる。' }, { text: 'フライパンにごま油を熱し、鶏肉を皮目から焼く。' }, { text: 'れんこんを加えて炒める。' }, { text: '鶏肉の中心まで火が通ったら調味料を加え、照りが出るまで絡める。' }],
    cookingTips: ['れんこんは薄くしすぎない。', '調味料は先に混ぜる。'], seasonInfo: 'れんこんを秋の旬食材として楽しむ主菜です。', nutritionNote: '鶏肉はたんぱく質、れんこんは食物繊維やカリウム、ビタミンCなどを含みます。', medicinalFoodNote: '薬膳では、れんこんは伝統的な食養生で扱われる食材です。詳細は専門資料確認後に確定します。', storage: cookedStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'salmon-mushroom-butter-soy', name: '鮭ときのこのバターしょうゆ焼き', description: '鮭ときのこを香ばしいバターしょうゆで仕上げる秋の主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['秋'], tags: ['旬食材', '時短'],
    ingredients: [{ name: '生鮭', amount: '2切れ', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'しめじ', amount: '100g', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: 'まいたけ', amount: '80g', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: '塩', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'こしょう', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: '小麦粉', amount: '薄くまぶす程度', type: 'seasoning', group: '下ごしらえ', amountType: 'guideline' }, { name: 'バター', amount: '15g', type: 'seasoning', group: '仕上げ', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '仕上げ', amountType: 'fixed' }],
    steps: [{ text: '鮭に塩、こしょうをふり、水気をふいて小麦粉を薄くまぶす。きのこはほぐす。' }, { text: 'フライパンに半量のバターを溶かし、鮭を両面焼く。' }, { text: 'きのこを加えて炒める。', cue: '鮭の中心まで十分に火を通す。' }, { text: '残りのバターとしょうゆを加え、全体に絡める。' }],
    cookingTips: ['鮭の水気をふく。', 'しょうゆは仕上げに加えて焦がしすぎない。'], seasonInfo: '鮭ときのこを秋に楽しむ主菜として登録しています。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'sanma-shioyaki', name: 'サンマの塩焼き', description: 'サンマをシンプルな塩焼きで味わう秋の定番。', servings: 2, cookingTime: 20, category: '主菜', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'サンマ', amount: '2尾', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/2程度', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: '大根おろし', amount: '適量', type: 'garnish', group: '添え物', amountType: 'optional' }, { name: 'すだち', amount: '1個', type: 'garnish', group: '添え物', amountType: 'optional' }],
    steps: [{ text: 'サンマは表面の水気をふき、両面に塩をふる。' }, { text: '10分ほど置き、出てきた水分を軽くふく。' }, { text: '魚焼きグリル等で両面を焼く。', cue: '身の中心まで十分に火が通り、皮が香ばしくなるまで。' }, { text: '好みで大根おろしとすだちを添える。' }],
    cookingTips: ['焼く前に水分をふく。', '生焼けを避け、中心まで火を通す。'], seasonInfo: '秋のサンマを味わう定番料理です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spinach-sesame', name: 'ほうれん草のごま和え', description: '香ばしいごまで和える定番の青菜副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['秋', '冬'], tags: ['時短'],
    ingredients: [{ name: 'ほうれん草', amount: '1束', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'すりごま', amount: '大さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '和え衣', amountType: 'fixed' }],
    steps: [{ text: 'ほうれん草はよく洗い、沸騰した湯で茎側からゆでる。' }, { text: '冷水に取り、水気をしっかり絞って4cm程度に切る。' }, { text: '和え衣を混ぜ、ほうれん草と和える。' }],
    cookingTips: ['ゆですぎない。', '水気をよく絞る。'], seasonInfo: '寒い時期のほうれん草を楽しむ定番副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器で冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'kinpira-renkon', name: 'れんこんのきんぴら', description: 'れんこんのしゃきしゃき感を生かした秋の副菜。', servings: 2, cookingTime: 15, category: '副菜', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'れんこん', amount: '180g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'ごま油', amount: '小さじ1', type: 'seasoning', group: '炒め用', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '白ごま', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'れんこんは薄めの半月切りにし、さっと水にさらして水気を切る。' }, { text: 'フライパンにごま油を熱し、れんこんを炒める。' }, { text: 'しょうゆ、みりん、砂糖を加えて汁気がほぼなくなるまで炒める。' }, { text: '白ごまをふる。' }],
    cookingTips: ['水にさらしすぎない。', '炒めすぎず食感を残す。'], seasonInfo: '秋のれんこんを楽しむ定番副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'sweet-potato-simmer', name: 'さつまいもの甘煮', description: 'さつまいもの甘みを生かしてやさしく煮る秋の副菜。', servings: 2, cookingTime: 20, category: '副菜', season: ['秋'], tags: ['旬食材', '節約'],
    ingredients: [{ name: 'さつまいも', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '水', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [{ text: 'さつまいもは1.5cm幅に切り、短時間水にさらす。' }, { text: '鍋にさつまいもと水を入れて煮立てる。' }, { text: '砂糖、みりん、しょうゆを加え、落としぶたをして弱火で煮る。' }, { text: '竹串がすっと通ったら火を止め、少し置いて味をなじませる。' }],
    cookingTips: ['煮崩れしやすいので触りすぎない。', '火加減は弱めにする。'], seasonInfo: '秋のさつまいもを楽しむ副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'mushroom-miso-soup', name: 'きのこのみそ汁', description: '複数のきのこの香りとうまみを楽しむ秋のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'しめじ', amount: '60g', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: 'まいたけ', amount: '60g', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: '生しいたけ', amount: '2枚', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: 'きのこは石づきを除き、食べやすくほぐす・切る。' }, { text: 'だし汁できのこに火が通るまで煮る。' }, { text: '火を弱めてみそを溶き入れ、煮立てずに火を止める。' }],
    cookingTips: ['きのこは洗いすぎず、汚れは軽くふく。', 'みそは味を見て調整する。'], seasonInfo: '秋のきのこを組み合わせたみそ汁です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'sweetpotato-onion-miso', name: 'さつまいもと玉ねぎのみそ汁', description: 'さつまいもの甘みと玉ねぎのうまみを楽しむ秋のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['秋'], tags: ['旬食材', '節約'],
    ingredients: [{ name: 'さつまいも', amount: '120g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '玉ねぎ', amount: '1/4個', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: 'さつまいもは7〜8mm幅に切って短時間水にさらす。玉ねぎは薄切りにする。' }, { text: 'だし汁でさつまいもと玉ねぎを煮る。' }, { text: 'さつまいもに竹串がすっと通ったら火を弱め、みそを溶き入れる。' }, { text: '煮立てずに火を止める。' }],
    cookingTips: ['さつまいもを煮崩さない。', 'みそを入れた後は強く煮立てない。'], seasonInfo: '秋のさつまいもを楽しむみそ汁です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'mushroom-takikomi', name: 'きのこの炊き込みご飯', description: '複数のきのこの香りを楽しむ、作りやすい2合仕込みの炊き込みご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'しめじ', amount: '100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'まいたけ', amount: '100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '生しいたけ', amount: '4枚（約60g）', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/3', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米を洗って水気を切る。きのこと油揚げを切る。' }, { text: '炊飯器に米と調味料を入れ、だし汁を2合目盛りまで加える。' }, { text: '具材を上に広げ、混ぜずに通常炊飯する。' }, { text: '炊き上がったら底からさっくり混ぜる。' }],
    cookingTips: ['具材をのせた後は混ぜない。', 'きのこは複数種類を組み合わせる。'], seasonInfo: '秋のきのこを楽しむご飯です。', nutritionNote: 'きのこ類は食物繊維を含み、種類によって栄養成分が異なります。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'mushroom-udon', name: 'きのこうどん', description: 'きのこのうまみをだしに生かした秋の温かいうどん。', servings: 2, cookingTime: 20, category: '麺', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'ゆでうどん', amount: '2玉', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'しめじ', amount: '80g', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'まいたけ', amount: '80g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '生しいたけ', amount: '2枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '700ml', type: 'liquid', group: 'つゆ', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: 'つゆ', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: 'つゆ', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/3を目安', type: 'seasoning', group: 'つゆ', amountType: 'guideline' }, { name: '青ねぎ', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'きのこは食べやすくほぐす・切る。' }, { text: '鍋にだし汁、しょうゆ、みりんを入れて煮立て、きのこを煮る。' }, { text: '味を見て塩で調整する。' }, { text: 'うどんを加えて表示どおりに温める。' }, { text: '器に盛り、青ねぎを散らす。' }],
    cookingTips: ['きのこを煮すぎない。', 'つゆは塩を最後に調整する。'], seasonInfo: '秋のきのこを温かいうどんで楽しむ料理です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { notes: 'うどんは作りたてを基本とし、食べる分だけ調理します。' }, verification: provisional, sourceStatus: 'reviewed'
  }
]
