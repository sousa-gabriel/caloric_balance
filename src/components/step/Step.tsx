import React from 'react'
import { Header, Roboto } from '@components'
import { normalize } from '@utils'
import * as S from './StepStyles'

interface IHeaderStep {
  haveGoBack?: boolean
  stepCurrent?: number
  maxStep: number
}

export function Step({ haveGoBack = true, maxStep, stepCurrent }: IHeaderStep) {
  return (
    <S.Container>
      {haveGoBack ? <Header /> : <S.NotHeader />}
      <S.Content>
        <Roboto
          text={`Etapa ${stepCurrent} de ${maxStep}`}
          color="secondary"
          textStyles="MediumRegular"
          style={{ marginBottom: normalize(8) }}
        />
        <S.StepContainer>
          {stepCurrent && (
            <S.StepContent maxStep={maxStep} stepCurrent={stepCurrent} />
          )}
        </S.StepContainer>
      </S.Content>
    </S.Container>
  )
}
