// Third party
import styled from 'styled-components/native'

// Project
import { COLORS } from '@/static/css/variables'


export interface ICategoryServices {
  bgColor: string
}

export interface IContainerFilters {
  leftThickening?: number
  rightThickening?: number
}

export const Container = styled.ScrollView`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: #fff;
`

export const ContainerBtnFloat = styled.TouchableOpacity`
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  bottom: 20px;
  right: 10px;
  border-radius: 50px;
  background: #EA1D2C;
  elevation: 3;
`

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px 0;
`

export const ContainerAddress = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

export const TextAddress = styled.Text`
  font-size: 16px;
  color: ${COLORS.colorBlack};
  margin-right: 5px;
`

export const ContentQrCode = styled.View`
  display: flex;
`

export const ContainerListServices = styled.ScrollView`
  width: 100%;
  padding: 0px 20px 10px;
`

export const ContentListServices = styled.Text`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  border-bottom-color: ${props => props.highlight ? COLORS.colorRed : COLORS.colorGreyLight};
  border-bottom-width: ${props => props.highlight ? '1px' : '0px'};
  padding-bottom: 5px;
  margin-right: 10px;
  color: ${props => props.highlight ? COLORS.colorRed : COLORS.colorGreyLight};
`

export const ContainerListFilters = styled.ScrollView`
  width: 100%;
  padding: 10px 20px;
`

export const ContainerFilters = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin-right: 10px;
  border-radius: 24px;
  padding: 5px 10px;
  border: .5px solid ${COLORS.colorGreyLight};
`

export const ContainerCategoryServices = styled.Image`
  height: 70px;
  width: 80px;
  margin: 15px 0;
  margin-right: 10px;
  border-radius: 5px;
`

export const ContainerCategoryServicesImg = styled.Image`
  display: flex;
  height: 30px;
  width: 40px;
`

export const Divider = styled.View`
  width: 1px;
  height: 10px;
  margin: 0 3px;
  background: ${COLORS.colorGreyDark};
`

export const ContainerSliderCarousel = styled.Image`
  display: flex;
  flex-direction: row;
  height: 150px;
  width: 95%;
  border-radius: 10px;
`

export const ContainerMainLastStores = styled.ScrollView`
  width: 100%;
  margin-top: 5%;
  padding: 0 20px;
`

export const ContainerLastStores = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const SectionTitle = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
`

export const ContentAvatarStores = styled.View<ICategoryServices>`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  background: ${(props: ICategoryServices) => props.bgColor};
`

export const ContentTitleStores = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: #A6A29F;
`