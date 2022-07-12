import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialIcons"; 
import Icon3 from "react-native-vector-icons/FontAwesome";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Pressable, Image } from "react-native";
import {  
   LastView,
   PriceColumn,
   Total,
   Pricing,
   Paytxt,
   Second,
   SelectTxt,
   Radiobtn,
   Quantity1,
   Third,
   Bold,
   Radiobtn2
} from "../componenets/fintech10Style"
import { BigText5, FirstView6, Smalltxt } from "../componenets/fintech6Style";
import { PhotoView, Quantity, QtyText } from "../componenets/fintech4Style";

import {PhotoView1, QtyText1, } from "../componenets/fintech5Style"


export default function Notifications({navigation, route}){
    const [routee, setRoute]= useState(route.params.paramKey);
    const [all, setAll] = useState(false);
    const [select, setSelect] = useState(false);
    const [select2, setSelect2] = useState(false)
    return(
        <SafeAreaView style={styles.notificationsContainer}>
            <ScrollView>
            <FirstView6>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon size={30} color="#C3AD60" name="back" style={styles.pad}/>
            </TouchableOpacity>
            <BigText5 style={styles.padd}>Notifications</BigText5>
            <TouchableOpacity onPress={()=>navigation.navigate("Fintech11")}>
                <Icon2 size={20} color="#C3AD60" name='history'/>
            </TouchableOpacity>
            </FirstView6>
            <Second>
                <SelectTxt>Select All</SelectTxt>
                { all?
                    <TouchableOpacity onPress={()=>setAll(!all)}>
                        <Radiobtn></Radiobtn>
                    </TouchableOpacity>:
                    <TouchableOpacity onPress={()=>setAll(!all)}>
                        <Radiobtn2></Radiobtn2>
                    </TouchableOpacity>
                }
            </Second>
            <Third>
            <View style={styles.photoview}>
                <Image style={styles.image} source={require('../../../../assets/pro.png')} />
                    <View style={styles.position}>
                    <Quantity1>
                        <QtyText1>Qty: 1</QtyText1>
                        <Icon name="caretdown" size={6} color="#fff"/>
                    </Quantity1>
                    </View>
                    <View style={styles.roundView}>
                        <Icon3 name="trash-o" size={20} color="#fff"/>
                    </View>
                    
                    <View style={styles.linkView}>
                    <Text 
                    style={styles.link}
                    >
                        {routee}
                    </Text>
                    { select || all ?
                        <TouchableOpacity onPress={()=>setSelect(!select)}>
                            <Radiobtn></Radiobtn>
                        </TouchableOpacity>:
                        <TouchableOpacity onPress={()=>setSelect(!select)}>
                            <Radiobtn2></Radiobtn2>
                        </TouchableOpacity>
                    }
                    </View>
            </View>       
                <View style={styles.white2}>
                    <Smalltxt>Procurement Fee: <Bold>10%</Bold></Smalltxt>
                    <Smalltxt>Product Price: <Bold>N0.00</Bold></Smalltxt>
                    <Smalltxt>Shipping Fee/Kg: <Bold>N0.00</Bold></Smalltxt>
                    <Smalltxt>Import Duty/Kg: <Bold>N0.00</Bold></Smalltxt>
                    <Smalltxt>VAT: <Bold>7.5%</Bold></Smalltxt>
                </View>
            
                <View style={styles.photoview}>
                <Image style={styles.image} source={require('../../../../assets/soap.png')}/>
                    <View style={styles.position}>
                    <Quantity1>
                        <QtyText>Qty: 1</QtyText>
                        <Icon name="caretdown" size={6} color="#fff"/>
                    </Quantity1>
                    </View>
                    <View style={styles.roundView}>
                        <Icon3 name="trash-o" size={20} color="#fff"/>
                    </View>
                    <View style={styles.php}>
                    { select2 || all ?
                        <TouchableOpacity onPress={()=>setSelect2(!select2)}>
                            <Radiobtn></Radiobtn>
                        </TouchableOpacity>:
                        <TouchableOpacity onPress={()=>setSelect2(!select2)}>
                            <Radiobtn2></Radiobtn2>
                        </TouchableOpacity>
                    }
                    </View>
                    </View>
                <View style={styles.white2}>
                    <Smalltxt>Procurement Fee: <Bold>10%</Bold></Smalltxt>
                    <Smalltxt>Product Price: <Bold>N0.00</Bold></Smalltxt>
                    <Smalltxt>Shipping Fee/Kg: <Bold>N0.00</Bold></Smalltxt>
                    <Smalltxt>Import Duty/Kg: <Bold>N0.00</Bold></Smalltxt>
                    <Smalltxt>VAT: <Bold>7.5%</Bold></Smalltxt>
                </View>
            </Third>
            <View style={styles.whitespace}></View>
            </ScrollView>
            <LastView>
                <PriceColumn>
                    <Total>Total:</Total>
                    <Pricing>N0.00</Pricing>
                </PriceColumn>
                <TouchableOpacity style={styles.pay}>
                    <Paytxt>Pay</Paytxt>
                </TouchableOpacity>
            </LastView>
        </SafeAreaView>

)}

const styles = StyleSheet.create({
    notificationsContainer: {
        backgroundColor: "#000",
        paddingTop: 25,
        flex: 1
    },
    defaulttext: {
        color: "#fff",
    },
    pad: {
        paddingLeft: 30,
    },
    padd: {
        paddingLeft: 80,
        paddingRight: 80,
    },
    pay: {
        width: 180,
        height: 48,
        borderRadius: 100,
        backgroundColor: "#C3AD60",
        alignItems: "center",
        justifyContent: "center"
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
        top: 130
    },
    link: {
        color:"#fff",
    },
    roundView: {
        borderRadius: 100,
        height: 32,
        width: 32,
        backgroundColor: "rgba(78,78,78,0.5)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        position: "absolute",
        top: 15,
        right: 15,
        
    },
    white2: {
        alignSelf: "flex-start",
        paddingLeft: 30
    },
    php: {
        alignSelf: "flex-end",
        position: "absolute",
        right: 24,
        top: 140,

    },
    whitespace: {
        paddingBottom: "30%"
    },
    photoview: {
        marginTop: 20,
        position: "relative",
        height: 198
    },
    image: {
        width: 340, 
        height: 180,
        borderRadius: 15
    },
    position: {
        positon: "absolute",
        top: -175,
        left: 8,

    }
})