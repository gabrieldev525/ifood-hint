// React
import React from 'react'
import { ScrollView } from 'react-native'

// Third party
import { FontAwesome } from '@expo/vector-icons'

// Project
import headerImage from '@/static/images/test.png'
import ProductItem from '@/components/product-item'

// Local
import {
  Container,
  HeaderContainer,
  HeaderImage,
  HeaderText,
  HeaderTextHighlight,
  ProductList,
  ProductListContainer,
  ProductListHeader,
  ProductListTitle
} from './styles'


export const RecomendationProductList = () => {
  return (
    <ScrollView>
      <Container>
        <HeaderContainer>
          <HeaderImage source={headerImage} />
          <HeaderText>Separamos alguns <HeaderTextHighlight>restaurantes</HeaderTextHighlight> que <HeaderTextHighlight>você vai amar</HeaderTextHighlight> conhecer</HeaderText>
        </HeaderContainer>

        <ProductListContainer>
          <ProductListHeader>
            <ProductListTitle>Vegano</ProductListTitle>
            <FontAwesome name="heart-o" size={24} color="#A6A29F" />
          </ProductListHeader>
          <ProductList>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ScrollView>
          </ProductList>
        </ProductListContainer>

        <ProductListContainer>
          <ProductListHeader>
            <ProductListTitle>Vegano</ProductListTitle>
            <FontAwesome name="heart-o" size={24} color="#A6A29F" />
          </ProductListHeader>
          <ProductList>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ScrollView>
          </ProductList>
        </ProductListContainer>

        <ProductListContainer>
          <ProductListHeader>
            <ProductListTitle>Vegano</ProductListTitle>
            <FontAwesome name="heart-o" size={24} color="#A6A29F" />
          </ProductListHeader>
          <ProductList>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ScrollView>
          </ProductList>
        </ProductListContainer>
      </Container>
    </ScrollView>
  )
}