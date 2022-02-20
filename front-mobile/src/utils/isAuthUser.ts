// React
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setTokenAuthUser = async (value: string) => {
  try {
    let setToken
    (async function () {
      setToken = await AsyncStorage.setItem('token', value)
      console.log(AsyncStorage.getItem('token'));
    })()
  } catch (e) {
    console.warn('Error set token', e)
    return undefined
  }
}

export const isAuthUser = () => {
  try {
    let authToken
    (async function () {
      authToken = await AsyncStorage.getItem('token')
    })()

    if (authToken) {
      return true
    }
  } catch (error) {
    return false // TODO: O retorno é falso, caso não autenticado
  }
}

export const removeTokenAuthUser = () => {
  try {
    let removeToken
    (async function () {
      removeToken = await AsyncStorage.getItem('token')
    })()

    if (removeToken) {
      return true
    }
  } catch (error) {
    return false // TODO: O retorno é falso, caso não autenticado
  }
}