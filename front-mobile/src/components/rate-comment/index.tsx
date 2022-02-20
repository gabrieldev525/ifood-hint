// React
import React from 'react'

// Third party
import { MaterialIcons } from '@expo/vector-icons'

// Local
import {
  CharacterCountText,
  CommentInput,
  Container,
  Header,
  HeaderTitle,
  HeaderTitleContainer
} from './styles'

export const RateComment = ({ value='', onChange }) => {
  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <MaterialIcons name='message' size={24} color="#3F3E3E" />
          <HeaderTitle>Deixar comentário</HeaderTitle>
        </HeaderTitleContainer>

        <CharacterCountText>{value.length}/300</CharacterCountText>
      </Header>

      <CommentInput
        value={value}
        onChangeText={onChange}
        placeholder='Conte-nos o que aconteceu' />
    </Container>
  )
}