// Third party
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  padding: 5%;
`
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10%;
`
export const HeaderTitle = styled.Text`
  font-size: 18px;
  margin: 0 auto;
  display: flex;
  font-weight: 600;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`
export const Subtitle = styled.Text`
  color: #A6A29F;
`

export const RowGroup = styled.View`
  display: flex;
  flex-direction: column;
  margin: ${props => props.first ? '10%' : '4%'} 0 4%;
`

export const OrderResult = styled.View`
  border-top-width: ${props => props.showTopBorder ? '0.2px' : '0px'};
  border-top-color: #A6A29F;

  border-bottom-width: 0.2px;
  border-bottom-color: #A6A29F;

  padding: 10px;
  margin-top: ${props => props.addMargin ? '20px' : '0'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const OrderResultText = styled.Text`
  color: #A6A29F;
`

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${props => props.disabled ? '#C4C4C4' : '#EA1D2C'};
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const SubmitButtonText = styled.Text`
  color: ${props => props.disabled ? '#3F3E3E' : '#fff'};
`

export const TagContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`