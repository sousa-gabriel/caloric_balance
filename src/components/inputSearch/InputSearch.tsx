import React, { useState } from 'react'
import * as S from './InputSearchStyle'
import { theme } from '@theme'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import { TextInputProps } from 'react-native'
import { useTranslation } from 'react-i18next'

export interface IInputSearch extends TextInputProps {
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  onResetSearch?: () => void
}
export function InputSearch({
  placeholder,
  value,
  onChangeText,
  onResetSearch,
}: IInputSearch) {
  const [isFocused, setIsFocused] = useState(false)
  const colorFocused = isFocused ? 'primary' : 'gray400'
  const [isSecureText, setIsSecureText] = useState(false)
  const { t } = useTranslation()

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  return (
    <S.InputContainer style={{ ...theme.shadow }}>
      <S.InputRow>
        <IconWrapper
          icon={'magnify'}
          color={colorFocused}
          size={'sp24'}
          onPress={() => setIsSecureText(!isSecureText)}
        />
        <S.Input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={t(placeholder ?? '')}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={theme.colors.gray400}
        />
        {value.length > 0 && (
          <IconWrapper
            icon={'trash-can-outline'}
            color={'error'}
            size={'sp24'}
            onPress={onResetSearch}
          />
        )}
      </S.InputRow>
    </S.InputContainer>
  )
}
