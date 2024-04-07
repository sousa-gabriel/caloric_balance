export interface IUser {
  displayName: string | null
  email: string | null
  id: string | null
  photoURL: string | null
}

export interface IAuthService {
  setUserBasalCalories: (value: number) => void
  user: IUser | null
  setUser: (value: IUser | null) => void
  onBoarding: boolean
  setOnBoarding: (value: boolean) => void
  userBasalCalories: number
}

export interface IWelComeCompleted {
  wellComeCompleted: boolean
  setWellComeCompleted: (value: boolean) => void
}
