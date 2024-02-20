import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PublicRoutesParamList } from './public.routes'
import { OnBoardRoutesParamList } from './onBoard.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends OnBoardRoutesParamList,
        PublicRoutesParamList,
        PublicRoutesParamList {}
  }
}

export type TPublicParams<RouteName extends keyof PublicRoutesParamList> =
  NativeStackScreenProps<PublicRoutesParamList, RouteName>

export type AppRoutesProps<RouteName extends keyof OnBoardRoutesParamList> =
  NativeStackScreenProps<OnBoardRoutesParamList, RouteName>
