// Third party
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: #fff;
  padding-top: 15%;
`

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const HeaderImage = styled.Image`
  transform: scale(1.2);
  margin: 5%;
`
export const HeaderText = styled.Text`
  width: 55%;
  margin-left: auto;
`
export const HeaderTextHighlight = styled.Text`
  color: #EF5561;
`

export const ProductListContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const ProductListHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`
export const ProductListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
export const ProductList = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-left: 10px;
`
