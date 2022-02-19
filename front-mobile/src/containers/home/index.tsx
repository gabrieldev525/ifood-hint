// React
import { useEffect } from 'react'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

// Project
import { IProduct } from '@/store/modules/product/types'
import { IState } from '@/store/modules/types'
import { fetchProducts } from '@/store/modules/product/action'

// Local
import {
  Container
} from './styles'

export const Home = () => {
  // hooks
  const dispatch = useDispatch()

  // redux
  const products = useSelector<IState, IProduct>(store => store.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Text>{products.name || 'Não informado'}</Text>
      <Text>{products.description || 'Não informado'}</Text>
      <Text>{products.test || 'Não informado'}</Text>

      <Container />
    </>
  )
}