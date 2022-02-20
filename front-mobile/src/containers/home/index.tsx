// React
import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

// Third party
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5
} from '@expo/vector-icons'
import CardSilder from 'react-native-cards-slider'
import { map } from 'lodash'

// Project
import { COLORS } from '@/static/css/variables'
import { EvaluationModal } from '@/components/Modal/EvaluationModal'
import SlidePromo01 from '@/static/images/image-banner.png'
import SlidePromo02 from '@/static/images/image-banner-02.png'
import SlidePromo03 from '@/static/images/image-banner-03.png'
import Category01 from '@/static/images/section-category-1.png'
import Category02 from '@/static/images/section-category-2.png'
import Category03 from '@/static/images/section-category-3.png'
import Category04 from '@/static/images/section-category-4.png'
import Category05 from '@/static/images/section-category-5.png'
import Category06 from '@/static/images/section-category-6.png'

// Local
import {
  Container,
  ContainerAddress,
  ContainerHeader,
  ContentQrCode,
  TextAddress,
  ContainerListServices,
  ContentListServices,
  ContainerFilters,
  ContainerCategoryServices,
  ContainerSliderCarousel,
  ContentAvatarStores,
  ContentTitleStores,
  ContainerMainLastStores,
  ContainerLastStores,
  ContainerBtnFloat,
  ContainerListFilters,
  Divider,
  SectionTitle
} from './styles'

export const Home = () => {
  const categories = [
    { key: 'Restaurantes' },
    { key: 'Mercados' },
    { key: 'Bebidas' },
    { key: 'Mercados' },
    { key: 'Mercados' },
  ]
  const CategoryServices1 = [
    {
      key: 'Açai',
      img: Category01
    },
    {
      key: 'Lanches',
      img: Category02
    },
    {
      key: 'Pizza',
      img: Category03
    },
    {
      key: 'Açai',
      img: Category04
    },
    {
      key: 'Lanches',
      img: Category05
    },
    {
      key: 'Pizza',
      img: Category06
    },
  ]
  const CategoryServices = [
    {
      key: 'Loja X',
      bgColor: '#A0CA3B',
      img: SlidePromo01
    },
    {
      key: 'Loja Y',
      bgColor: '#DA5D69',
      img: SlidePromo02
    },
    {
      key: 'Loja Z',
      bgColor: '#EA1D2C',
      img: SlidePromo03
    },
  ]

  // States
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Hooks
  const navigation = useNavigation()

  const handleClickRecomendationButton = () => {
    navigation.dispatch(
      CommonActions.navigate('Buscar', { screen: 'Recomendation' })
    )
  }

  const handleClickProductDetail = () => {
    console.log('clicked')
    navigation.dispatch(
      CommonActions.navigate('product', { screen: 'ProductDetail' })
    )
  }

  return (
    <>
      {isModalOpen &&
        <EvaluationModal
          onClickClose={() => setIsModalOpen(false)} />
      }
      <ContainerBtnFloat
        onPress={handleClickRecomendationButton}
        activeOpacity={.8}>
        <MaterialCommunityIcons name='silverware-fork-knife' size={25} color={COLORS.colorWhite} />
      </ContainerBtnFloat>
      <Container>
        <ContainerHeader>
          <ContainerAddress>
            <TextAddress>ILabs</TextAddress>
            <Entypo
              name='chevron-down'
              size={18} color={COLORS.colorRed} />
          </ContainerAddress>
          <ContentQrCode>
            <MaterialIcons name='qr-code-scanner' size={24} color={COLORS.colorRed} />
          </ContentQrCode>
        </ContainerHeader>

        <ContainerListServices
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {map(categories, (item, index) => (
            <ContentListServices key={index} highlight={index == 0}>{item.key}</ContentListServices>
          ))}
        </ContainerListServices>

        <ContainerListFilters
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ContainerFilters>
            <Text>Ordenar</Text>
            <Entypo
              name='chevron-down'
              size={14} color={COLORS.colorBlack} />
          </ContainerFilters>

          <ContainerFilters>
            <FontAwesome5
              name='walking'
              size={14} color={COLORS.colorBlack} />
            <Text style={{ marginLeft: 5 }}>Pra retirar</Text>
          </ContainerFilters>

          <ContainerFilters>
            <Text>Entrega grátis</Text>
          </ContainerFilters>

          <ContainerFilters>
            <Text>Vale-refeição</Text>
            <Entypo
              name='chevron-down'
              size={14} color={COLORS.colorBlack} />
          </ContainerFilters>

          <ContainerFilters>
            <Text>Distância</Text>
            <Divider />
            <Entypo
              name='chevron-down'
              size={14} color={COLORS.colorBlack} />
          </ContainerFilters>
        </ContainerListFilters>

        <ContainerListServices
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {map(CategoryServices1, (item, index) => (
            <ContainerCategoryServices key={index} source={item.img} />
          ))}
        </ContainerListServices>

        <CardSilder>
          {map(CategoryServices, (item, index) => (
            <TouchableOpacity activeOpacity={0.8} onPress={handleClickProductDetail}>
              <ContainerSliderCarousel key={index}
                source={item.img} />
            </TouchableOpacity>
          ))}
        </CardSilder>

        <SectionTitle>Últimas Lojas</SectionTitle>
        <ContainerMainLastStores
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {map(CategoryServices, (item, index) => (
            <ContainerLastStores key={index} onPress={() => setIsModalOpen(true)}>
              <ContentAvatarStores bgColor={item.bgColor} />
              <ContentTitleStores>{item.key}</ContentTitleStores>
            </ContainerLastStores>
          ))}
        </ContainerMainLastStores>
      </Container>
    </>
  )
}