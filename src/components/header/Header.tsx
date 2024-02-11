import React from 'react'
import { IconWrapper, Roboto } from '@components'
import { normalize } from '@utils'
import * as S from './HeaderStyles'
import { useNavigation } from '@react-navigation/native'

interface IHeader {
  title: string
}

export function Header({ title }: IHeader) {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <S.Header>
      <S.ContainerIcon>
        <IconWrapper
          icon="arrow-left"
          onPress={handleGoBack}
          color="secondary"
          size="sp24"
        />
      </S.ContainerIcon>
      <Roboto
        text={title}
        color="secondary"
        textStyles="MediumBold"
        style={{ marginLeft: normalize(24) }}
      />
    </S.Header>
  )
}
