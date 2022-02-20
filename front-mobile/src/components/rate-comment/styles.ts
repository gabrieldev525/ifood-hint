// Third party
import styled from 'styled-components/native'


export const Container = styled.View`
  display: flex;
  flex-direction: column;
`
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HeaderTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HeaderTitle = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`
export const CharacterCountText = styled.Text`
  color: #A6A29F;
`
export const CommentInput = styled.TextInput`
  color: #000;
  border-radius: 14px;
  border-color: #A6A29F;
  border-width: 1px;
  margin-top: 10px;
  padding: 10px;
`