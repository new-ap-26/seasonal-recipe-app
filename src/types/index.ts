export type DishCategory = '主菜' | '副菜' | '汁物' | 'ご飯' | '麺' | '丼・ワンプレート' | 'デザート' | 'その他'
export type Season = '春' | '夏' | '秋' | '冬' | '通年'
export type RecipeTag = '作り置き' | '時短' | '冷凍可' | '冷蔵保存' | 'おつまみ' | '朝食向き' | '節約' | '旬食材'
export type VerificationStatus = 'verified' | 'reviewed' | 'pending'
export type CookingTestStatus = 'untested' | 'tested' | 'adjusted' | 'approved'
export type AmountType = 'fixed' | 'guideline' | 'optional'

export type Ingredient = {
  name: string
  amount: string
  type: 'food' | 'seasoning' | 'garnish' | 'liquid'
  group?: string
  amountType?: AmountType
}

export type RecipeStep = {
  text: string
  cue?: string
}

export type RecipeVerification = {
  taste: VerificationStatus
  season: VerificationStatus
  nutrition: VerificationStatus
  yakuzen: VerificationStatus
  storage: VerificationStatus
  cookingTestStatus: CookingTestStatus
}

export type Recipe = {
  id: string
  name: string
  description: string
  servings: number
  servingLabel?: string
  cookingTime: number
  cookingTimeNote?: string
  category: DishCategory
  season: Season[]
  tags: RecipeTag[]
  ingredients: Ingredient[]
  steps: RecipeStep[]
  cookingTips?: string[]
  seasonInfo?: string
  nutritionNote?: string
  medicinalFoodNote?: string
  storage?: {
    refrigeration?: string
    freezing?: string
    reheating?: string
    notes?: string
  }
  verification?: RecipeVerification
  sourceStatus: 'verified' | 'reviewed' | 'draft'
}

export type CookingLog = {
  id: string
  recipeId: string
  cookedAt: string
  rating: number
  tasteTags: string[]
  memo: string
  revisionSnapshot?: Partial<Recipe>
}

export type RecipeRevision = {
  recipeId: string
  updatedAt: string
  changes: Record<string, unknown>
}

export type UserState = {
  favorites: string[]
  staples: string[]
  logs: CookingLog[]
  revisions: Record<string, RecipeRevision>
}
