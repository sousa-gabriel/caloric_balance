import React from 'react'
import { Roboto } from '../roboto/Roboto'
import * as S from './CheckBoxStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme/theme'
import { normalize } from '../../utils/normalize'

interface ICheckBox {
  checked: boolean
  onCheck: () => void
}

export function CheckBox({ checked, onCheck }: ICheckBox) {
  return (
    <S.CheckBoxContainer onPress={onCheck}>
      <S.CheckBoxShow isChecked={checked}>
        {checked && (
          <Icon
            name="check"
            color={theme.colors.onPrimary}
            size={normalize(20)}
            style={{ alignSelf: 'center' }}
          />
        )}
      </S.CheckBoxShow>
      <Roboto
        text="CheckBox"
        textStyles={checked ? 'MediumSemiBold' : 'MediumRegular'}
        color="secondary"
      />
    </S.CheckBoxContainer>
  )
}
