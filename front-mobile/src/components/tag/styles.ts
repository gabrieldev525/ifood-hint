// Third party
import styled from 'styled-components/native'

export const TagContainer = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 24px;
  width: auto;
  align-self: flex-start;
  background-color: ${props => props.selected ? '#EA1D2C' : '#C4C4C4'};
  margin-bottom: 10px;
  margin-right: 10px;
`
export const TagText = styled.Text`
  color: ${props => props.selected ? '#fff' : '#3F3E3E'};
`