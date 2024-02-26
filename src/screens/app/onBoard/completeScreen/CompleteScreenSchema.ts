import { gender } from '../genderScreen/GenderScreen'
import { objective } from '../objectiveScreen/ObjectiveScreen'

interface ICalculateBaseCalories {
  gender: gender
  height: string
  age: string
  weight: string
  objective: objective
}

export function calculateBaseCalories({
  gender,
  height,
  age,
  weight,
  objective,
}: ICalculateBaseCalories) {
  const objectiveCalories = {
    onboarding_objective_lose_weight:
      gender === 'onboarding_gender_male' ? -300 : -200,
    onboarding_object_Keep_in_shape: 0,
    onboarding_object_increase_muscles:
      gender === 'onboarding_gender_male' ? 300 : 200,
  }

  if (gender === 'onboarding_gender_male') {
    return (
      66 +
      13.7 * Number(weight) +
      5 * Number(height) -
      6.8 * Number(age) +
      objectiveCalories[objective]
    )
  } else {
    return (
      655 +
      9.6 * Number(weight) +
      1.8 * Number(height) -
      4.7 * Number(age) +
      objectiveCalories[objective]
    )
  }
}
