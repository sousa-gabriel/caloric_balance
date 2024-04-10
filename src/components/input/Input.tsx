import React, { useState } from 'react'
import * as S from './InputStyle'
import { Roboto } from '../roboto/Roboto'
import { theme } from '@theme'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import { TextInputProps } from 'react-native'
import { useTranslation } from 'react-i18next'
export interface IInput extends TextInputProps {
  label: string
  errorMessage?: string
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
  ...props
}: IInput) {
  const [isFocused, setIsFocused] = useState(false)
  const colorFocused = isFocused ? 'primary' : 'secondary'
  const colorInput = !!errorMessage ? 'error' : colorFocused
  const [isSecureText, setIsSecureText] = useState(false)
  const { t } = useTranslation()

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
      <S.InputRow color={colorInput} isFocused={isFocused}>
        <S.Input
          {...props}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          color={colorInput}
          placeholder={t(placeholder ?? '')}
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
        <Roboto
          color="error"
          text={errorMessage}
          textStyles="MediumRegular"
          style={{ marginBottom: 16 }}
        />
      )}
    </S.InputContainer>
  )
}
