import React from 'react'
import { Login } from './screens/auth/Login/Login'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
