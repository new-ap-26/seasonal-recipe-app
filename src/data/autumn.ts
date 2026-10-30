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
    steps: [
      { text: '鮭に塩、こしょうをふって10分ほどおき、出てきた水けを拭いて、小麦粉を薄くまぶす。しめじは石づきを落としてほぐし、まいたけは食べやすくほぐす。' },
      { text: 'フライパンにバターの半量を中火で溶かし、鮭を皮目から入れて3分焼く。裏返してさらに2〜3分焼く。', cue: '焼き色がついてから裏返す。' },
      { text: 'きのこを加え、ふたをして弱めの中火で3分ほど蒸し焼きにする。', cue: '鮭の中心まで十分に火を通す。' },
      { text: '残りのバターとしょうゆを加え、30秒ほどからめて火を止める。', cue: 'しょうゆは焦げやすいので、仕上げに加える。' }
    ],
        cookingTips: ['鮭の水気をふく。', 'しょうゆは仕上げに加えて焦がしすぎない。'], seasonInfo: '鮭ときのこを秋に楽しむ主菜として登録しています。', nutritionNote: '鮭はたんぱく質やビタミンD、きのこは食物繊維などを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'sanma-shioyaki', name: 'サンマの塩焼き', description: 'サンマをシンプルな塩焼きで味わう秋の定番。', servings: 2, cookingTime: 20, category: '主菜', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'サンマ', amount: '2尾', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '塩', amount: '小さじ1/2程度', type: 'seasoning', group: '下味', amountType: 'guideline' }, { name: '大根おろし', amount: '適量', type: 'garnish', group: '添え物', amountType: 'optional' }, { name: 'すだち', amount: '1個', type: 'garnish', group: '添え物', amountType: 'optional' }],
    steps: [
      { text: 'サンマは表面の水けを拭き、両面に塩をふる（グリルに入らない場合は、長さを半分に切る）。' },
      { text: '10分ほどおき、出てきた水けを拭く。' },
      { text: '魚焼きグリルを予熱し、中火で片面5〜6分、裏返して4〜5分焼く（両面焼きグリルの場合は8〜10分）。', cue: '身の中心まで十分に火が通り、皮に焼き色がつくまで焼く。' },
      { text: '器に盛り、好みで大根おろしとすだちを添える。' }
    ],
        cookingTips: ['焼く前に水分をふく。', '生焼けを避け、中心まで火を通す。'], seasonInfo: '秋のサンマを味わう定番料理です。', nutritionNote: 'サンマはたんぱく質やビタミンD、DHA・EPAなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'spinach-sesame', name: 'ほうれん草のごま和え', description: '香ばしいごまで和える定番の青菜副菜。', servings: 2, cookingTime: 10, category: '副菜', season: ['秋', '冬'], tags: ['時短'],
    ingredients: [{ name: 'ほうれん草', amount: '1束', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'すりごま', amount: '大さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '和え衣', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '和え衣', amountType: 'fixed' }],
    steps: [
      { text: 'ほうれん草は根元に切り込みを入れ、根元の土をよく洗い落とす。和え衣の材料を混ぜておく。' },
      { text: '鍋に湯を沸かし、ほうれん草を根元から入れて30秒ゆで、葉まで沈めてさらに30秒〜1分ゆでる。冷水にとって冷まし、水けをしっかり絞って4cm長さに切る。', cue: '茎がしんなりしたら、すぐに冷水にとる。' },
      { text: '食べる直前に、和え衣と和える。' }
    ],
        cookingTips: ['ゆですぎない。', '水気をよく絞る。'], seasonInfo: '寒い時期のほうれん草を楽しむ定番副菜です。', nutritionNote: 'ほうれん草はβ-カロテン、葉酸、鉄などを含みます。', medicinalFoodNote: pendingYakuzen, storage: { refrigeration: '保存する場合は清潔な容器で冷蔵する。', notes: '具体的な保存日数は未設定です。' }, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'kinpira-renkon', name: 'れんこんのきんぴら', description: 'れんこんのしゃきしゃき感を生かした秋の副菜。', servings: 2, cookingTime: 15, category: '副菜', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'れんこん', amount: '180g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: 'ごま油', amount: '小さじ1', type: 'seasoning', group: '炒め用', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '合わせ調味料', amountType: 'fixed' }, { name: '白ごま', amount: '適量', type: 'garnish', group: '仕上げ', amountType: 'optional' }],
    steps: [
      { text: 'れんこんは皮をむき、3mm厚さの半月切りにする。水に3分ほどさらし、水けをよくきる。しょうゆ、みりん、砂糖を混ぜておく。' },
      { text: 'フライパンにごま油を中火で熱し、れんこんを3分ほど炒める。', cue: 'れんこんが透き通ってきたら次へ。' },
      { text: '合わせた調味料を加え、2分ほど炒めて汁けをとばす。', cue: '汁けがほぼなくなったら火を止める。' },
      { text: '器に盛り、白ごまをふる。' }
    ],
        cookingTips: ['水にさらしすぎない。', '炒めすぎず食感を残す。'], seasonInfo: '秋のれんこんを楽しむ定番副菜です。', nutritionNote: 'れんこんはビタミンCや食物繊維などを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'sweet-potato-simmer', name: 'さつまいもの甘煮', description: 'さつまいもの甘みを生かしてやさしく煮る秋の副菜。', servings: 2, cookingTime: 20, category: '副菜', season: ['秋'], tags: ['旬食材', '節約'],
    ingredients: [{ name: 'さつまいも', amount: '250g', type: 'food', group: '主材料', amountType: 'fixed' }, { name: '水', amount: '200ml', type: 'liquid', group: '煮汁', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }, { name: 'しょうゆ', amount: '小さじ1', type: 'seasoning', group: '煮汁', amountType: 'fixed' }],
    steps: [
      { text: 'さつまいもはよく洗い、皮つきのまま1.5cm幅の輪切りにする。水に5分ほどさらし、水けをきる。' },
      { text: '鍋にさつまいもと水を入れて中火にかけ、煮立ったら砂糖、みりん、しょうゆを加える。' },
      { text: '落としぶたをして弱火で10〜12分煮る。', cue: '竹串がすっと通れば煮上がり。' },
      { text: '火を止め、そのまま5分ほどおいて味をなじませる。' }
    ],
        cookingTips: ['煮崩れしやすいので触りすぎない。', '火加減は弱めにする。'], seasonInfo: '秋のさつまいもを楽しむ副菜です。', nutritionNote: 'さつまいもはビタミンCや食物繊維、カリウムなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: cookedStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'mushroom-miso-soup', name: 'きのこのみそ汁', description: '複数のきのこの香りとうまみを楽しむ秋のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['秋'], tags: ['旬食材'],
    ingredients: [{ name: 'しめじ', amount: '60g', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: 'まいたけ', amount: '60g', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: '生しいたけ', amount: '2枚', type: 'food', group: 'きのこ', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [
      { text: 'しめじは石づきを落としてほぐし、まいたけは食べやすくほぐす。しいたけは石づきを落として薄切りにする。' },
      { text: '鍋にだし汁ときのこを入れて中火にかけ、煮立ったら弱めの中火で3分煮る。', cue: 'きのこがしんなりしたら次へ。' },
      { text: '火を弱めてみそを溶き入れ、煮立つ直前で火を止める。', cue: 'みそを入れた後は煮立てない。' }
    ],
        cookingTips: ['きのこは洗いすぎず、汚れは軽くふく。', 'みそは味を見て調整する。'], seasonInfo: '秋のきのこを組み合わせたみそ汁です。', nutritionNote: 'きのこは食物繊維やビタミンDなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
  },
  {
    id: 'sweetpotato-onion-miso', name: 'さつまいもと玉ねぎのみそ汁', description: 'さつまいもの甘みと玉ねぎのうまみを楽しむ秋のみそ汁。', servings: 2, cookingTime: 15, category: '汁物', season: ['秋'], tags: ['旬食材', '節約'],
    ingredients: [{ name: 'さつまいも', amount: '120g', type: 'food', group: '具材', amountType: 'fixed' }, { name: '玉ねぎ', amount: '1/4個', type: 'food', group: '具材', amountType: 'fixed' }, { name: 'だし汁', amount: '400ml', type: 'liquid', group: '汁', amountType: 'fixed' }, { name: 'みそ', amount: '大さじ1と1/2を目安', type: 'seasoning', group: '調味料', amountType: 'guideline' }],
    steps: [
      { text: 'さつまいもはよく洗い、皮つきのまま7〜8mm厚さのいちょう切りにして、水に3分ほどさらす。玉ねぎは5mm幅の薄切りにする。' },
      { text: '鍋にだし汁、さつまいも、玉ねぎを入れて中火にかけ、煮立ったら弱めの中火で6〜8分煮る。', cue: 'さつまいもに竹串がすっと通ったら次へ。' },
      { text: '火を弱めてみそを溶き入れる。' },
      { text: '煮立つ直前で火を止める。', cue: 'みそを入れた後は煮立てない。' }
    ],
        cookingTips: ['さつまいもを煮崩さない。', 'みそを入れた後は強く煮立てない。'], seasonInfo: '秋のさつまいもを楽しむみそ汁です。', nutritionNote: 'さつまいもはビタミンCや食物繊維などを含みます。', medicinalFoodNote: pendingYakuzen, storage: soupStorage, verification: provisional, sourceStatus: 'reviewed'
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
    steps: [
      { text: 'しめじは石づきを落としてほぐし、まいたけは食べやすくほぐす。しいたけは石づきを落として薄切りにする。青ねぎは小口切りにする。' },
      { text: '鍋にだし汁、しょうゆ、みりんを入れて中火で煮立て、きのこを加えて3分ほど煮る。' },
      { text: '味を見て、塩で調える。' },
      { text: 'うどんを加え、袋の表示時間どおりに温める。', cue: 'うどんの中まで温まったら火を止める。' },
      { text: '器に盛り、青ねぎを散らす。' }
    ],
        cookingTips: ['きのこを煮すぎない。', 'つゆは塩を最後に調整する。'], seasonInfo: '秋のきのこを温かいうどんで楽しむ料理です。', nutritionNote: 'きのこは食物繊維やビタミンDなどを含みます。', medicinalFoodNote: pendingYakuzen, storage: { notes: 'うどんは作りたてを基本とし、食べる分だけ調理します。' }, verification: provisional, sourceStatus: 'reviewed'
  }
]
