import type { Recipe } from '../types'
import { springRecipes } from './spring'
import { summerRecipes } from './summer'
import { autumnRecipes } from './autumn'
import { winterRecipes } from './winter'
import { standardRecipes } from './standard'

export const recipes: Recipe[] = [
  ...springRecipes,
  ...summerRecipes,
  ...autumnRecipes,
  ...winterRecipes,
  ...standardRecipes
]
