import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PublicRoutesParamList } from './public.routes'
import { OnBoardRoutesParamList } from './onBoard.routes'
import { BottomTabsParamList } from './bottomTabs.routes'
import { AppRoutesParamList } from './app.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends OnBoardRoutesParamList,
        BottomTabsParamList,
        AppRoutesParamList,
        PublicRoutesParamList {}
  }
}

export type TPublicParams<RouteName extends keyof PublicRoutesParamList> =
  NativeStackScreenProps<PublicRoutesParamList, RouteName>

export type OnBoardRouteProps<RouteName extends keyof OnBoardRoutesParamList> =
  NativeStackScreenProps<OnBoardRoutesParamList, RouteName>

export type BottomTabsProps<RouteName extends keyof BottomTabsParamList> =
  NativeStackScreenProps<BottomTabsParamList, RouteName>

export type AppRoutesProps<RouteName extends keyof AppRoutesParamList> =
  NativeStackScreenProps<AppRoutesParamList, RouteName>
