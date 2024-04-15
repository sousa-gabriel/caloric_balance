import React, { useState } from 'react'
import { ButtonRow, HeaderScreens, Screen } from '@components'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { Image } from 'react-native'

export function BalanceScreen() {
  const [photo, setPhoto] = useState<string | null>(null)

  async function openCamera() {
    await launchCamera({ mediaType: 'photo', quality: 1 }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
        return
      }
      if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage)
        return
      }
      if (response.assets) {
        setPhoto(response.assets[0].uri as string)
      }
    })
  }

  async function openGallery() {
    await launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker')
          return
        }
        if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage)
          return
        }
        if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage)
          return
        }

        if (response.assets) {
          console.log('Tem foto', response.assets[0].uri)
          setPhoto(response.assets[0].uri as string)
        }
      },
    )
  }

  return (
    <Screen>
      <HeaderScreens screenName="bottom_tap_balance" />
      <ButtonRow
        buttonPrimaryOnPress={openCamera}
        buttonPrimaryTitle="Abrir Camera"
        buttonSecondaryOnPress={openGallery}
        buttonSecondaryTitle="Abrir Galeria"
      />

      {photo && (
        <Image
          source={{ uri: photo }}
          style={{ width: '100%', height: 300, marginTop: 20 }}
        />
      )}
    </Screen>
  )
}
