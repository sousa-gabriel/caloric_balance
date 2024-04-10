import { Params } from '@api'

import { nutritionAdapter } from './nutritionAdapter'
import { nutritionApi } from './nutritionApi'
import { Nutrition } from './nutritionTypes'

async function getList({ page, searchValue }: Params): Promise<Nutrition[]> {
  const postPageAPI = await nutritionApi.getList({ page, searchValue })
  return postPageAPI.items.map(nutritionAdapter.toNutrition)
}

export const nutritionService = {
  getList,
}
