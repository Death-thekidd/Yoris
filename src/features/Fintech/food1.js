import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign" ;
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
    EightFoodImage,
    NinthFoodImage,
    CircleBox,
    SmallTxt,
    ChisaiTxt
} from '../../components/screenComponents/fintech8Style';
import {  
    FirstView5,
    BigText4,
    SecondView4,
    PhotoView1,
    Quantity1,
    QtyText1,
    ButtonText1
} from '../../components/screenComponents/fintech5Style';

export default function Food1({navigation}){
    return(
        <SafeAreaView style={styles.fintech8container}>
            <ScrollView>

                <FirstView5>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon size={30} color="#C3AD60" name="back"/> 
                    </TouchableOpacity>
                   <BigText4>Food</BigText4>
                   <View></View>
                </FirstView5>
                
                <FirstFoodImage source={require('../../../assets/firstFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Food2')}>
                            <CircleBox></CircleBox>
                        </TouchableOpacity>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                </FirstFoodImage>

                <View style={styles.rowView}>
                    <SecondFoodImage source={require('../../../assets/secondFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <TouchableOpacity>
                            <CircleBox></CircleBox>
                        </TouchableOpacity>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                    </SecondFoodImage>
                    <ThirdFoodImage source={require('../../../assets/thirdFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <TouchableOpacity>
                            <CircleBox></CircleBox>
                        </TouchableOpacity>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                    </ThirdFoodImage>
                </View>

                <View style={styles.rowView}>
                    <FourthFoodImage source={require('../../../assets/fourthFoodImg.png')}>
                    </FourthFoodImage>
                    <FourthFoodImage source={require('../../../assets/fifthFoodImg.png')}>
                    </FourthFoodImage>
                    <FourthFoodImage source={require('../../../assets/sixthFoodImage.png')}>
                    </FourthFoodImage>
                    <FourthFoodImage source={require('../../../assets/ninthFoodImg.png')}>
                    </FourthFoodImage>
                </View>

                <View style={styles.rowView}>
                    <EightFoodImage source={require('../../../assets/seventhFoodImg.png')}>
                    <View style={styles.smallrow}>
                        <TouchableOpacity>
                            <CircleBox></CircleBox>
                        </TouchableOpacity>
                        <View style={styles.smallcolumn}>
                        <SmallTxt>Brand Name</SmallTxt>
                        <ChisaiTxt>0.7Km away</ChisaiTxt>
                        </View>
                    </View>
                    </EightFoodImage>
                    <NinthFoodImage source={require('../../../assets/eightFoodImg.png')}>
                    </NinthFoodImage>
                </View>
            </ScrollView>
        </SafeAreaView>

)}

const styles = StyleSheet.create({
    fintech8container: {
        backgroundColor: "#000",
        paddingTop:20,
        flex: 1,
    },
   rowView: {
    flexDirection: "row",
   },
   smallrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 15,
   },
   smallcolumn: {
    marginLeft: 5, 
   }
})