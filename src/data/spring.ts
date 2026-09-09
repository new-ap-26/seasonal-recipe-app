import type { Recipe } from '../types'
import { cookedStorage, pendingNutrition, pendingYakuzen, provisional, reviewed, soupStorage } from './shared'

export const springRecipes: Recipe[] = [
  {
    id: 'chicken-bamboo-simmer', name: '鶏肉とたけのこの甘辛煮', description: '鶏のうまみと、たけのこの食感を楽しむ春の煮物。', servings: 2, cookingTime: 25, category: '主菜', season: ['春'], tags: ['旬食材'],
    ingredients: [
      { name: '鶏もも肉', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'ゆでたけのこ', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' },
      { name: 'だし汁', amount: '150ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'サラダ油', amount: '小さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1と1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }
    ],
    steps: [
      { text: '鶏肉は一口大、たけのこは食べやすい厚さに切る。' }, { text: '鍋に油を熱し、鶏肉を皮目から焼く。', cue: '軽く焼き色をつける。' }, { text: 'たけのこを加えて1〜2分炒める。' }, { text: 'だし汁、酒、砂糖を加えて煮立て、アクを取ってしょうゆ、みりんを加える。' }, { text: '落としぶたをして弱めの中火で10〜15分煮る。', cue: '鶏肉の中心まで火が通っていることを確認する。' }, { text: '煮汁を少し残して照りよく仕上げる。' }
    ],
    cookingTips: ['たけのこは薄くしすぎない。', '煮汁を完全に煮切らない。'], seasonInfo: '春のたけのこを楽しむ主菜として登録しています。', nutritionNote: '鶏肉はたんぱく質、たけのこは食物繊維やカリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'salmon-spring-cabbage-steam', name: '鮭と春キャベツの蒸し焼き', description: '鮭と春キャベツをフライパンでふっくら蒸し焼きにする主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [
      { name: '生鮭', amount: '2切れ', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '春キャベツ', amount: '200g', type: 'food', group: '野菜', amountType: 'fixed' }, { name: '新玉ねぎ', amount: '1/2個', type: 'food', group: '野菜', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: '蒸し用', amountType: 'fixed' }, { name: '塩', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'こしょう', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '仕上げ', amountType: 'fixed' }, { name: 'バター', amount: '10g', type: 'seasoning', group: '仕上げ', amountType: 'fixed' }
    ],
    steps: [{ text: '鮭に塩、こしょうをふる。キャベツはざく切り、玉ねぎは薄切りにする。' }, { text: 'フライパンに野菜を広げ、鮭をのせて酒を回しかける。' }, { text: 'ふたをして弱めの中火で蒸し焼きにする。', cue: '鮭の中心まで十分に火を通す。' }, { text: '仕上げにバターとしょうゆを加える。' }],
    cookingTips: ['野菜を下に敷いて焦げつきを防ぐ。', '鮭の火通りを中心まで確認する。'], seasonInfo: 'やわらかな春キャベツを使う春の主菜として登録しています。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'clam-spring-cabbage-sake-steam', name: 'あさりと春キャベツの酒蒸し', description: 'あさりのうまみを春キャベツに移す、短時間で作れる一皿。', servings: 2, cookingTime: 15, cookingTimeNote: 'あさりの砂抜き時間は含みません', category: '主菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'あさり（砂抜き済み）', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '春キャベツ', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '酒', amount: '大さじ3', type: 'seasoning', group: '蒸し用', amountType: 'fixed' }, { name: 'バター', amount: '5g', type: 'seasoning', group: '仕上げ', amountType: 'optional' }, { name: 'こしょう', amount: '少々', type: 'seasoning', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'あさりは殻をこすり合わせて洗う。キャベツは大きめのざく切りにする。' }, { text: 'フライパンにキャベツ、あさりを入れ、酒を加える。' }, { text: 'ふたをして中火で蒸し、あさりの口が開いたら火を止める。' }, { text: '好みでバターとこしょうを加える。' }],
    cookingTips: ['あさりは加熱しすぎない。', '開かないあさりは無理に食べない。'], seasonInfo: 'あさりと春キャベツを組み合わせた春の料理です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'nanohana-sesame', name: '菜の花のごま和え', description: '菜の花のほろ苦さを香ばしいごまで楽しむ春の副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: '菜の花', amount: '1束（約150g）', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'すりごま', amount: '大さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '和え衣', amountType: 'fixed' }],
    steps: [{ text: '菜の花は茎の太い部分と葉先を分ける。' }, { text: '沸騰した湯で茎から入れ、少し遅れて葉先を加えてゆでる。' }, { text: '冷水に取り、水気をしっかり絞って食べやすく切る。' }, { text: '和え衣を混ぜ、食べる直前に菜の花と和える。' }],
    cookingTips: ['ゆですぎず食感を残す。', '水気をよく絞って味をぼやけさせない。'], seasonInfo: '菜の花を春に楽しむ定番副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器に入れて冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'new-potato-sweet-simmer', name: '新じゃがの甘辛煮', description: '新じゃがを皮つきでほっくり煮る、春の副菜。', servings: 2, cookingTime: 25, category: '副菜', season: ['春'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '新じゃがいも', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '水', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [{ text: '新じゃがはよく洗い、大きければ半分に切る。' }, { text: '鍋に新じゃがと水を入れて煮立てる。' }, { text: 'しょうゆ、みりん、砂糖を加え、落としぶたをして弱めの中火で煮る。' }, { text: '竹串がすっと通ったら、煮汁を少し煮詰めて照りを出す。' }],
    cookingTips: ['大きさをそろえる。', '煮崩れしやすいので混ぜすぎない。'], seasonInfo: '皮が薄い新じゃがを楽しむ春の副菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spring-cabbage-new-onion-miso', name: '春キャベツと新玉ねぎのみそ汁', description: '春野菜の甘みを生かした、やさしい味のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['春'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '春キャベツ', amount: '100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '新玉ねぎ', amount: '1/4個', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [{ text: 'キャベツはざく切り、玉ねぎは薄切りにする。' }, { text: 'だし汁で玉ねぎを煮て、少しやわらかくなったらキャベツを加える。' }, { text: '野菜が好みのやわらかさになったら火を弱め、みそを溶き入れる。' }, { text: '煮立てずに火を止める。' }],
    cookingTips: ['春キャベツは煮すぎない。', 'みそは少なめから調整する。'], seasonInfo: '春キャベツと新玉ねぎを使う春のみそ汁です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'clam-miso-soup', name: 'あさりのみそ汁', description: 'あさりのうまみを生かした、だしを足さないシンプルなみそ汁。', servings: 2, cookingTime: 10, cookingTimeNote: '砂抜き時間は含みません', category: '汁物', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'あさり（殻つき・砂抜き済み）', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '水', amount: '350ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }, { name: '小ねぎ', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'あさりは殻同士をこすり合わせて洗う。' }, { text: '鍋にあさりと水を入れて中火にかける。' }, { text: '煮立ってきたらアクを取り、あさりの口が開くまで加熱する。' }, { text: '火を弱めるか止め、みそを少量ずつ溶き入れて味を見る。' }, { text: '弱火で軽く温め、小ねぎを散らす。', cue: 'みそを入れた後は強く煮立てない。' }],
    cookingTips: ['あさりは加熱しすぎない。', 'みそは味を見ながら調整する。'], seasonInfo: '春のおすすめとして登録しています。', nutritionNote: 'あさりは鉄やビタミンB12などを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'bamboo-rice', name: 'たけのこご飯', description: '春のたけのこを香りよくだしで炊き込む定番ご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['春'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'ゆでたけのこ', amount: '150g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米は洗って水気を切る。たけのこは薄切り、油揚げは細切りにする。' }, { text: '炊飯器に米と調味料を入れ、だし汁を2合目盛りまで加える。' }, { text: 'たけのこと油揚げを上に広げ、混ぜずに通常炊飯する。' }, { text: '炊き上がったら底からさっくり混ぜる。' }],
    cookingTips: ['具材をのせた後は混ぜない。', '調味料を入れてから目盛りまでだし汁を加える。'], seasonInfo: '春のたけのこを楽しむ炊き込みご飯です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'green-pea-rice', name: '豆ご飯', description: 'えんどう豆の香りと甘みを楽しむ春のご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '炊飯時間は含みません', category: 'ご飯', season: ['春'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'うすいえんどう・グリーンピース', amount: '正味100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '塩', amount: '小さじ2/3', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '水', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [{ text: '米を洗って炊飯器に入れ、酒と塩を加えてから水を2合目盛りまで入れる。' }, { text: '豆をさっと洗って水気を切る。' }, { text: '豆を米の上に広げ、混ぜずに通常炊飯する。' }, { text: '炊き上がったら豆をつぶさないようにさっくり混ぜる。' }],
    cookingTips: ['豆はやさしく扱う。', '塩を均一に溶かしてから炊く。'], seasonInfo: '春のえんどう豆を味わうご飯です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spring-cabbage-pork-steam', name: '春キャベツと豚肉の蒸し煮', description: '春キャベツの水分で豚肉をふっくら仕上げる簡単主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: '豚バラ薄切り肉', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '春キャベツ', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '酒', amount: '大さじ2', type: 'seasoning', group: '蒸し用', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/3', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'こしょう', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'ぽん酢しょうゆ', amount: '適量', type: 'seasoning', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'キャベツは大きめのざく切り、豚肉は食べやすく切る。' }, { text: '鍋またはフライパンにキャベツと豚肉を交互に重ね、塩、こしょう、酒を加える。' }, { text: 'ふたをして弱めの中火で蒸し煮にする。', cue: '豚肉の中心まで十分に火を通す。' }, { text: '好みでぽん酢しょうゆを添える。' }],
    cookingTips: ['キャベツを下に敷く。', '水分が少ない場合は少量の水を補う。'], seasonInfo: '春キャベツをたっぷり使う春の主菜です。', nutritionNote: pendingNutrition, medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  }
]
