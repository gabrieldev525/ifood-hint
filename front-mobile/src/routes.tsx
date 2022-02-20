// React
import React from 'react'

// Third party
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Fontisto,
  Feather,
  AntDesign,
  Ionicons
} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'

// Project
import { Home } from '@/containers/home'
import { RecomendationProductList } from '@/containers/recomendation/product-list'
import { NotImplemented } from '@/containers/not-implemented'

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
        component={NotImplemented} />
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
        component={NotImplemented} />
    </Stack.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Início'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#A6A29F',
          tabBarStyle: {
            height: 65,
            paddingTop: 10,
            paddingBottom: 10
          }
        }}>
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