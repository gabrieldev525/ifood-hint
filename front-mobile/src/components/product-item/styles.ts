// Third party
import styled from 'styled-components/native'

export const ProductItem = styled.View`
  width: 200px;
  padding: 10px;
  background: #fff;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
`
export const ProductHeader = styled.View`
  display: flex;
  flex-direction: row;
`
export const ProductIcon = styled.Image`
  width: 20px;
  height: 20px;
`
export const ProductHeaderInfo = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`
export const ProductHeaderInfoTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`
export const ProductHeaderMiniInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ProductImage = styled.Image`
  width: 100%;
  height: 130px;
  margin: 15px 0;
  border-radius: 14px;
`
export const ProductHateText = styled.Text`
  color: #EEC424;
  font-size: 10px;
  margin-left: 5px;
`
export const ProductMiniText = styled.Text`
  color: #A6A29F;
  font-size: 10px;
  margin-left: 5px;
`