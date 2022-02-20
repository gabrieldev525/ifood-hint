// React
import React from 'react'

// Third party
import { FontAwesome } from '@expo/vector-icons'

// Local
import {
  RateStarContainer
} from './styles'
import { IStarRate } from './types'

export const StarRate = ({ rate, onClick }: IStarRate) => {

  const renderStars = () => {
    const elements: React.ReactNode[] = []

    for(let i = 1; i <= 5; i++) {
      let color = '#A6A29F'
      if(rate != null && i <= rate)
        color = '#FFAC33'

      elements.push(
        <FontAwesome
          key={i}
          name='star'
          size={36}
          color={color}
          onPress={event => onClick?.(event, i)} />
      )
    }

    return elements
  }

  return (
    <RateStarContainer>
      {renderStars()}
    </RateStarContainer>
  )
}