import React from 'react'
import { Button, Roboto } from '@components'
import { OnBoardBalance } from '@assets'
import { normalize } from '@utils'
import * as S from '../OnBoardScreensStyles'

export const BalanceOnBoardScreen = () => {
  return (
    <>
      <OnBoardBalance />
      <S.OnBoardContainer>
        <Roboto text="03." color="secondary" textStyles="LargeBold" />
        <Roboto
          text="Utilize nossa balança para facilitar a contagem de calorias."
          color="secondary"
          textStyles="LargeRegular"
          style={{ marginTop: normalize(30) }}
        />
        <S.OnBoardButtonStart>
          <Button title="Iniciar" onPress={() => {}} typeButton="Default" />
        </S.OnBoardButtonStart>
      </S.OnBoardContainer>
    </>
  )
}
