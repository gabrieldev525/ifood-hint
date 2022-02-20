// Third party
import styled from 'styled-components/native'

// Project
import { COLORS } from '@/static/css/variables'

export const Container = styled.View`
  flex: 1;
`

export const ContainerTop = styled.Image`
  height: 400px;
  width: 100%;
`

export const ButtonNavigation = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  background: ${COLORS.colorWhite};
  border-radius: 50px;
  padding: 10px;
`

export const ContainerBottom = styled.ScrollView`
  flex: 1;
  padding: 25px 24px 0;
  background: ${COLORS.colorWhite};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -20px;
`

export const ProductDescription = styled.View`
  display: flex;
  justify-content: center;
`

export const ContentTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`

export const ContentDescription = styled.Text`
  font-size: 18px;
  color: ${COLORS.colorGreyLight};
  margin: 20px 0;
`

export const ContentPrice = styled.Text`
  font-size: 16px;
  color: ${COLORS.colorGreyLight};
`

export const OrderRestaurant = styled.View`
  display: flex;
  justify-content: center;
  border: 1px solid ${COLORS.colorGreyLight};
  border-radius: 5px;
  padding: 16px 14px;
  min-height: 80px;
  margin-top: 18px;
`

export const ContentRestaurantNameAndAvaliation = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom-color: ${COLORS.colorGreyLight};
  border-bottom-width: 1px;
`

export const RestaurantName = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.colorGreyDark};
`

export const AvaliationNote = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.colorYellow};
`

export const DeliveryDetail = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

`

export const DeliveryHoursAndPrice = styled.Text`
  color: ${COLORS.colorGreyLight};
`

export const OrderTextAvaliation = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
`

export const ContentOrderTextAvaliation = styled.View`
  display: flex;
  flex-direction: row;
`

export const ContentCharacter = styled.Text`
  color: ${COLORS.colorGreyLight};
`

export const WriteAvaliation = styled.TextInput`
  border: 1px solid ${COLORS.colorGreyLight};
  min-height: 80px;
  border-radius: 5px;
  padding: 16px 14px;
`

export const ContainerFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: ${COLORS.colorWhite};
  padding: 12px;
`

export const ButtonQuantity = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  border: 1px solid ${COLORS.colorGreyLight};
  border-radius: 5px;
  padding: 14px;
  width: 30%;
`

export const ButtonAddToCart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${COLORS.colorRed};
  width: 50%;
  padding: 14px;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  color: ${COLORS.colorWhite};
  font-size: 16px;
  font-weight: bold;
`
