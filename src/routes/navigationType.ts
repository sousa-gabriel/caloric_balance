import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PublicRoutesParamList } from './public.routes'
import { OnBoardRoutesParamList } from './onBoard.routes'
import { BottomTabsParamList } from './bottomTabs.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends OnBoardRoutesParamList,
        PublicRoutesParamList,
        BottomTabsParamList,
        PublicRoutesParamList {}
  }
}

export type TPublicParams<RouteName extends keyof PublicRoutesParamList> =
  NativeStackScreenProps<PublicRoutesParamList, RouteName>

export type AppRoutesProps<RouteName extends keyof OnBoardRoutesParamList> =
  NativeStackScreenProps<OnBoardRoutesParamList, RouteName>

export type BottomTabsProps<RouteName extends keyof BottomTabsParamList> =
  NativeStackScreenProps<BottomTabsParamList, RouteName>
