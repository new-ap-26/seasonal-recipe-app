import type { Recipe } from '../types'
import { cookedStorage, untested } from './shared'

export const standardRecipes: Recipe[] = [
  {
    id: 'chikuzenni', name: '筑前煮', description: '鶏肉と根菜を炒めてから、甘辛いつゆで煮含める定番の煮物。', servings: 4, servingLabel: '3〜4人分', cookingTimeNote: '加熱時間の目安：約25〜30分（下ごしらえは別）', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏もも肉（小）', amount: '1枚（約200g）', type: 'food', amountType: 'fixed' }, { name: 'ごぼう', amount: '1本（約150g）', type: 'food', amountType: 'fixed' },
      { name: 'れんこん', amount: '1/2節（約100g）', type: 'food', amountType: 'fixed' }, { name: 'にんじん（小）', amount: '1本（約100g）', type: 'food', amountType: 'fixed' },
      { name: '生しいたけ', amount: '3個', type: 'food', amountType: 'fixed' }, { name: 'こんにゃく（アク抜きしたもの）', amount: '100g', type: 'food', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ1/2', type: 'seasoning', amountType: 'fixed' },
      { name: '水', amount: '1と1/2カップ', type: 'liquid', group: '甘辛つゆ', amountType: 'fixed' }, { name: 'しょうゆ', amount: '大さじ3', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' }, { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' }
    ],
    steps: [
      { text: 'ごぼうは包丁の背で皮をこそげて乱切りに、れんこんは皮をむいて一口大の乱切りにし、どちらも水にさらして水けをきる。しいたけは石づきを落として4等分に、こんにゃくはスプーンで一口大にちぎる。鶏肉は余分な脂を除いて一口大に切る。甘辛つゆの材料を混ぜておく。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、鶏肉を炒める。色が変わったら残りの具材をすべて加え、全体に油がなじむまで約2分炒める。', cue: '鶏肉の色が変わってから、ほかの具材を加える。' },
      { text: '甘辛つゆを加え、煮立ったらアクを取る。落としぶたをして弱めの中火で20〜25分煮る。途中で1〜2回、上下を返す。', cue: '煮汁が具の高さの1/3ほどまで減ったら煮終わり。' },
      { text: '落としぶたを外して強めの中火にし、大きく混ぜながら1〜2分煮つめる。火を止めて器に盛る。', cue: '鍋底に煮汁が少し残るくらいで火を止める。' }
    ],
    nutritionNote: '参考資料の記載：1/4量あたり207kcal、塩分2.1g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'nikujaga', name: '肉じゃが', description: '牛肉をいったん取り出してから煮るので、肉が堅くなりにくい甘辛の煮物。', servings: 3, servingLabel: '2〜3人分', cookingTimeNote: '加熱時間の目安：約15〜20分（下ごしらえは別）', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: 'じゃがいも', amount: '3個（約450g）', type: 'food', amountType: 'fixed' },
      { name: '牛こま切れ肉', amount: '150g', type: 'food', amountType: 'fixed' },
      { name: '玉ねぎ', amount: '1/2個（約100g）', type: 'food', amountType: 'fixed' },
      { name: 'にんじん', amount: '1/2本（約80g）', type: 'food', amountType: 'fixed' },
      { name: '水', amount: '1と1/2カップ', type: 'liquid', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ3', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '甘辛つゆ', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ1（大さじ1/2ずつ使用）', type: 'seasoning', amountType: 'fixed' }
    ],
    steps: [
      { text: 'じゃがいもは皮をむいて4等分し、水に約5分さらして水けをきる。玉ねぎは幅1.5cmのくし形に、にんじんは皮をむいて小さめの乱切りにする。甘辛つゆの材料を混ぜ、落としぶたを用意する。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、牛肉を約1分炒めて取り出す。煮る直前に戻すと、肉が堅くなりにくい。', cue: '肉の色が変わったら取り出す。' },
      { text: 'フライパンを軽く拭き、サラダ油大さじ1/2を中火で熱する。じゃがいも、にんじん、玉ねぎを約2分炒めたら、牛肉を戻して甘辛つゆを加える。煮立ったらアクを取る。', cue: 'じゃがいもの角が透き通ってきたら、牛肉を戻す。' },
      { text: '落としぶたをして、弱めの中火で10〜12分煮る。途中で1〜2回上下を返し、火の通りをそろえる。', cue: '煮汁が軽くふつふつと泡立つくらいの火加減を保つ。' },
      { text: 'じゃがいもに竹串を刺して火の通りを確かめる。落としぶたを外して強めの中火にし、そっと上下を返しながら2〜3分煮つめて火を止める。', cue: '竹串がすっと通ったら煮つめに入る。煮汁が約1/3量になったら火を止める。' }
    ],
    cookingTips: ['落としぶたをすると、少ない煮汁でも全体に味が回ります。'], nutritionNote: '参考資料の記載：1/3量あたり339kcal、塩分2.7g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'saba-misoni', name: 'さばのみそ煮', description: 'さばを皮目から香ばしく焼き、濃厚な甘めのみそだれで短時間煮る一品。みそを2回に分けて加え、香りとうまみを生かします。', servings: 2, cookingTime: 15, cookingTimeNote: '煮る時間は約6分（さばを焼く時間・下ごしらえは別）', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: 'さばの切り身', amount: '2切れ（骨つき約250g／骨なし約200g）', type: 'food', group: '主材料', amountType: 'fixed' },
      { name: 'ねぎ', amount: '1/3本', type: 'food', group: '付け合わせ', amountType: 'fixed' },
      { name: 'ピーマン', amount: '2個', type: 'food', group: '付け合わせ', amountType: 'fixed' },
      { name: 'サラダ油', amount: '小さじ1', type: 'seasoning', group: '焼き用', amountType: 'fixed' },
      { name: 'みそ', amount: '大さじ2（うち大さじ1は仕上げ用）', type: 'seasoning', group: '濃厚みそ煮汁', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '濃厚みそ煮汁', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '濃厚みそ煮汁', amountType: 'fixed' },
      { name: '水', amount: '3/4カップ', type: 'liquid', group: '濃厚みそ煮汁', amountType: 'fixed' }
    ],
    steps: [
      { text: 'ねぎは長さ5cmに切る。ピーマンはへたと種を取り、縦4等分に切る。さばはペーパータオルで水けを拭き、皮目に5〜6本切り込みを入れる。' },
      { text: '直径24cm程度のフライパンにサラダ油を中火で熱する。さばを皮目を下にして並べ、焼き色がつくまで約2分焼く。裏返して約1分焼き、いったん取り出す。', cue: '皮目を下にして約2分、裏返して約1分焼く。' },
      { text: 'フライパンをさっと拭く。みそのうち大さじ1を取り分けておく。残りのみそ、砂糖、みりん、水をフライパンに入れて混ぜ、中火にかけて煮立たせる。さばを皮目を上にして戻し入れ、すきまにねぎとピーマンを加える。落としぶたをして中火で4〜5分煮る。', cue: '煮立った煮汁にさばを皮目を上にして入れ、落としぶたをして4〜5分。' },
      { text: '落としぶたを外し、取り分けたみそを煮汁に溶き入れる。強めの中火にし、煮汁をさばにかけながら、からめるように約30秒〜1分煮つめる。', cue: '仕上げのみそを加え、煮汁をかけながら約30秒〜1分。' }
    ],
    cookingTips: ['みそは大さじ1を後から加える二段階方式。最後に加えるみその香りを残します。', 'さばは先に皮目を焼き、煮るときは皮目を上にして煮ます。', '煮る間は身を返さず、煮汁をかけて味をからめます。'],
    nutritionNote: '画像資料の記載：1人分338kcal、食塩相当量2.5g。材料や製品により変動します。',
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'happosai-style', name: '八宝菜風', description: 'えびと白菜、しいたけを中華風うま塩煮汁で煮る、とろみのあるおかず。黄金比率の煮汁で手早く仕上げます。', servings: 2, cookingTime: 15, cookingTimeNote: '煮る時間は約5分（下ごしらえ・炒める時間は別）', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: 'えび（殻つき）', amount: '8尾（約180g）', type: 'food', group: '主材料', amountType: 'fixed' },
      { name: '白菜の葉', amount: '3枚（約300g）', type: 'food', group: '主材料', amountType: 'fixed' },
      { name: '生しいたけ', amount: '3個', type: 'food', group: '主材料', amountType: 'fixed' },
      { name: '片栗粉', amount: '小さじ1', type: 'food', group: 'えびの下味', amountType: 'fixed' },
      { name: '酒', amount: '小さじ1', type: 'seasoning', group: 'えびの下味', amountType: 'fixed' },
      { name: '塩', amount: '少々', type: 'seasoning', group: 'えびの下味', amountType: 'guideline' },
      { name: 'こしょう', amount: '少々', type: 'seasoning', group: 'えびの下味', amountType: 'guideline' },
      { name: 'サラダ油', amount: '小さじ1', type: 'seasoning', group: '炒め用', amountType: 'fixed' },
      { name: '砂糖', amount: '小さじ1', type: 'seasoning', group: '中華風うま塩煮汁', amountType: 'fixed' },
      { name: '塩', amount: '小さじ1/2', type: 'seasoning', group: '中華風うま塩煮汁', amountType: 'fixed' },
      { name: '鶏ガラスープの素（顆粒）', amount: '小さじ1/3', type: 'seasoning', group: '中華風うま塩煮汁', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '小さじ2', type: 'seasoning', group: '中華風うま塩煮汁', amountType: 'fixed' },
      { name: '湯', amount: '3/4カップ', type: 'liquid', group: '中華風うま塩煮汁', amountType: 'fixed' },
      { name: '片栗粉', amount: '大さじ1と1/2', type: 'food', group: '水溶き片栗粉', amountType: 'fixed' },
      { name: '水', amount: '大さじ1', type: 'liquid', group: '水溶き片栗粉', amountType: 'fixed' },
      { name: 'ごま油', amount: '適量', type: 'seasoning', group: '仕上げ', amountType: 'optional' }
    ],
    steps: [
      { text: '白菜は葉としんに分け、それぞれ一口大に切る。しいたけは軸を切り、半分に切る。えびは殻をむいて尾と背わたを取り、下味の片栗粉、酒、塩、こしょうをもみ込む。中華風うま塩煮汁の材料を混ぜ、水溶き片栗粉も別に混ぜておく。' },
      { text: 'フライパンにサラダ油小さじ1を中火で熱し、えびを入れて約2分炒め、いったん取り出す。' , cue: 'えびは中火で約2分炒めて取り出す。' },
      { text: 'フライパンをさっと拭き、白菜のしんとしいたけを炒める。白菜の葉を加え、全体を炒め合わせる。', },
      { text: '中華風うま塩煮汁を加えてふたをし、中火で約5分煮る。ふたを取ってさっと混ぜ、水溶き片栗粉をもう一度混ぜてから加える。混ぜながらとろみをつけ、仕上げにごま油を加える。', cue: '煮汁を加えてふたをし、中火で約5分。水溶き片栗粉は加える直前に混ぜ直す。' }
    ],
    cookingTips: ['煮汁は砂糖1：塩1/2：鶏ガラスープの素1/3：しょうゆ2：湯3/4カップの比率。', 'えびは先に約2分炒めて取り出し、煮込みの最後まで加熱し続けないようにします。', '水溶き片栗粉は加える直前にもう一度混ぜ、煮汁に加えたら混ぜながらとろみをつけます。'],
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'chicken-nanban', name: 'チキン南蛮', description: '揚げた鶏胸肉を甘酢にくぐらせ、手作りのタルタルソースを添える一皿。', servings: 2, cookingTimeNote: '加熱時間の目安：約6分（油を熱する時間・下ごしらえは別）', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏胸肉（皮なし・大）', amount: '1枚（約300g）', type: 'food', amountType: 'fixed' },
      { name: '塩', amount: '少々', type: 'seasoning', amountType: 'guideline' },
      { name: 'こしょう', amount: '少々', type: 'seasoning', amountType: 'guideline' },
      { name: '小麦粉', amount: '適量', type: 'food', amountType: 'guideline' },
      { name: '溶き卵', amount: '1個分', type: 'food', amountType: 'fixed' },
      { name: 'サラダ油（揚げ油）', amount: '適量（深さ2cm分）', type: 'seasoning', amountType: 'guideline' },
      { name: 'キャベツのせん切り', amount: '適宜', type: 'food', group: '付け合わせ', amountType: 'optional' },
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
      { text: 'バットに甘酢の材料を入れ、砂糖が溶けるまで混ぜる。玉ねぎはみじん切りにして水に約5分さらし、ペーパータオルで包んで水けをしっかり絞る。' },
      { text: 'ゆで卵は白身に縦に切り込みを入れて黄身を取り出す。白身は粗く刻んでボウルに入れ、黄身は粗くくずして加える。残りのタルタルソースの材料を加えて、軽く混ぜる。' },
      { text: '鶏肉を縦長に置き、中央から包丁を寝かせて入れて左右に切り開き、厚みをそろえる（観音開き）。塩、こしょう各少々をふり、小麦粉を全体に薄くまぶす。', cue: '厚みが均一になるように開く。' },
      { text: 'フライパンにサラダ油を深さ2cmほど入れ、170℃に熱する。鶏肉に溶き卵をからめて油に広げ入れ、返しながら約4分揚げる。強火にしてさらに1〜2分揚げ、油をきる。', cue: '170℃の目安：乾いた菜箸を底に当てると、細かい泡がまっすぐ立ち上る。' },
      { text: '揚げた鶏肉を甘酢のバットに入れ、上下を返してからめる。食べやすく切ってキャベツとともに器に盛り、残った甘酢をかけてタルタルソースを添える。' }
    ],
    cookingTips: ['鶏胸肉は観音開きにして厚みをそろえると、揚げ時間が短くなり、しっとり仕上がります。'], nutritionNote: '参考資料の記載：1人分494kcal、塩分3.1g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'pork-shogayaki', name: '豚のしょうが焼き', description: '薄切り肉を短時間で焼き、しょうがだれをからめる手軽な一品。', servings: 2, cookingTimeNote: '加熱時間の目安：約3分（下ごしらえは別）', category: '主菜', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '豚ロース薄切り肉', amount: '200g（8〜10枚）', type: 'food', amountType: 'fixed' },
      { name: 'しょうがのすりおろし', amount: '1かけ分', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ1', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ1', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: 'しょうが焼きだれ', amountType: 'fixed' },
      { name: 'キャベツのせん切り', amount: '適宜', type: 'food', amountType: 'optional' },
      { name: '片栗粉', amount: '小さじ1/2', type: 'food', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ1/2', type: 'seasoning', amountType: 'fixed' }
    ],
    steps: [
      { text: '豚肉をまな板に広げ、茶こしで片栗粉小さじ1/2を片面に均一にふる。しょうが焼きだれの材料を混ぜておく。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、粉をふった面を下にして豚肉を並べる。平らに広げきらず、少しひだを寄せて置くとやわらかく仕上がる。約1分30秒焼く。', cue: '肉の色が半分ほど変わったら裏返す。' },
      { text: '肉を裏返して軽く焼き、出てきた余分な脂をペーパータオルで拭く。しょうが焼きだれを加えて強火にする。' },
      { text: 'フライパンを揺すり、肉を返しながらたれを約30秒煮からめて火を止める。器に盛り、キャベツを添える。', cue: '両面につやが出たら火を止める。' }
    ],
    cookingTips: ['片栗粉を片面にふってから焼くと、たれがよくからみ、ほどよいとろみがつきます。'], nutritionNote: '参考資料の記載：1人分315kcal、塩分1.4g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'chicken-tsukune', name: '鶏つくね', description: '酒を多めに加えたふんわりした鶏つくねを、照り焼きだれで仕上げる。', servings: 3, servingLabel: '2〜3人分', cookingTimeNote: '加熱時間の目安：約6分（下ごしらえは別）', category: '主菜', season: ['通年'], tags: ['定番'],
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
      { name: 'サラダ油', amount: '大さじ1/2', type: 'seasoning', amountType: 'fixed' }
    ],
    steps: [
      { text: 'バット（約25×15cm）にラップを敷く。照り焼きだれの材料を混ぜておく。' },
      { text: 'ボウルにたねの材料を入れ、粘りが出るまで練る。8等分し、水でぬらした手で左右に軽く打ちつけて空気を抜き、長さ約7cmの小判形に整えてバットに並べる。', cue: '粘りが出るまでしっかり練る。' },
      { text: 'フライパンにサラダ油大さじ1/2を中火で熱し、たねを並べて約2分焼く。裏返してふたをし、弱火で約1分30秒蒸し焼きにしたら、余分な脂を拭く。', cue: '焼き色がついたら裏返す。' },
      { text: '照り焼きだれを加えて強火にし、返しながら約2分煮つめて火を止める。器に青じそを敷いてつくねを盛り、残ったたれをかけて白ごまをふり、卵黄を添える。', cue: 'たれが全体にからんだら火を止める。' }
    ],
    nutritionNote: '参考資料の記載：1/3量あたり314kcal、塩分2.0g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'sanshoku-don', name: '三色丼', description: '鶏そぼろ、炒り卵、きぬさやをご飯にのせた、彩りのよい丼。', servings: 2, cookingTimeNote: '加熱時間の目安：約7分（ご飯を炊く時間・下ごしらえは別）', category: '丼・ワンプレート', season: ['通年'], tags: ['定番'],
    ingredients: [
      { name: '鶏ひき肉', amount: '200g', type: 'food', group: '鶏そぼろ', amountType: 'fixed' },
      { name: 'しょうゆ', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ2', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: '照り焼きだれ', amountType: 'fixed' },
      { name: '卵', amount: '2個', type: 'food', group: '炒り卵', amountType: 'fixed' },
      { name: 'みりん', amount: '大さじ1', type: 'seasoning', group: '炒り卵', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1/2', type: 'seasoning', group: '炒り卵', amountType: 'fixed' },
      { name: '酒', amount: '大さじ1/2', type: 'seasoning', group: '炒り卵', amountType: 'fixed' },
      { name: '塩', amount: 'ひとつまみ', type: 'seasoning', group: '炒り卵', amountType: 'guideline' },
      { name: 'きぬさや', amount: '10枚', type: 'food', amountType: 'fixed' },
      { name: '温かいご飯', amount: 'どんぶり2杯分（約400g）', type: 'food', amountType: 'fixed' },
      { name: '塩（きぬさやのゆで湯用）', amount: '少々', type: 'seasoning', amountType: 'guideline' }
    ],
    steps: [
      { text: 'きぬさやはへたと筋を除き、塩少々を加えた湯でさっとゆでて冷水にとる。冷めたら水けをきり、斜め細切りにする。卵を溶きほぐし、みりん大さじ1、砂糖・酒各大さじ1/2、塩ひとつまみを混ぜる。' },
      { text: 'フライパンに卵液を入れて中火にかけ、菜箸3〜4本で絶えず混ぜながら約2分炒る。取り出して、フライパンを軽く拭く。', cue: '細かくぽろぽろになったら取り出す。' },
      { text: 'フライパンに照り焼きだれの材料を混ぜ、ひき肉を加えてよく混ぜてから中火にかける。火にかける前に混ぜておくと、味がなじみ、細かくほぐれる。', cue: '肉全体にたれがなじんでから火にかける。' },
      { text: '手順2と同じように、絶えず混ぜながら約4分炒る。器にご飯を盛り、鶏そぼろ、炒り卵、きぬさやを半量ずつのせる。', cue: '煮汁がわずかに残るくらいで火を止める。' }
    ],
    nutritionNote: '参考資料の記載：1人分635kcal、塩分2.5g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'nasu-pork-miso-itame', name: 'なすと豚バラのみそ炒め', description: 'なすを先に炒めて取り出し、豚バラと甘めのみそだれでまとめる炒め物。', servings: 2, cookingTimeNote: '加熱時間の目安：約5分（下ごしらえは別）', category: '主菜', season: ['夏'], tags: ['定番'],
    ingredients: [
      { name: 'なす', amount: '3個（約240g）', type: 'food', amountType: 'fixed' },
      { name: '豚バラ薄切り肉', amount: '120g', type: 'food', amountType: 'fixed' },
      { name: 'ピーマン', amount: '2個（約60g）', type: 'food', amountType: 'fixed' },
      { name: '赤唐辛子の小口切り', amount: '1/2本分', type: 'seasoning', amountType: 'fixed' },
      { name: 'みそ', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ2', type: 'seasoning', amountType: 'fixed' }
    ],
    steps: [
      { text: 'なすはへたを落とし、ピーラーで皮を縞目にむく（火が通りやすくなる）。大きめの乱切りにして水に約5分さらし、水けを拭く。ピーマンは縦半分に切ってへたと種を除き、小さめの一口大に切る。豚肉は6〜7cm長さに切る。みそだれの材料を混ぜておく。' },
      { text: 'フライパンにサラダ油大さじ2を強めの中火で熱し、なすを2〜3分炒めて取り出す。', cue: '皮につやが出て、身に軽く焼き色がついたら取り出す。' },
      { text: '同じフライパンで豚肉を中火で1〜2分炒め、ピーマンと赤唐辛子を加えて約30秒炒める。', cue: '肉の色が変わり、脂が出てきたらピーマンを加える。' },
      { text: 'なすを戻してみそだれを加え、手早く炒め合わせて火を止める。', cue: 'たれが全体にからんだら火を止める。' }
    ],
    cookingTips: ['なすだけを先に炒めておくと、油がしっかり回り、中までやわらかく仕上がります。'], nutritionNote: '参考資料の記載：1人分445kcal、塩分2.3g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'kabocha-beef-miso-itame', name: 'かぼちゃと牛肉のみそ炒め', description: '蒸し焼きにしたかぼちゃと牛肉を、こっくりしたみそだれで炒め合わせる。', servings: 2, cookingTimeNote: '加熱時間の目安：約6分（下ごしらえは別）', category: '主菜', season: ['秋'], tags: ['定番'],
    ingredients: [
      { name: 'かぼちゃ', amount: '1/6個（正味約200g）', type: 'food', amountType: 'fixed' },
      { name: '牛こま切れ肉', amount: '150g', type: 'food', amountType: 'fixed' },
      { name: 'しし唐辛子', amount: '6本', type: 'food', amountType: 'fixed' },
      { name: '赤唐辛子の小口切り', amount: '1/2本分', type: 'seasoning', amountType: 'fixed' },
      { name: 'みそ', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '酒', amount: '大さじ2', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '砂糖', amount: '大さじ1', type: 'seasoning', group: 'みそだれ', amountType: 'fixed' },
      { name: '酒', amount: '小さじ1', type: 'seasoning', group: '牛肉の下味', amountType: 'fixed' },
      { name: '片栗粉', amount: '小さじ1', type: 'food', group: '牛肉の下味', amountType: 'fixed' },
      { name: '水', amount: '大さじ1', type: 'liquid', amountType: 'fixed' },
      { name: 'サラダ油', amount: '大さじ1（大さじ1/2ずつ使用）', type: 'seasoning', amountType: 'fixed' }
    ],
    steps: [
      { text: 'かぼちゃはわたと種を除き、横半分に切ってから1cm幅に切る。牛肉に酒・片栗粉各小さじ1をもみ込む。' },
      { text: 'フライパンにサラダ油大さじ1/2を弱めの中火で熱し、かぼちゃを並べて2分焼く。裏返して水大さじ1をふり、ふたをして2分蒸し焼きにして取り出す。' },
      { text: 'サラダ油大さじ1/2を足し、牛肉を中火で1〜2分炒める。しし唐辛子と赤唐辛子を加え、約30秒炒める。', cue: '肉の色が変わり、脂が出てきたらしし唐辛子を加える。' },
      { text: 'かぼちゃを戻してみそだれを加え、手早く炒め合わせて火を止める。', cue: 'たれが全体にからんだら火を止める。' }
    ],
    nutritionNote: '参考資料の記載：1人分441kcal、塩分2.3g。材料や製品により変動します。', storage: cookedStorage,
    verification: untested, sourceStatus: 'draft'
  },
  {
    id: 'oyakodon', name: '親子丼', description: '鶏ももと玉ねぎを甘辛いつゆで煮て、半熟の卵でとじる丼。', servings: 2, cookingTimeNote: '加熱時間の目安：約8分（下ごしらえは別）', category: '丼・ワンプレート', season: ['通年'], tags: ['定番'],
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
      { text: '玉ねぎは縦に薄切りにする。三つ葉は根元を落として3cm長さに切る。鶏肉は余分な脂を除き、小さめの一口大に切る。' },
      { text: '直径20cmほどのフライパンに丼つゆの材料を混ぜて中火にかける。煮立ったら玉ねぎと鶏肉を入れ、ときどき返しながら約6分煮て火を止める。' },
      { text: '卵をボウルに割り入れ、卵黄1個分をそっと取り分けておく。残りを菜箸で5〜6回混ぜ、粗く溶く。器にご飯を盛る。', cue: '白身の大きなかたまりがなくなったら、すぐ混ぜるのをやめる。' },
      { text: 'フライパンの具と煮汁を半量（煮汁は大さじ4ほど）取り出す。残りを中火にかけ、煮立ったら溶き卵の半量を回し入れ、すぐにふたをして30秒〜1分煮る。', cue: 'ときどきフライパンを揺すり、卵がくっつかないようにする。' },
      { text: 'フライパンを傾けて、具をすべらせるようにご飯にのせる（難しければフライ返しを使う）。取り分けた卵黄を溶いて半量を回しかけ、三つ葉の半量をのせる。残りも同じように作る。' }
    ],
    cookingTips: ['卵は混ぜすぎず、白身が少し残るくらいにすると、とろりと仕上がります。'], nutritionNote: '参考資料の記載：1人分747kcal、塩分3.2g。材料や製品により変動します。', storage: { notes: '半熟の卵を使うため、作り置きせず、作りたてを食べる。' },
    verification: untested, sourceStatus: 'draft'
  }
]
