import React from 'react'
import * as S from './AvatarStyles'
import { Roboto } from '../roboto/Roboto'

interface IAvatar {
  userName: string
  userAvatarURL?: string
}

export function Avatar({ userName, userAvatarURL }: IAvatar) {
  function getInitials(name: string) {
    const nameArray = name.split(' ')
    const initials =
      nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0)
    return initials.toUpperCase()
  }

  return (
    <S.AvatarContainer>
      {userAvatarURL ? (
        <S.AvatarImage src={userAvatarURL} />
      ) : (
        <Roboto
          text={getInitials(userName)}
          textStyles="LargeBold"
          color="onPrimary"
        />
      )}
    </S.AvatarContainer>
  )
}
