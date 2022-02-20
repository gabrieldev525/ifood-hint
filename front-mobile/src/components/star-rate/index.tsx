// React
import React from 'react'

// Third party
import { FontAwesome } from '@expo/vector-icons'

// Local
import {
  RateStarContainer
} from './styles'

export const StarRate = () => {
  return (
    <RateStarContainer>
      <FontAwesome name="star" size={30} color="#FFAC33" />
      <FontAwesome name="star" size={30} color="#FFAC33" />
      <FontAwesome name="star" size={30} color="#FFAC33" />
      <FontAwesome name="star" size={30} color="#A6A29F" />
      <FontAwesome name="star" size={30} color="#A6A29F" />
    </RateStarContainer>
  )
}