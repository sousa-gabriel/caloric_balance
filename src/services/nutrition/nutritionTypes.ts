export interface Nutrition {
  id: string
  name: string
  totalCalories: number
  carbs: number
  protein: number
  fats: number
  TotalWeigh: string
  meal: string
}

export interface NutritionAPI {
  items: NutritionItemAPI[]
  tags: []
  type: 'food'
}

export interface NutritionItemAPI {
  item: {
    brand_name: string
    country_code: string
    deleted: false
    description: string
    id: number
    nutritional_contents: {
      calcium: number
      carbohydrates: number
      cholesterol: number
      energy: {
        unit: string
        value: number
      }
      fat: number
      fiber: number
      iron: number
      monounsaturated_fat: number
      net_carbs: number
      polyunsaturated_fat: number
      potassium: number
      protein: number
      saturated_fat: number
      sodium: number
      sugar: number
      trans_fat: number
      vitamin_a: number
      vitamin_c: number
    }
    public: true
    serving_sizes: [
      {
        id: string
        index: number
        nutrition_multiplier: number
        unit: string
        value: number
      },
    ]
    type: string
    user_id: string
    verified: boolean
    version: string
  }
}
