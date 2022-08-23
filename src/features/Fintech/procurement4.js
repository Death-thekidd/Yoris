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



export default function Procurement4({navigation}){
    return(
        <SafeAreaView style={styles.fintech4container}>
            <ScrollView>
                <FirstView3>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                   <Icon size={30} color="#C3AD60" name="back"/> 
                    </TouchableOpacity>
                   <BigText3>Procurement</BigText3>
                   <View style={styles.icons}>
                       <TouchableOpacity onPress={()=>navigation.navigate("Procurement9")}>
                            <Icon size={20} color= "#C3AD60" name='bells'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Procurement6")}>
                            <Icon1 size={20} color="#C3AD60" name="clipboard"/>
                        </TouchableOpacity>
                    </View>
                </FirstView3>
               
                <SecondView3>
                <Image source={require('../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <SecondView3>
                <Image source={require('../../../assets/pro.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <SecondView3>
                <Image source={require('../../../assets/soap.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <SecondView3>
                <Image source={require('../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                 <SecondView3>
                <Image source={require('../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                 <SecondView3>
                <Image source={require('../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><CaretWhitespace><Icon name="caretdown" size={12} color="#fff"/></CaretWhitespace></Quantity>
                
                </SecondView3>
                <View style={{padding:50}}></View>
            </ScrollView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn6} onPress={()=>navigation.navigate("Procurement6")}>
                    <ButtonTextt>Add Item</ButtonTextt>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn5} onPress={()=>navigation.navigate("Procurement8")}>
                    <ButtonText>Submit</ButtonText>
                </TouchableOpacity>
           </View>     
        </SafeAreaView>


)}

const styles = StyleSheet.create({
    fintech4container: {
        backgroundColor: "#000",
        flex: 1,
        paddingTop:20,
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
        margin:10,
        backgroundColor: "#C3AD60",
        alignItems: "center",
        justifyContent: "center",
    },
    btn6: {
        height: 48,
        width: 283,
        borderRadius: 100,
        margin:10,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#C3AD60"
    },
    image: {
        width: 340,
        height: 156,
        borderRadius: 15
    },
     icons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'20%'
     },
     buttons:{
        justifyContent:'flex-end',
        alignItems:'center',
        position: "absolute",
        width:'100%',
        height:'100%'

     }
});
