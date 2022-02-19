// React
import React from 'react'
import { Text } from 'react-native'

// Third party
import { MaterialIcons } from '@expo/vector-icons'
import { RadioButton } from 'react-native-paper'

// Local
import {
  Container,
  Header,
  HeaderTitle,
  OrderResult,
  OrderResultText,
  RowGroup,
  SubmitButton,
  SubmitButtonText,
  Subtitle,
  Title
} from './styles'
import { StarRate } from '@/components/start-rate'

export  const Rating = () => {
  return (
    <Container>
      <Header>
        <MaterialIcons name="arrow-back-ios" size={24} color="#EA1D2C" />
        <HeaderTitle>Avaliação</HeaderTitle>
      </Header>

      <RowGroup first={true}>
        <Title>Avalie seu pedido</Title>
        <Subtitle>19/08/2021 Combo Açaí - Açaí magnifico</Subtitle>

        <OrderResult addMargin={true} showTopBorder={true}>
          <OrderResultText>1x Combo Açai</OrderResultText>
          <OrderResultText>R$32,90</OrderResultText>
        </OrderResult>
      </RowGroup>

      <RowGroup>
        <Title>O que você achou do pedido?</Title>
        <Subtitle>Escolha de 1 a 5 estrelas para classificar.</Subtitle>

        <StarRate />
      </RowGroup>

      <RowGroup>
        <Title>Nossa sugestão agradou você?</Title>
        <Subtitle>Escolha de 1 a 5 estrelas para classificar.</Subtitle>

        <StarRate />
      </RowGroup>

      <RowGroup>
        <Title>Você gostou da entrega?</Title>
        <Subtitle>Conte-nos se gostou ou não.</Subtitle>

        <OrderResult addMargin={true} showTopBorder={true}>
          <Text>Sim, gostei.</Text>
          <RadioButton
            value='first'
            status={'checked'}
            color='#EA1D2C' />
        </OrderResult>
        <OrderResult addMargin={false} showTopBorder={false}>
          <Text>Não, poderia melhorar.</Text>
          <RadioButton
            value='first'
            status={'unchecked'}
            color='#EA1D2C' />
        </OrderResult>
      </RowGroup>

      <SubmitButton disabled={true}>
        <SubmitButtonText disabled={true}>Avaliar</SubmitButtonText>
      </SubmitButton>
    </Container>
  )
}