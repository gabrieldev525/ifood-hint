// React
import React from 'react'

// Project
import image from '@/static/images/development.png'

// Local
import {
  Container,
  DevelopmentImage,
  SubTitle,
  Title
} from './styles'

export const NotImplemented = () => {
  return (
    <Container>
      <DevelopmentImage source={image} />

      <Title>Essa funcionalidade será lançada em breve ...</Title>
      <SubTitle>Estamos trabalhando para entregar a você a melhor experiência dentro do nosso App. Fique atento para acompanhar as novidades que estão por vir!</SubTitle>
    </Container>
  )
}