import React from 'react'
import { Roboto } from '@components'
import * as S from './headerScreensStyles'

export function HeaderScreens() {
  const user = {
    name: 'Gabriel Rocha',
    email: 'sousa-gabriel@hotmail.com.br',
    photo: 'https://avatars.githubusercontent.com/u/44657244?v=4',
  }

  return (
    <S.HeaderScreensContainer>
      <S.UserPhoto>
        {user.photo ? (
          <S.Photo source={{ uri: user.photo }} />
        ) : (
          <Roboto text="RR" style={{ fontSize: 24 }} color="secondary" />
        )}
      </S.UserPhoto>
      <S.UserInformation>
        <Roboto text={user.name} textStyles="LargeSemiBold" color="secondary" />
        <Roboto
          text={user.email}
          textStyles="MediumRegular"
          color="secondary"
        />
      </S.UserInformation>
    </S.HeaderScreensContainer>
  )
}
