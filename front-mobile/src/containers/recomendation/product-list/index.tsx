// React
import React from 'react'
import { ScrollView } from 'react-native'

// Third party
import { FontAwesome } from '@expo/vector-icons'
import { map } from 'lodash'

// Project
import headerImage from '@/static/images/test.png'
import ProductItem from '@/components/product-item'
import productImage00 from '@/static/images/product_section_00.png'
import productImage01 from '@/static/images/product_section_01.png'
import productImage02 from '@/static/images/product_section_02.png'
import productImage03 from '@/static/images/product_section_03.png'
import productImage04 from '@/static/images/product_section_04.png'
import productImage05 from '@/static/images/product_section_05.png'
import productImage06 from '@/static/images/product_section_06.png'
import productImage07 from '@/static/images/product_section_07.png'
import productImage08 from '@/static/images/product_section_08.png'
import productImage09 from '@/static/images/product_section_09.png'
import productImage10 from '@/static/images/product_section_10.png'
import productImage11 from '@/static/images/product_section_11.png'

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
  const section_vegan = [
    { img: productImage00 },
    { img: productImage01 },
    { img: productImage02 },
    { img: productImage03 },
  ]
  const section_proteins = [
    { img: productImage04 },
    { img: productImage05 },
    { img: productImage06 },
    { img: productImage07 },
  ]
  const section_lanches = [
    { img: productImage08 },
    { img: productImage09 },
    { img: productImage10 },
    { img: productImage11 },
  ]

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
              {map(section_vegan, (item) => (
                <ProductItem productImg={item.img} />
              ))}
            </ScrollView>
          </ProductList>
        </ProductListContainer>

        <ProductListContainer>
          <ProductListHeader>
            <ProductListTitle>Proteínas</ProductListTitle>
            <FontAwesome name="heart-o" size={24} color="#A6A29F" />
          </ProductListHeader>
          <ProductList>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {map(section_proteins, (item) => (
                <ProductItem productImg={item.img} />
              ))}
            </ScrollView>
          </ProductList>
        </ProductListContainer>

        <ProductListContainer>
          <ProductListHeader>
            <ProductListTitle>Lanches</ProductListTitle>
            <FontAwesome name="heart-o" size={24} color="#A6A29F" />
          </ProductListHeader>
          <ProductList>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {map(section_lanches, (item) => (
                <ProductItem productImg={item.img} />
              ))}
            </ScrollView>
          </ProductList>
        </ProductListContainer>
      </Container>
    </ScrollView>
  )
}