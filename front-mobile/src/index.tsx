// React
import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import { SafeAreaView  } from 'react-native-safe-area-context'

// Project
import store from '@/store'

// Local
import { Routes } from './routes'

const Index = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </Provider>
  )
}

registerRootComponent(Index)