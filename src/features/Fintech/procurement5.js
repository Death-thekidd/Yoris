import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign" 
import Icon1 from "react-native-vector-icons/Feather";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import {  
    FirstView5,
    BigText4,
    SecondView4,
    PhotoView1,
    Quantity1,
    QtyText1,
    ButtonText1
} from "../componenets/fintech5Style"
import { PhotoView, Quantity, QtyText, CaretWhitespace, ButtonTextt } from "../componenets/fintech4Style";


export default function Fintech5({navigation, route}){
    const [routee, setRoute]= useState(route.params.paramKey);
    return(
        <SafeAreaView style={styles.fintech5container}>
            <ScrollView>
                <FirstView5>
                <TouchableOpacity style={styles.back3} onPress={()=>navigation.goBack()}>
                   <Icon size={30} color="#C3AD60" name="back"/> 
                    </TouchableOpacity>
                   <BigText4>Procurement</BigText4>
                   <View style={styles.icons}>
                       <TouchableOpacity onPress={()=>navigation.navigate("Procurement9")}>
                            <Icon size={20} color= "#C3AD60" name='bells' style={styles.padddd}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Procurement6")}>
                            <Icon1 size={20} color="#C3AD60" name="clipboard" style={styles.paddd}/>
                        </TouchableOpacity>
                    </View>
                </FirstView5>
                <SecondView4>
                <Image style={styles.image} source={require('../../../assets/pro.png')}/>
                <Quantity>
                        <QtyText>Qty: 1</QtyText>
                        <CaretWhitespace>
                            <Icon name="caretdown" size={12} color="#fff"/>
                        </CaretWhitespace>
                    </Quantity>
                    <View style={styles.linkView}>
                    <Text 
                    style={styles.link}
                    >
                        {routee}
                    </Text>
                    </View>
                </SecondView4>
            </ScrollView>
            <View style={styles.dwn}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Procurement6")}>
                        <ButtonTextt>Add Item</ButtonTextt>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.btn6} onPress={()=>navigation.navigate("Procurement8", {paramKey: route.params.paramKey})}>
                        <ButtonText1>Submit</ButtonText1>
                    </TouchableOpacity>
            </View>    
        </SafeAreaView>


)}

const styles = StyleSheet.create({
    fintech5container: {
        backgroundColor: "#000",
        paddingTop:20,
        flex: 1,
    },
    back3: {
        
    },
    pad4: {
        paddingLeft: 40,
    },
    pad: {
        paddingLeft: 55,
        paddingRight: 28,
    },
    padddd: {
        paddingRight: 28,
    },
    btn: {
        height: 48,
        width: 283,
        borderRadius: 100,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#C3AD60",
        margin:20
    },
    btn6: {
        height: 48,
        width: 283,
        borderRadius: 100,
        backgroundColor: "#C3AD60",
        alignItems: "center",
        justifyContent: "center",
        margin:20
    },
    linkView: {
        height: 54,
        width: 340,
        backgroundColor: "#4E4E4E",
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        paddingLeft: 25,
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 25,
        position: "absolute",
        top: 104,
     },
     link: {
        color: "#fff"
     },
     image: {
        width: 340,
        height: 156,
        borderRadius: 15,
     },
     icons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
     },
     dwn:{
        justifyContent:'flex-end',
        position: "absolute",
        width:'100%',
        height:'100%',
        alignItems:'center',


     }
});
