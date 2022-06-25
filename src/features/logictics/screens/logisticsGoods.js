import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from 'react-native-paper';
import {
  GoodsContainer,
  GoodsWrapper,
  GoodsRow,
  ImageBackground,
  GoodsPrimary,
  ImageCancel,
  GoodsInput,
  GoodsLabel,
  ImageGoods,
  GoodsText,
  Input,
} from "../components/goods.styles";
import { LocationBtn } from "../components/location.styles";

export default function LogisticsGoods({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <GoodsContainer>
          <GoodsWrapper>
            <GoodsRow>
              <Button onPress={() => navigation.navigate("logisticBooking")}>
              <ImageBackground
                source={require("../../../../assets/backIcon.png")}
              />
              </Button>
            </GoodsRow>
            <GoodsRow>
              <GoodsPrimary>Type of Goods</GoodsPrimary>
            </GoodsRow>
            <GoodsRow>
              <ImageCancel source={require("../../../../assets/cancel.png")} />
            </GoodsRow>
          </GoodsWrapper>
          <GoodsWrapper>
            <GoodsRow>
              <GoodsInput type="checkbox" id="navi-toggle">
                <GoodsLabel>
                  <ImageGoods
                    source={require("../../../../assets/group5.png")}
                  />
                </GoodsLabel>
                <GoodsText>Food</GoodsText>
              </GoodsInput>
            </GoodsRow>
            <GoodsRow>
              <GoodsInput type="checkbox" id="navi-toggle">
                <GoodsLabel>
                  <ImageGoods
                    source={require("../../../../assets/group1.png")}
                  />
                </GoodsLabel>
                <GoodsText>Gadgets</GoodsText>
              </GoodsInput>
            </GoodsRow>
            <GoodsRow>
              <GoodsInput type="checkbox" id="navi-toggle">
                <GoodsLabel>
                  <ImageGoods
                    source={require("../../../../assets/group.png")}
                  />
                </GoodsLabel>
                <GoodsText>Clothes</GoodsText>
              </GoodsInput>
            </GoodsRow>
          </GoodsWrapper>
          <GoodsWrapper>
            <GoodsRow>
              <GoodsInput type="checkbox" id="navi-toggle">
                <GoodsLabel>
                  <ImageGoods
                    source={require("../../../../assets/group2.png")}
                  />
                </GoodsLabel>
                <GoodsText>Furniture</GoodsText>
              </GoodsInput>
            </GoodsRow>
            <GoodsRow>
              <GoodsInput type="checkbox" id="navi-toggle">
                <GoodsLabel>
                  <ImageGoods
                    source={require("../../../../assets/group3.png")}
                  />
                </GoodsLabel>
                <GoodsText>Electronics</GoodsText>
              </GoodsInput>
            </GoodsRow>
            <GoodsRow>
              <GoodsInput type="checkbox" id="navi-toggle">
                <GoodsLabel>
                  <ImageGoods
                    source={require("../../../../assets/group4.png")}
                  />
                </GoodsLabel>
                <GoodsText>See all</GoodsText>
              </GoodsInput>
            </GoodsRow>
          </GoodsWrapper>
          <Input
            type="text"
            placeholder={"Others (Specify);"}
            placeholderTextColor={"#fff"}
          />
          <LocationBtn onPress={()=>navigation.navigate('shipping')}>continue</LocationBtn>
        </GoodsContainer>
      </ScrollView>
    </SafeAreaView>
  );
}
