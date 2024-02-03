import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useAppSafeArea } from '../../hooks/useAppSafeArea'
import * as S from './ScreenStyles'
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/scroollViewContainer/ScrollViewContainer'
import { theme } from '../../theme/theme'

interface IScreen {
  children: ReactNode
  scrollable: boolean
}

export const Screen = ({ children, scrollable = false }: IScreen) => {
  const { bottom, top } = useAppSafeArea()
  const Container = scrollable ? ScrollViewContainer : ViewContainer
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={theme.colors.background}>
        <S.ScreenContainer bottom={bottom} top={top}>
          {children}
        </S.ScreenContainer>
      </Container>
    </KeyboardAvoidingView>
  )
}
