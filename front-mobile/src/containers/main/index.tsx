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
import { RecomendationProductList } from '../recomendation/product-list'
import { Button } from 'react-native'
import { COLORS } from '@/static/css/variables'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// const FeedSubRoutes = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName='Main'
//       screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name='Main'
//         component={FeedScreen} />
//       <Stack.Screen
//         name='NewsDetail'
//         component={NewsDetail} />
//       <Stack.Screen
//         name='MovieDetail'
//         component={MovieDetail} />
//     </Stack.Navigator>
//   )
// }

const ProfileSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name='Recomendation'
        component={RecomendationProductList} />
    </Stack.Navigator>
  )
}

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }} >
      <Tab.Screen
        name='Início'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name='home' color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name='Buscar'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='search' color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name='Pedidos'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='contacts' color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name='Perfil'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}