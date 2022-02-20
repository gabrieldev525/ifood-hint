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
import { ProductDetail } from '@/components/product-detail'
import { NotImplemented } from '@/containers/not-implemented'
import { Rating } from './containers/rating'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home} />
    </Stack.Navigator>
  )
}

const ProductSubRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='ProductDetail'>
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetail} />
      <Stack.Screen
        name='Rating'
        component={Rating} />
    </Stack.Navigator>
  )
}

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

export const TabScreen = () => {
  return (
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
        component={HomeSubRoutes}
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
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='main'>
        <Stack.Screen
          name='main'
          component={TabScreen} />

        <Stack.Screen
          name='product'
          component={ProductSubRoutes} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}