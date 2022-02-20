// Third party
import styled from 'styled-components/native'

// Project
import { COLORS } from '@/static/css/variables'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  flex: 1;
  background: #fff;
`

export const DevelopmentImage = styled.Image`
  width: 90%;
  margin: 5% auto;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-top: 5%;
`
export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${COLORS.colorGreyLight};
  margin-top: 20px;
`