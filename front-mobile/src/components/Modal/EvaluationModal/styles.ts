// Thrid party
import styled from 'styled-components/native'

// Project
import { COLORS } from '@/static/css/variables'


export interface IButtonProps {
  bColor: string
  leftSpace?: number
}

export const ContainerOverlay = styled.View`
  z-index: 9999;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.View`
  display: flex;
  height: 60%;
  width: 90%;
  elevation: 4;
  background: ${COLORS.colorWhite};
`

export const ContentCloseModal = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`

export const ContainerInformationModal = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const ContentImage = styled.Image`
  height: 45%;
  width: 62%;
`

export const ContainerTextModal = styled.View`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const ContentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.colorBlack};
`

export const ContentSubTitle = styled.Text`
  font-size: 17px;
  color: ${COLORS.colorGreyDark};
`

export const ContainerLikeAndDislike = styled.View`
  display: flex;
  flex-direction: row;
`

export const ContainerButton = styled.TouchableOpacity<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 50px;
  border: 1px solid ${(props: IButtonProps) => props.bColor};
  margin-left: ${(props: IButtonProps) => props.leftSpace || 0}px;
`