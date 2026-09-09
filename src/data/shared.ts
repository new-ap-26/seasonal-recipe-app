import type { RecipeVerification } from '../types'

export const reviewed: RecipeVerification = {
  taste: 'reviewed',
  season: 'reviewed',
  nutrition: 'reviewed',
  yakuzen: 'pending',
  storage: 'reviewed',
  cookingTestStatus: 'untested'
}

export const provisional: RecipeVerification = {
  taste: 'reviewed',
  season: 'reviewed',
  nutrition: 'pending',
  yakuzen: 'pending',
  storage: 'reviewed',
  cookingTestStatus: 'untested'
}

export const pendingNutrition = '栄養情報は日本食品標準成分表との照合後に追記予定です。'
export const pendingYakuzen = '薬膳情報は専門資料の確認後に追記予定です。'

export const cookedStorage = {
  refrigeration: '保存する場合は長時間室温に置かず、清潔な容器に移して速やかに冷蔵する。',
  reheating: '食べる際は中心まで十分に再加熱する。',
  notes: '具体的な保存日数は、料理固有の根拠確認後に表示します。'
}

export const soupStorage = {
  refrigeration: '残った場合は速やかに冷まして冷蔵する。',
  reheating: '再加熱時は汁全体を十分に加熱する。',
  notes: '具体的な保存日数は表示しません。'
}
