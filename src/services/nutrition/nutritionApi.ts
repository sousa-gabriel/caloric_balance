import { Params, api } from '@api'

import { NutritionAPI } from './nutritionTypes'

async function getList({ page, searchValue }: Params): Promise<NutritionAPI> {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const response = await api.get<NutritionAPI>(
    `nutrition?query=${searchValue}&page=${page}`,
  )
  return response.data
}

export const nutritionApi = {
  getList,
}
