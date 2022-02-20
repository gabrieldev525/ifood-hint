// React
import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Third party
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons
} from '@expo/vector-icons'
import CardSilder from 'react-native-cards-slider'
import { map } from 'lodash'

// Project
import { COLORS } from '@/static/css/variables'

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
  ContainerCategoryServicesImg
} from './styles'
import { RecomendationProductList } from '../recomendation/product-list'
import { CommonActions, useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export const Home = () => {
  const test = [
    { key: 'Restaurantes' },
    { key: 'Mercados' },
    { key: 'Bebidas' },
    { key: 'Mercados' },
    { key: 'Mercados' },
  ]

  const navigation = useNavigation()

  const CategoryServices1 = [
    {
      key: 'Açai',
      bgColor: '#A0CA3B',
      img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWNhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      key: 'Lanches',
      bgColor: '#DA5D69',
      img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWNhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      key: 'Pizza',
      bgColor: '#EA1D2C',
      img: 'https://www.imagensempng.com.br/wp-content/uploads/2021/06/Acai-no-pote-Png-1024x1024.png'
    },
  ]
  const CategoryServices = [
    {
      key: 'Mercado',
      bgColor: '#A0CA3B',
      img: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      key: 'Lanches',
      bgColor: '#DA5D69',
      img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      key: 'Pizza',
      bgColor: '#EA1D2C',
      img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
  ]

  const testandoBoy = () => {
    navigation.dispatch(
      CommonActions.navigate('Recomendation', { screen: 'Recomendation' })
    )
  }

  return (
    <>
      <ContainerBtnFloat onPress={testandoBoy}>
        <MaterialCommunityIcons name='silverware-fork-knife' size={25} color={COLORS.colorWhite} />
      </ContainerBtnFloat>
      <Container>
        <ContainerHeader>
          <ContainerAddress>
            <TextAddress>ILabs</TextAddress>
            <Entypo
              name='chevron-down'
              size={14} color={COLORS.colorRed} />
          </ContainerAddress>
          <ContentQrCode>
            <MaterialIcons name='qr-code-scanner' size={24} color={COLORS.colorRed} />
          </ContentQrCode>
        </ContainerHeader>

        <ContainerListServices horizontal>
          {map(test, (item, index) => (
            <ContentListServices key={index}>{item.key}</ContentListServices>
          ))}
        </ContainerListServices>

        <ContainerListFilters horizontal>
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
            <Text>Pra retirar</Text>
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

        <ContainerListServices horizontal>
          {map(CategoryServices1, (item, index) => (
            <ContainerCategoryServices bgColor={item.bgColor} />
            //   <ContainerCategoryServicesImg key={index}
            //     source={{ uri: item.img }} />
            // </ContainerCategoryServices>
          ))}
        </ContainerListServices>

        <CardSilder>
          {map(CategoryServices, (item, index) => (
            <ContainerSliderCarousel key={index}
              source={{ uri: item.img }} />
          ))}
        </CardSilder>

        <ContainerMainLastStores horizontal>
          {map(CategoryServices, (item, index) => (
            <ContainerLastStores key={index}>
              <ContentAvatarStores bgColor={item.bgColor} />
              <ContentTitleStores>{item.key}</ContentTitleStores>
            </ContainerLastStores>
          ))}
        </ContainerMainLastStores>
      </Container>
    </>
  )
}