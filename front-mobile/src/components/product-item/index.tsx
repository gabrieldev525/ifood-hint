// React
import React from 'react'
import { Text } from 'react-native'

// Third party
import { FontAwesome } from '@expo/vector-icons'
import { CommonActions, useNavigation } from '@react-navigation/native'

// Project
import productIcon from '@/static/images/product-icon.png'

// Local
import {
  ProductItem as ProductItemContainer,
  ProductImage,
  ProductHeader,
  ProductIcon,
  ProductHeaderInfo,
  ProductHeaderInfoTitle,
  ProductHeaderMiniInfo,
  ProductHateText,
  ProductMiniText
} from './styles'

const ProductItem = ({ productImg }) => {
  const navigation = useNavigation()

  const handleClickCard = () => {
    navigation.dispatch(
      CommonActions.navigate('product', { screen: 'ProductDetail' })
    )
  }

  return (
    <ProductItemContainer onPress={handleClickCard} activeOpacity={.8}>
      <ProductHeader>
        <ProductIcon source={productIcon} />
        <ProductHeaderInfo>
          <ProductHeaderInfoTitle>Restaurant Flor do Campo</ProductHeaderInfoTitle>
          <ProductHeaderMiniInfo>
            <FontAwesome name="star" size={12} color="#EEC424" />
            <ProductHateText>4,4</ProductHateText>

            <ProductMiniText>5,5km</ProductMiniText>
            <ProductMiniText>55-66min</ProductMiniText>
            <ProductMiniText>R$ 14,99</ProductMiniText>
          </ProductHeaderMiniInfo>
        </ProductHeaderInfo>
      </ProductHeader>
      <ProductImage source={productImg} />
      <Text>Nome de um prato qualquer</Text>
      <Text>R$29,45</Text>
    </ProductItemContainer>
  )
}

export default ProductItem