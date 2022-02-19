// React
import React from 'react'
import { Text } from 'react-native'

// Project
import productImage from '@/static/images/image-product-01.png'
import productIcon from '@/static/images/product-icon.png'

// Local
import {
  ProductItem as ProductItemContainer,
  ProductImage,
  ProductHeader,
  ProductIcon,
  ProductHeaderInfo,
  ProductHeaderInfoTitle,
  ProductHeaderMiniInfo
} from './styles'

const ProductItem = () => {
  return (
    <ProductItemContainer>
      <ProductHeader>
        <ProductIcon source={productIcon} />
        <ProductHeaderInfo>
          <ProductHeaderInfoTitle>Restaurant Flor do Campo</ProductHeaderInfoTitle>
          <ProductHeaderMiniInfo>

          </ProductHeaderMiniInfo>
        </ProductHeaderInfo>
      </ProductHeader>
      <ProductImage source={productImage} />
      <Text>Nome de um prato qualquer</Text>
      <Text>R$29,45</Text>
    </ProductItemContainer>
  )
}

export default ProductItem