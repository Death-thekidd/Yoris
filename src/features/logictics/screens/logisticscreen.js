
import React from 'react'
import { Text } from "react-native";
import {
    LogicticsBacground,
    DeliveryImage,
    ContinueButton,
    ContinueView,
    LogisticBtn,
    LogisticBtnCont,
    LogisticBtnView,
    CategoryView,
    SViews,
} from '../components/logictics.styles';
import { Spacer } from '../../../components/spacer/spacer.component'







export default function Logisticscreen({ navigation }) {

    const Button = ({ type, text }) => {
        const backgroundColor = type === "primary" ? "#9A8340" : "#A7A5A6"
        const color = "type" === "primary" ? "#FFFFFF" : "#000000"
    }
    return (
        <LogicticsBacground>

            {/* <LogicticCategories /> */}


            <DeliveryImage source={require("../../../../assets/delivery.png")} />

            <LogisticBtnView>
                <LogisticBtnCont>

                    <LogisticBtn><Text>lOCAL</Text></LogisticBtn>
                    <LogisticBtn><Text>INTERNATIONAL</Text></LogisticBtn>

                </LogisticBtnCont>


                <Spacer size="xl">

                    <LogisticBtnCont>
                        <LogisticBtn><Text>REGULAR</Text></LogisticBtn>
                        <LogisticBtn><Text>EXPRESS</Text></LogisticBtn>
                    </LogisticBtnCont>

                </Spacer>

            </LogisticBtnView>

            <Spacer size="xxl">

                <ContinueView>
                    <ContinueButton onPress={() => { navigation.navigate("Booking") }} ><Text>continue</Text></ContinueButton>
                </ContinueView>
            </Spacer>

        </LogicticsBacground>

    )
}