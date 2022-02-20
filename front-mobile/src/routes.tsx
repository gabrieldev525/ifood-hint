// React
import React, { useEffect } from 'react'

// Third party
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Fontisto,
  Feather,
  AntDesign,
  Ionicons
} from '@expo/vector-icons'

// Project
import { Home } from '@/containers/home'
import { MainScreen } from './containers/main'
import { RecomendationProductList } from './containers/recomendation/product-list'
import { ProductDetail } from './components/product-detail'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const ProfileSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }} >
      <Stack.Screen
        name='Recomendation'
        component={RecomendationProductList} />
    </Stack.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ProductDetail'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Home' component={MainScreen} />
        <Stack.Screen name='Recomendation' component={ProfileSubRoutes} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}