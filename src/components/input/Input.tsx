import React, { useState } from 'react'
import * as S from './InputStyle'
import { Roboto } from '../roboto/Roboto'
import { theme } from '@theme'

export interface IInput {
  value: string
  label: string
  placeholder: string
  errorMessage?: string
  onChangeText: (value: string) => void
  resetError?: () => void
}

export function Input({
  label,
  placeholder,
  errorMessage,
  value,
  onChangeText,
  resetError,
}: IInput) {
  const [isFocused, setIsFocused] = useState(false)
  const colorFocused = isFocused ? 'primary' : 'secondary'
  const colorInput = !!errorMessage ? 'error' : colorFocused

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
      <S.Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        color={colorInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.gray400}
      />
      {errorMessage && (
        <Roboto color="error" text={errorMessage} textStyles="MediumRegular" />
      )}
    </S.InputContainer>
  )
}
