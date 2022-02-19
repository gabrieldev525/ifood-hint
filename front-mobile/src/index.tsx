// React
import React from 'react'
import { registerRootComponent } from 'expo'

// Third party
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Project
import { Home } from '@/containers/home'


const Stack = createNativeStackNavigator()

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

registerRootComponent(Index)