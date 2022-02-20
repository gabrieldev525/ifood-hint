// React
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

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
  TagContainer,
  Title
} from './styles'
import { StarRate } from '@/components/star-rate'
import { Tag } from '@/components/tag'

export const Rating = () => {
  // state
  const [likedDelivery, setLikedDelivery] = useState<boolean | null>(null)
  const [deliveryFeedbackOptions, setDeliveryFeedbackOptions] = useState<string[]>([])

  const handleClickDeliveryFeedbackOption = (event, id) => {
    const temp = [...deliveryFeedbackOptions]
    const idx = temp.indexOf(id)
    if(idx != -1) {
      temp.splice(idx, 1)
    } else
      temp.push(id)

    setDeliveryFeedbackOptions(temp)
  }

  return (
    <ScrollView>
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
              status={likedDelivery ? 'checked' : 'unchecked'}
              color='#EA1D2C'
              onPress={() => setLikedDelivery(true)} />
          </OrderResult>
          <OrderResult addMargin={false} showTopBorder={false}>
            <Text>Não, poderia melhorar.</Text>
            <RadioButton
              value='first'
              status={likedDelivery == false ? 'checked' : 'unchecked'}
              color='#EA1D2C'
              onPress={() => setLikedDelivery(false)} />
          </OrderResult>

          {
            likedDelivery ? (
              <RowGroup>
                <Subtitle>Do que você mais gostou?</Subtitle>

                <TagContainer>
                  <Tag
                    text='Educação'
                    id='education'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('education') != -1} />
                  <Tag
                    text='Paciência'
                    id='patience'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('patience') != -1} />
                  <Tag
                    text='Dentro do prazo'
                    id='in_deadline'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('in_deadline') != -1} />
                  <Tag
                    text='Cuidado com o pedido'
                    id='order_caution'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('order_caution') != -1} />
                </TagContainer>
              </RowGroup>
            ) : likedDelivery == false && (
              <RowGroup>
                <Subtitle>Quais pontos poderiam melhorar?</Subtitle>

                <TagContainer>
                  <Tag
                    text='Atraso'
                    id='delay'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('delay') != -1} />
                  <Tag
                    text='Impaciência'
                    id='impatience'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('impatience') != -1} />
                  <Tag
                    text='Falta de Educação'
                    id='lack_of_education'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('lack_of_education') != -1} />
                  <Tag
                    text='Descuido com o pedido'
                    id='order_carelessness'
                    onClick={handleClickDeliveryFeedbackOption}
                    isSelected={deliveryFeedbackOptions.indexOf('order_carelessness') != -1} />
                </TagContainer>
              </RowGroup>
            )
          }
        </RowGroup>

        <SubmitButton disabled={true}>
          <SubmitButtonText disabled={true}>Avaliar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </ScrollView>
  )
}