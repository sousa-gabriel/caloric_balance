/**
 * @description Adapta o Nutrition da API para o modelo de Post do domínio
 */

import { NutritionItemAPI } from './nutritionTypes'
import { Nutrition } from './nutritionTypes'

function toNutrition({ item }: NutritionItemAPI): Nutrition {
  return {
    id: item.id.toString(),
    name: item.description,
    totalCalories: item.nutritional_contents.energy.value,
    carbs: item.nutritional_contents.carbohydrates,
    protein: item.nutritional_contents.protein,
    fats: item.nutritional_contents.fat,
    TotalWeigh: `${item.serving_sizes[0].value} ${item.serving_sizes[0].unit}`,
    meal: '',
  }
}

export const nutritionAdapter = {
  toNutrition,
}
