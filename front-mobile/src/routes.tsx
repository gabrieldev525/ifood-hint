// React
import React, { useEffect } from 'react'

// Third party
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Fontisto,
  Feather,
  AntDesign,
  Ionicons
} from '@expo/vector-icons'

// Project
import { Home } from '@/containers/home'

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }} >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name='home' color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name='Buscar'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Feather name='search' color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name='Pedidos'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='contacts' color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name='Perfil'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person-outline' color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}