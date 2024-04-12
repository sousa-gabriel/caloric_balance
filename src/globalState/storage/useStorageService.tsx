import { MMKV } from 'react-native-mmkv'
import { StorageService } from './storageTypes'

export const storage = new MMKV()

export const storage_key: StorageService = {
  user: null,
  on_boarding: false,
  user_basal_calories: 0,
  well_come_completed: false,
}
