// React
import React from 'react'
import { Text } from 'react-native'

// Third party
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
import { RecomendationProductList } from '@/containers/recomendation/product-list'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const SearchSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Recomendation'>
      <Stack.Screen
        name='Recomendation'
        component={RecomendationProductList} />
    </Stack.Navigator>
  )
}

const OrderSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='order-list'>
      <Stack.Screen
        name='order-list'
        component={() => (<Text>Não implementado</Text>)} />
    </Stack.Navigator>
  )
}

const ProfileSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='profile'>
      <Stack.Screen
        name='profile'
        component={() => (<Text>Não implementado</Text>)} />
    </Stack.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Buscar'
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
          component={SearchSubRoutes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='search' color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name='Pedidos'
          component={OrderSubRoutes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='contacts' color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name='Perfil'
          component={ProfileSubRoutes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person-outline' color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}