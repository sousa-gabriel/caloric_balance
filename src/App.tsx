import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Routes } from './routes/Routes'
import './translations/i18n'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context'

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
