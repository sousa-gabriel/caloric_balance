import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PublicRoutesParamList } from './public.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends PublicRoutesParamList,
        PublicRoutesParamList {}
  }
}

export type TPublicParams<RouteName extends keyof PublicRoutesParamList> =
  NativeStackScreenProps<PublicRoutesParamList, RouteName>
