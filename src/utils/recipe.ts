import type { Recipe, RecipeRevision } from '../types'

export function applyRevision(recipe: Recipe, revision?: RecipeRevision): Recipe {
  if (!revision) return recipe
  return { ...recipe, ...revision.changes } as Recipe
}
