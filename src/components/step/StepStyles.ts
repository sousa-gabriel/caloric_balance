import { normalize } from '@utils'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const width = Dimensions.get('window').width - normalize(32)

interface IStepContent {
  stepCurrent: number
  maxStep: number
}

export const Container = styled.View`
  align-items: flex-start;
`

export const NotHeader = styled.View`
  height: ${normalize(50)}px;
`

export const Content = styled.View`
  align-items: center;
`

export const StepContainer = styled.View`
  width: ${width}px;
  height: ${normalize(15)}px;
  border-radius: ${normalize(8)}px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: flex-start;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
`

export const StepContent = styled.View<IStepContent>`
  width: ${({ maxStep, stepCurrent }) => (width / maxStep) * stepCurrent}px;
  height: ${normalize(13)}px;
  border-radius: ${normalize(8)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`
