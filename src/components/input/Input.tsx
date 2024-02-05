import React, { useState } from 'react'
import * as S from './InputStyle'
import { Roboto } from '../roboto/Roboto'
import { theme } from '@theme'
import { IconWrapper } from '../iconWrapper/IconWrapper'

export interface IInput {
  value: string
  label: string
  placeholder: string
  errorMessage?: string
  onChangeText: (value: string) => void
  resetError?: () => void
  isInputPassword?: boolean
}

export function Input({
  label,
  placeholder,
  errorMessage,
  value,
  onChangeText,
  resetError,
  isInputPassword,
}: IInput) {
  const [isFocused, setIsFocused] = useState(false)
  const colorFocused = isFocused ? 'primary' : 'secondary'
  const colorInput = !!errorMessage ? 'error' : colorFocused
  const [isSecureText, setIsSecureText] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
    resetError && resetError()
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  return (
    <S.InputContainer>
      <Roboto text={label} color={colorInput} textStyles="LargeSemiBold" />
      <S.InputRow color={colorInput}>
        <S.Input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          color={colorInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={theme.colors.gray400}
          secureTextEntry={isInputPassword && isSecureText}
        />
        {isInputPassword && (
          <IconWrapper
            icon={isSecureText ? 'eye-off' : 'eye'}
            color={'secondary'}
            size={'sp24'}
            onPress={() => setIsSecureText(!isSecureText)}
          />
        )}
      </S.InputRow>
      {errorMessage && (
        <Roboto color="error" text={errorMessage} textStyles="MediumRegular" />
      )}
    </S.InputContainer>
  )
}
