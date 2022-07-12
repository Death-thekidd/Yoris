import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign" 
import { 
    SafeAreaView, 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Pressable, 
    Modal 
} from "react-native";
import {
    FirstFoodImage,
    SecondFoodImage,
    ThirdFoodImage,
    FourthFoodImage,
    FifthFoodImage,
    SixthFoodImage,
    SeventhFoodImage,
    EightFoodImage,
    NinthFoodImage,
    CircleBox,
    SmallTxt,
    ChisaiTxt
} from "../componenets/fintech8Style";
import {  
    FirstView5,
    BigText4,
    SecondView4,
    PhotoView1,
    Quantity1,
    QtyText1,
    ButtonText1
} from "../componenets/fintech5Style"

export default function Fintech8({navigation}){
    return(
        <SafeAreaView style={styles.fintech8container}>
            <ScrollView>
                <FirstView5>
                    <TouchableOpacity style={styles.back3} onPress={()=>navigation.goBack()}>
                   <Icon size={30} color="#C3AD60" name="back" style={styles.pad4}/> 
                    </TouchableOpacity>
                   <BigText4 style={styles.pad5}>Food</BigText4>
                </FirstView5>
                <View style={styles.space}>
                <FirstFoodImage source={require('../../../../assets/firstFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <Pressable>
                            <CircleBox></CircleBox>
                        </Pressable>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                </FirstFoodImage>
                <View style={styles.rowView}>
                    <SecondFoodImage source={require('../../../../assets/secondFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <Pressable>
                            <CircleBox></CircleBox>
                        </Pressable>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                    </SecondFoodImage>
                    <ThirdFoodImage source={require('../../../../assets/thirdFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <Pressable>
                            <CircleBox></CircleBox>
                        </Pressable>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                    </ThirdFoodImage>
                </View>
                <View style={styles.rowView1}>
                    <FourthFoodImage source={require('../../../../assets/fourthFoodImg.png')}>
                    </FourthFoodImage>
                    <FifthFoodImage source={require('../../../../assets/fifthFoodImg.png')}>
                    </FifthFoodImage>
                    <SixthFoodImage source={require('../../../../assets/sixthFoodImage.png')}>
                    </SixthFoodImage>
                    <SeventhFoodImage source={require('../../../../assets/ninthFoodImg.png')}>
                    </SeventhFoodImage>
                </View>
                <View style={styles.rowView2}>
                    <EightFoodImage source={require('../../../../assets/seventhFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <Pressable>
                            <CircleBox></CircleBox>
                        </Pressable>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                    </EightFoodImage>
                    <NinthFoodImage source={require('../../../../assets/eightFoodImg.png')}>
                    </NinthFoodImage>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>

)}

const styles = StyleSheet.create({
    fintech8container: {
        backgroundColor: "#000",
        paddingTop: 25,
        flex: 1,
    },
   pad4: {
    paddingLeft: 60,
   },
   pad5: {
    paddingLeft: 80,
   },
   rowView: {
    flexDirection: "row",
    flex: 3,
    marginBottom: 2
   },
   rowView1: {
    flexDirection: "row",
    flex: 1,
   },
   rowView2: {
    flexDirection: "row",
    flex: 2,
    marginTop: 2
   },
   smallrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 20,
   },
   smallcolumn: {
    flexDirection: "column",
    marginLeft: 10, 
   }
})