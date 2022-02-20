// React
import React from "react";
import { Text, View } from "react-native";

// Third-party
import { AntDesign, Fontisto, MaterialIcons } from '@expo/vector-icons';

// Local
import { AvaliationNote, ButtonAddToCart, ButtonNavigation, ButtonQuantity, ButtonText, Container, ContainerBottom, ContainerFooter, ContainerTop, ContentCharacter, ContentDescription, ContentOrderTextAvaliation, ContentPrice, ContentRestaurantNameAndAvaliation, ContentTitle, DeliveryDetail, DeliveryHoursAndPrice, OrderRestaurant, OrderTextAvaliation, ProductDescription, RestaurantName, WriteAvaliation } from "./styles";
import { COLORS } from "@/static/css/variables";

export const ProductDetail = () => {
    return (
        <>
            <ButtonNavigation>
                <AntDesign name="left" size={24} color="red" />
            </ButtonNavigation>

            <Container>
                <ContainerTop  source={{uri: "https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg"}} />
                
                <ContainerBottom>
                    <ProductDescription>
                        <ContentTitle>Burgão com batata</ContentTitle>
                        <ContentDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</ContentDescription>
                        <ContentPrice>R$ 25,80</ContentPrice>
                    </ProductDescription>

                    <OrderRestaurant>
                        <ContentRestaurantNameAndAvaliation>
                            <RestaurantName>
                                <Fontisto name="shopping-store" size={12} color={COLORS.colorGreyDark} />
                                Hamburguer do Carlão
                            </RestaurantName>
                            <AvaliationNote>
                                <AntDesign name="star" size={12} color={COLORS.colorYellow} />
                                4,5
                            </AvaliationNote>
                        </ContentRestaurantNameAndAvaliation>
                         <DeliveryDetail>
                            <MaterialIcons name="sports-motorsports" size={24} color={COLORS.colorRed} />
                            <DeliveryHoursAndPrice>{'\u2B24'} 36-46 min {'\u2B24'} R$ 14,00</DeliveryHoursAndPrice>
                         </DeliveryDetail>
                    </OrderRestaurant>

                    <OrderTextAvaliation>
                        <ContentOrderTextAvaliation>
                            <MaterialIcons name="message" size={24} color="black" />
                            <Text>Alguma observação?</Text>
                        </ContentOrderTextAvaliation>
                        <ContentCharacter>0/140</ContentCharacter>
                    </OrderTextAvaliation>

                    <WriteAvaliation 
                        placeholder="Ex: Tirar cebola, maionese à parte, ponto da carne etc."
                    />
                </ContainerBottom>

                <ContainerFooter>
                    <ButtonQuantity>
                        <AntDesign name="minus" size={24} color={COLORS.colorGreyLight} />
                        <Text>1</Text>
                        <AntDesign name="plus" size={24} color={COLORS.colorRed} />
                    </ButtonQuantity>
                    <ButtonAddToCart>
                        <ButtonText>Adicionar</ButtonText>
                        <ButtonText>R$21,00</ButtonText>
                    </ButtonAddToCart>
                </ContainerFooter>
            </Container>
        </>
    )
}