import React, { ReactNode } from 'react'
import { ScrollView, View } from 'react-native'

interface ScreenContainerProps {
  children: ReactNode
  backgroundColor: string
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return (
    <ScrollView
      style={{ backgroundColor, flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  )
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>
}
