export interface IUser {
  displayName: string | null
  email: string | null
  id: string | null
  photoURL: string | null
}

export interface StorageService {
  user: IUser | null
  on_boarding: boolean
  user_basal_calories: number
  well_come_completed: boolean
}
