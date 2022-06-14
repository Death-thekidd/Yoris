
import React from 'react'
import {
    LogicticsBacground,
    DeliveryImage,
    ContinueButton,
    ContinueView,
    LogisticBtn,
    LogisticBtnCont,
    LogisticBtnView,
    CategoryView,
    SViews
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

                    <LogisticBtn>lOCAL</LogisticBtn>
                    <LogisticBtn>INTERNATIONAL</LogisticBtn>

                </LogisticBtnCont>


                <Spacer size="xl">

                    <LogisticBtnCont>
                        <LogisticBtn> REGULAR</LogisticBtn>
                        <LogisticBtn>EXPRESS</LogisticBtn>
                    </LogisticBtnCont>

                </Spacer>

            </LogisticBtnView>

            <Spacer size="xxl">

                <ContinueView>
                    <ContinueButton onPress={() => { navigation.navigate("logisticBooking") }} >continue</ContinueButton>
                </ContinueView>
            </Spacer>

        </LogicticsBacground>

    )
}