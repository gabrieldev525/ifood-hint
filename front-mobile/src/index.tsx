// React
import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'

// Third party
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Project
import { Home } from '@/containers/home'
import store from '@/store'


const Stack = createNativeStackNavigator()

const Index = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

registerRootComponent(Index)