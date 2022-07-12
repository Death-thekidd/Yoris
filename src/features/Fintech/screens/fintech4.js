import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign" 
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView, Image, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {  
    FirstView3,
    BigText3,
    SecondView3,
    PhotoView,
    Quantity,
    QtyText,
    ButtonText,
    ButtonTextt,
    CaretWhitespace
} from "../componenets/fintech4Style"



export default function Fintech4({navigation}){
    return(
        <SafeAreaView style={styles.fintech4container}>
            <ScrollView>
                <FirstView3>
                <TouchableOpacity style={styles.back2} onPress={()=>navigation.goBack()}>
                   <Icon size={30} color="#C3AD60" name="back" style={styles.pad3}/> 
                    </TouchableOpacity>
                   <BigText3 style={styles.pad}>Procurement</BigText3>
                   <TouchableOpacity onPress={()=>navigation.navigate("Fintech10")}>
                        <Icon size={20} color= "#C3AD60" name='bells' style={styles.padddd}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Fintech6")}>
                        <Icon1 size={20} color="#C3AD60" name="clipboard" style={styles.paddd}/>
                    </TouchableOpacity>
                </FirstView3>
                <SecondView3>
                <Image source={require('../../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <SecondView3>
                <Image source={require('../../../../assets/pro.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <SecondView3>
                <Image source={require('../../../../assets/soap.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <SecondView3>
                <Image source={require('../../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
            </ScrollView>
                <TouchableOpacity style={styles.btn6} onPress={()=>navigation.navigate("Fintech6")}>
                    <ButtonTextt>Add Item</ButtonTextt>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn5} onPress={()=>navigation.navigate("Fintech9")}>
                    <ButtonText>Submit</ButtonText>
                </TouchableOpacity>
        </SafeAreaView>


)}

const styles = StyleSheet.create({
    fintech4container: {
        backgroundColor: "#000",
        paddingTop: 25,
        flex: 1,
        position: "relative",
    },
    back2: {
        
    },
    pad3: {
        paddingLeft: 40,
    },
    pad: {
        paddingLeft: 55,
        paddingRight: 28,
    },
    paddd: {
        
    },
    padddd: {
        paddingRight: 28,
    },
    btn5: {
        height: 48,
        width: 283,
        borderRadius: 100,
        backgroundColor: "#C3AD60",
        marginTop: 270,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 315,
        left: 47,
    },
    btn6: {
        height: 48,
        width: 283,
        borderRadius: 100,
        backgroundColor: "#000",
        marginTop: 270,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 243,
        left: 47,
        borderWidth: 1,
        borderColor: "#C3AD60"
    },
    image: {
        width: 340,
        height: 156,
        borderRadius: 15
    }
});
