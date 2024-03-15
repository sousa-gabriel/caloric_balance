import React, { useState } from 'react'
import { Button, ButtonRow, Dialog, Header, Input, Screen } from '@components'
import { AppRoutesProps } from 'src/routes/navigationType'
import { ItemDetails } from './components/itemDetails/ItemDetails'
import { useNavigation } from '@react-navigation/native'
import * as S from './DiaryItemScreenStyles'

export function DiaryItemScreen({ route }: AppRoutesProps<'DiaryItemScreen'>) {
  const { itemMacroNutrients } = route.params
  const navigation = useNavigation()
  const [buttonSelected, setButtonSelected] = useState<boolean>(true)
  const [labelInput, setLabelInput] = useState<
    'common_portion' | 'common_weight'
  >('common_portion')
  const [quantityInserted, setQuantityInserted] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  function handleSelectedType() {
    setButtonSelected(!buttonSelected)
    setLabelInput(buttonSelected ? 'common_weight' : 'common_portion')
  }

  function handleAddToDiary() {
    if (quantityInserted) {
      // função para adicionar ao banco estes dados
      navigation.navigate('SuccessScreen', {
        description: 'success_screen_message_insert_new_food',
      })
    } else {
      setIsVisible(true)
    }
  }

  return (
    <Screen scrollable>
      <Header title={itemMacroNutrients.name} headerSize={100} />
      <S.DiaryItemScreenContainer />
      <ButtonRow
        buttonPrimaryTitle="common_portion"
        buttonSecondaryTitle="common_weight"
        primaryTypeButton={buttonSelected ? 'Default' : 'ButtonLine'}
        secondaryTypeButton={buttonSelected ? 'ButtonLine' : 'Default'}
        buttonPrimaryOnPress={handleSelectedType}
        buttonSecondaryOnPress={handleSelectedType}
      />
      <S.DiaryItemScreenSpace />
      <Input
        label={labelInput}
        placeholder={`${'common_quantity_place_holder'}:`}
        keyboardType="numeric"
        value={quantityInserted}
        onChangeText={setQuantityInserted}
      />
      <ItemDetails {...itemMacroNutrients} />
      <S.DiaryItemScreenSpace />
      <Button title="common_finished" onPress={handleAddToDiary} />
      <Dialog
        title="common_quantity_place_holder"
        content="common_error_quantity"
        onRequestClose={() => setIsVisible(false)}
        isVisible={isVisible}
        buttonPrimary={{
          title: 'common_understood',
          onPress: () => setIsVisible(false),
        }}
      />
    </Screen>
  )
}
