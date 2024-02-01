import React from 'react'
import { Login } from './screens/auth/Login/Login'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
}

export default App
