import React, { useRef, useState } from 'react'
import * as S from './InputSearchStyle'
import { theme } from '@theme'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import { TextInputProps, TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Button } from '../button/Button'

export interface IInputSearch extends TextInputProps {
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  onResetSearch?: () => void
  handleSearch: () => void
}
export function InputSearch({
  placeholder,
  value,
  onChangeText,
  onResetSearch,
  handleSearch,
}: IInputSearch) {
  const [isFocused, setIsFocused] = useState(false)
  const colorFocused = isFocused ? 'primary' : 'gray400'
  const [isSecureText, setIsSecureText] = useState(false)
  const { t } = useTranslation()
  const inputRef = useRef<TextInput>(null)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <S.InputContainer style={{ ...theme.shadow }} onPress={focusInput}>
      <S.InputRow focusable={isFocused}>
        <IconWrapper
          icon={'magnify'}
          color={colorFocused}
          size={'sp24'}
          onPress={() => setIsSecureText(!isSecureText)}
        />
        <S.Input
          onFocus={handleInputFocus}
          ref={inputRef}
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
      <Button
        typeButton="ButtonText"
        onPress={handleSearch}
        title={'common_search_food'}
        style={{ width: '50%', justifyContent: 'flex-start' }}
      />
    </S.InputContainer>
  )
}
