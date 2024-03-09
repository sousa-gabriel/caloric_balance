import React from 'react'
import { Roboto } from '@components'
import * as S from './headerScreensStyles'
import { theme } from '@theme'

interface IHeaderScreens {
  screenName: string
}

export function HeaderScreens({ screenName }: IHeaderScreens) {
  const mockDataUser = {
    name: 'Gabriel Rocha',
    email: 'sousa-gabriel@hotmail.com.br',
    photo: 'https://avatars.githubusercontent.com/u/44657244?v=4',
  }

  return (
    <>
      <S.HeaderScreensContainer>
        <S.UserPhoto>
          {mockDataUser.photo ? (
            <S.Photo source={{ uri: mockDataUser.photo }} />
          ) : (
            <Roboto text="RR" style={{ fontSize: 24 }} color="secondary" />
          )}
        </S.UserPhoto>
        <S.UserInformation>
          <Roboto
            text={mockDataUser.name}
            textStyles="LargeSemiBold"
            color="secondary"
          />
          <Roboto
            text={mockDataUser.email}
            textStyles="MediumRegular"
            color="secondary"
          />
        </S.UserInformation>
      </S.HeaderScreensContainer>
      <Roboto
        text={screenName}
        color="secondary"
        textStyles="SmallRegular"
        style={{ fontSize: theme.spaces.sp24 }}
      />
    </>
  )
}
