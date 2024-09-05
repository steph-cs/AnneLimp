import React from 'react'
import './gesture-handler'
import { PaperProvider } from 'react-native-paper'
import { LightTheme } from './assets/theme/LightTheme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UserProvider } from './App/context/UserContext'
import Routes from './Routes'

export default function App() {

  return (
    <PaperProvider theme={LightTheme}>
      <UserProvider>
        <GestureHandlerRootView>
          <Routes/>
        </GestureHandlerRootView>
      </UserProvider>
    </PaperProvider >
  )
}
