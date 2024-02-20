import React, { useState } from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { Man, Woman } from '@assets'
import { normalize } from '@utils'
import * as S from './GenderScreenStyles'

type gender = 'Masculino' | 'Feminino'

export function GenderScreen() {
  const [genderSelected, setGenderSelected] = useState<gender>('Masculino')

  function genderSelectedCollor(gender: gender) {
    return genderSelected === gender ? 'primary' : 'secondary'
  }

  return (
    <Screen>
      <Step haveGoBack={false} stepCurrent={1} maxStep={11} />
      <S.GenderScreenContainer>
        <Roboto
          text="Qual é o seu gênero?"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginTop: normalize(56) }}
        />
        <S.GenderContainerOptions>
          <S.GenderOption onPress={() => setGenderSelected('Masculino')}>
            <Man />
            <Roboto
              text="Masculino"
              color={genderSelectedCollor('Masculino')}
              textStyles="LargeSemiBold"
              style={{ marginTop: normalize(16) }}
            />
          </S.GenderOption>
          <S.GenderOption onPress={() => setGenderSelected('Feminino')}>
            <Woman />
            <Roboto
              text="Feminino"
              color={genderSelectedCollor('Feminino')}
              textStyles="LargeSemiBold"
              style={{ marginTop: normalize(16) }}
            />
          </S.GenderOption>
        </S.GenderContainerOptions>
        <Button onPress={() => {}} title="Seguinte" />
      </S.GenderScreenContainer>
    </Screen>
  )
}
