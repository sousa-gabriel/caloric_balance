import { create } from 'zustand'
import { IAuthService, IUser, IWelComeCompleted } from './authTypes'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useAuthStore = create<IAuthService>(set => ({
  user: null,
  setUser: (value: IUser | null) => set({ user: value }),
  onBoarding: false,
  setOnBoarding: (value: boolean) => set({ onBoarding: value }),
  userBasalCalories: 0,
  setUserBasalCalories: (value: number) => set({ userBasalCalories: value }),
}))

const wellComeCompleted = persist<IWelComeCompleted>(
  set => ({
    wellComeCompleted: false,
    setWellComeCompleted: (value: boolean) => set({ wellComeCompleted: value }),
  }),
  {
    name: 'wellcome-completed',
    storage: createJSONStorage(() => AsyncStorage),
  },
)

const useWellComeCompleted = create<IWelComeCompleted>()(wellComeCompleted)

export { useAuthStore, useWellComeCompleted }
