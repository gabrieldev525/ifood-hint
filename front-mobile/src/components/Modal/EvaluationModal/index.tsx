// React
import React from 'react'

// Third party
import { EvilIcons, AntDesign } from '@expo/vector-icons'

// Project
import { COLORS } from '@/static/css/variables'
import EvaluationImg from '@/static/images/evaluation.png'

// Local
import {
  ContainerOverlay,
  ContainerModal,
  ContentCloseModal,
  ContentImage,
  ContainerInformationModal,
  ContainerTextModal,
  ContentTitle,
  ContentSubTitle,
  ContainerLikeAndDislike,
  ContainerButton,
} from './styles'
import { IEvaluationModalProps } from './types'

export const EvaluationModal = ({ onClickClose }: IEvaluationModalProps) => {
  return (
    <ContainerOverlay>
      <ContainerModal>
        <ContentCloseModal>
          <EvilIcons
            onPress={() => onClickClose()}
            name='close'
            size={30}
            color={COLORS.colorRed} />
        </ContentCloseModal>

        <ContainerInformationModal>
          <ContentImage source={EvaluationImg} />

          <ContainerTextModal>
            <ContentTitle>Avalie sua experiência</ContentTitle>
            <ContentSubTitle>Está gostando das nossas sugesões</ContentSubTitle>
          </ContainerTextModal>

          <ContainerLikeAndDislike>
            <ContainerButton activeOpacity={.5} bColor={COLORS.colorRedDark}>
              <AntDesign name='dislike2' size={24} color={COLORS.colorRedDark} />
            </ContainerButton>

            <ContainerButton activeOpacity={.5} bColor={COLORS.colorGreen} leftSpace={20}>
              <AntDesign name='like2' size={24} color={COLORS.colorGreen} />
            </ContainerButton>
          </ContainerLikeAndDislike>
        </ContainerInformationModal>
      </ContainerModal>
    </ContainerOverlay>
  )
}