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
`

export const ContainerBtnFloat = styled.TouchableOpacity`
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  background: red;
`

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

export const ContainerAddress = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

export const TextAddress = styled.Text`
  font-size: 14px;
  color: ${COLORS.colorBlack};
`

export const ContentQrCode = styled.View`
  display: flex;
`

export const ContainerListServices = styled.ScrollView`
  width: 100%;
  margin-bottom: 10px;
`

export const ContentListServices = styled.Text`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  border-bottom-color: ${COLORS.colorRed};
  border-bottom-width: 1px;
  padding-bottom: 5px;
  margin-left: 10px;
  color: ${COLORS.colorRed};
`

export const ContainerListFilters = styled.ScrollView`
  width: 100%;
  margin: 10px 0 20px;
`

export const ContainerFilters = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  height: 25px;
  margin: 3px 0;
  margin-left: 10px;
  padding: 0 10px;
  border-radius: 12px;
  border: .5px solid ${COLORS.colorGreyLight};
`

export const ContainerCategoryServices = styled.View<ICategoryServices>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 40px;
  width: 60px;
  margin: 15px 0;
  margin-left: 10px;
  border-radius: 5px;
  background: ${(props: ICategoryServices) => props.bgColor};
  border: .5px solid ${COLORS.colorGreyLight};
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
  height: 130px;
  width: 300px;
  margin: 5px 0;
  border-radius: 10px;
`

export const ContainerMainLastStores = styled.ScrollView`
  width: 100%;
`

export const ContainerLastStores = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentAvatarStores = styled.View<ICategoryServices>`
  height: 70px;
  width: 70px;
  margin: 15px 0 3px;
  margin-left: 10px;
  border-radius: 50px;
  background: ${(props: ICategoryServices) => props.bgColor};
`

export const ContentTitleStores = styled.Text`
  font-size: 15px;
  margin-left: 10px;
`