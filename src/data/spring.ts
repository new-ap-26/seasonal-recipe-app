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
    steps: [
      { text: '鮭の両面に塩、こしょうをふって10分ほどおき、出てきた水けをペーパータオルで拭く。キャベツは4cm角のざく切り、新玉ねぎは5mm幅の薄切りにする。' },
      { text: 'フライパンにキャベツと玉ねぎを広げ、鮭を皮目を上にしてのせ、酒を回しかける。' },
      { text: 'ふたをして中火にかけ、蒸気が出てきたら弱めの中火にして8〜10分蒸し焼きにする。', cue: '鮭の身が中まで白っぽくなり、箸でほぐれるくらいまで火を通す。' },
      { text: '火を止めてバターをのせ、しょうゆを回しかける。全体をさっと混ぜて器に盛る。' }
    ],
        cookingTips: ['野菜を下に敷いて焦げつきを防ぐ。', '鮭の火通りを中心まで確認する。'], seasonInfo: 'やわらかな春キャベツを使う春の主菜として登録しています。', nutritionNote: '鮭はたんぱく質やビタミンD、キャベツはビタミンCなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'clam-spring-cabbage-sake-steam', name: 'あさりと春キャベツの酒蒸し', description: 'あさりのうまみを春キャベツに移す、短時間で作れる一皿。', servings: 2, cookingTime: 15, cookingTimeNote: 'あさりの砂抜き時間は含みません', category: '主菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'あさり（砂抜き済み）', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '春キャベツ', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '酒', amount: '大さじ3', type: 'seasoning', group: '蒸し用', amountType: 'fixed' }, { name: 'バター', amount: '5g', type: 'seasoning', group: '仕上げ', amountType: 'optional' }, { name: 'こしょう', amount: '少々', type: 'seasoning', group: '仕上げ', amountType: 'optional' }],
    steps: [
      { text: 'あさりは殻同士をこすり合わせて流水で洗い、水けをきる。キャベツは5cm角のざく切りにする。' },
      { text: 'フライパンにキャベツを広げてあさりをのせ、酒を回しかける。' },
      { text: 'ふたをして中火にかけ、3〜5分蒸す。', cue: 'あさりの口がすべて開いたら火を止める。' },
      { text: '好みでバターとこしょうを加え、さっと混ぜて器に盛る。' }
    ],
        cookingTips: ['あさりは加熱しすぎない。', '開かないあさりは無理に食べない。'], seasonInfo: 'あさりと春キャベツを組み合わせた春の料理です。', nutritionNote: 'あさりは鉄やビタミンB12、キャベツはビタミンCなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'nanohana-sesame', name: '菜の花のごま和え', description: '菜の花のほろ苦さを香ばしいごまで楽しむ春の副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: '菜の花', amount: '1束（約150g）', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'すりごま', amount: '大さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '和え衣', amountType: 'fixed' }],
    steps: [
      { text: '菜の花は根元の堅い部分を1cmほど切り落とし、茎と葉先に切り分ける。和え衣の材料をボウルで混ぜておく。' },
      { text: '鍋に湯を沸かし、茎を入れて30秒ゆでてから葉先を加え、さらに30秒〜1分ゆでる。', cue: '茎の太い部分に少し歯ごたえが残るくらいで引き上げる。' },
      { text: '冷水にとって色止めし、水けをしっかり絞って3〜4cm長さに切る。' },
      { text: '食べる直前に、和え衣と和える。', cue: '早く和えると水分が出るので、食べる直前に和える。' }
    ],
        cookingTips: ['ゆですぎず食感を残す。', '水気をよく絞って味をぼやけさせない。'], seasonInfo: '菜の花を春に楽しむ定番副菜です。', nutritionNote: '菜の花はビタミンC、葉酸、カルシウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器に入れて冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'new-potato-sweet-simmer', name: '新じゃがの甘辛煮', description: '新じゃがを皮つきでほっくり煮る、春の副菜。', servings: 2, cookingTime: 25, category: '副菜', season: ['春'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '新じゃがいも', amount: '300g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '水', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1/2', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [
      { text: '新じゃがはたわしでよく洗い、芽と、皮が緑色になった部分は取り除く。皮つきのまま、大きいものは半分に切って大きさをそろえる。', cue: '芽や緑色の部分は必ず取り除く。' },
      { text: '鍋に新じゃがと水を入れて中火にかけ、煮立ったらしょうゆ、みりん、砂糖を加える。' },
      { text: '落としぶたをして弱めの中火で12〜15分煮る。途中で1回、鍋を揺すって上下を入れ替える。', cue: '竹串がすっと通れば煮上がり。' },
      { text: '落としぶたを外して中火にし、鍋を揺すりながら2〜3分煮つめて照りを出す。', cue: '煮汁が鍋底に少し残るくらいで火を止める。' }
    ],
        cookingTips: ['大きさをそろえる。', '煮崩れしやすいので混ぜすぎない。'], seasonInfo: '皮が薄い新じゃがを楽しむ春の副菜です。', nutritionNote: 'じゃがいもはビタミンCやカリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spring-cabbage-new-onion-miso', name: '春キャベツと新玉ねぎのみそ汁', description: '春野菜の甘みを生かした、やさしい味のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['春'], tags: ['旬食材', '節約'],
    ingredients: [{ name: '春キャベツ', amount: '100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '新玉ねぎ', amount: '1/4個', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [
      { text: 'キャベツは3cm角、新玉ねぎは5mm幅の薄切りにする。' },
      { text: '鍋にだし汁と玉ねぎを入れて中火にかけ、煮立ったら弱めの中火で3分煮る。' },
      { text: 'キャベツを加えて2〜3分煮る。', cue: 'キャベツがしんなりしたら次へ。' },
      { text: '火を弱めてみそを溶き入れ、煮立つ直前で火を止める。', cue: 'みそを入れた後は煮立てない。' }
    ],
        cookingTips: ['春キャベツは煮すぎない。', 'みそは少なめから調整する。'], seasonInfo: '春キャベツと新玉ねぎを使う春のみそ汁です。', nutritionNote: 'キャベツはビタミンC、玉ねぎはカリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'clam-miso-soup', name: 'あさりのみそ汁', description: 'あさりのうまみを生かした、だしを足さないシンプルなみそ汁。', servings: 2, cookingTime: 10, cookingTimeNote: '砂抜き時間は含みません', category: '汁物', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: 'あさり（殻つき・砂抜き済み）', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '水', amount: '350ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }, { name: '小ねぎ', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [{ text: 'あさりは殻同士をこすり合わせて洗う。' }, { text: '鍋にあさりと水を入れて中火にかける。' }, { text: '煮立ってきたらアクを取り、あさりの口が開くまで加熱する。' }, { text: '火を弱めるか止め、みそを少量ずつ溶き入れて味を見る。' }, { text: '弱火で軽く温め、小ねぎを散らす。', cue: 'みそを入れた後は強く煮立てない。' }],
    cookingTips: ['あさりは加熱しすぎない。', 'みそは味を見ながら調整する。'], seasonInfo: '春のおすすめとして登録しています。', nutritionNote: 'あさりは鉄やビタミンB12などを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: reviewed, sourceStatus: 'reviewed'
  },
  {
    id: 'bamboo-rice', name: 'たけのこご飯', description: '春のたけのこを香りよくだしで炊き込む定番ご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '米の浸水30分・炊飯時間は含みません', category: 'ご飯', season: ['春'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'ゆでたけのこ', amount: '150g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '油揚げ', amount: '1枚', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1と1/2', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: 'だし汁', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [
      { text: '米は洗ってざるに上げ、30分おく。たけのこは穂先を縦に薄切り、根元は5mm厚さのいちょう切りにする。油揚げは熱湯を回しかけて油抜きし、縦半分に切ってから細切りにする。' },
      { text: '炊飯器の内釜に米、しょうゆ、酒、みりんを入れ、だし汁を2合の目盛りまで注いでさっと混ぜる。', cue: '調味料を入れてから、目盛りまでだし汁を注ぐ。' },
      { text: 'たけのこと油揚げを上に広げてのせ、混ぜずに普通に炊く。', cue: '具材をのせたら混ぜない（炊きむらを防ぐ）。' },
      { text: '炊き上がったらすぐに、しゃもじで底から大きく混ぜる。' }
    ],
        cookingTips: ['具材をのせた後は混ぜない。', '調味料を入れてから目盛りまでだし汁を加える。'], seasonInfo: '春のたけのこを楽しむ炊き込みご飯です。', nutritionNote: 'たけのこは食物繊維やカリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'green-pea-rice', name: '豆ご飯', description: 'えんどう豆の香りと甘みを楽しむ春のご飯。', servings: 4, servingLabel: '作りやすい分量：米2合（約3〜4人分）', cookingTime: 15, cookingTimeNote: '米の浸水30分・炊飯時間は含みません', category: 'ご飯', season: ['春'], tags: ['旬食材'],
    ingredients: [{ name: '米', amount: '2合', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'うすいえんどう・グリーンピース', amount: '正味100g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '酒', amount: '大さじ1', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '塩', amount: '小さじ2/3', type: 'seasoning', group: '調味料', amountType: 'fixed' }, { name: '水', amount: '炊飯器の2合目盛りまで', type: 'liquid', group: '炊飯用', amountType: 'guideline' }],
    steps: [
      { text: '米は洗ってざるに上げ、30分おく。' },
      { text: '炊飯器の内釜に米、酒、塩を入れ、水を2合の目盛りまで注いで、塩が溶けるまでよく混ぜる。', cue: '塩が溶けて全体に行き渡ってから炊く。' },
      { text: '豆はさっと洗って水けをきり、米の上に広げてのせ、混ぜずに普通に炊く。' },
      { text: '炊き上がったら、豆をつぶさないように底からさっくり混ぜる。' }
    ],
        cookingTips: ['豆はやさしく扱う。', '塩を均一に溶かしてから炊く。'], seasonInfo: '春のえんどう豆を味わうご飯です。', nutritionNote: 'えんどう豆はたんぱく質や食物繊維などを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spring-cabbage-pork-steam', name: '春キャベツと豚肉の蒸し煮', description: '春キャベツの水分で豚肉をふっくら仕上げる簡単主菜。', servings: 2, cookingTime: 20, category: '主菜', season: ['春'], tags: ['旬食材', '時短'],
    ingredients: [{ name: '豚バラ薄切り肉', amount: '200g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '春キャベツ', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '酒', amount: '大さじ2', type: 'seasoning', group: '蒸し用', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/3', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'こしょう', amount: '少々', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: 'ぽん酢しょうゆ', amount: '適量', type: 'seasoning', group: '仕上げ', amountType: 'optional' }],
    steps: [
      { text: 'キャベツは5cm角のざく切り、豚肉は5cm長さに切る。' },
      { text: '直径24cmほどのフライパン（または鍋）にキャベツの1/3量を敷き、豚肉の半量を広げてのせる。これをもう一度繰り返し、残りのキャベツをのせる。塩、こしょうをふり、酒を回しかける。' },
      { text: 'ふたをして中火にかけ、蒸気が出てきたら弱めの中火にして10〜12分蒸し煮にする。', cue: '豚肉の色が完全に変わり、中心まで火が通ったら火を止める。' },
      { text: '器に盛り、好みでぽん酢しょうゆを添える。' }
    ],
        cookingTips: ['キャベツを下に敷く。', '水分が少ない場合は少量の水を補う。'], seasonInfo: '春キャベツをたっぷり使う春の主菜です。', nutritionNote: '豚肉はビタミンB1、キャベツはビタミンCなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  }
]
