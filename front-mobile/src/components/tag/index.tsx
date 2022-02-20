// React
import React from 'react'

// Local
import { TagContainer, TagText } from './styles'
import { ITag } from './types'


export const Tag = ({ text, isSelected, id, onClick }: ITag) => {

  const handleClick = (event) => {
    onClick?.(event, id || null)
  }

  return (
    <TagContainer selected={isSelected} onPress={handleClick} activeOpacity={1}>
      <TagText selected={isSelected}>{text}</TagText>
    </TagContainer>
  )
}