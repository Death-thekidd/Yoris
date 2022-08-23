import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput, Pressable, Modal } from "react-native";
import {  
    FirstView6,
    BigText5,
    SecondView6,
    PayText,
    Smalltxt,
    Bigtxt,
    SugoiDekaitxt,
    Txt
} from "../componenets/fintech6Style"

import { PhotoView, Quantity, QtyText } from "../componenets/fintech4Style";
import { 
    PhotoView1, 
    Quantity1, 
    QtyText1,
    FirstView5,
    BigText4,
    SecondView4,
    ButtonText1
 } from "../componenets/fintech5Style";
export default function Pending({navigation, route}){
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [routee, setRoute]= useState(route.params.paramKey);
 
    // const [displayLink, setDisplayLink] = useState(false)
    // const trans = route.params.paramKey
    // if (trans === null){
    //     setDisplayLink(true)
    // } else{
    //     setDisplayLink(false)
    // }
    return(
        <SafeAreaView style={styles.fintech6container}>
            {/* <Modal
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
                <View style={styles.popup1}>
                <View style={styles.mar}>
                <FirstView5>
                <TouchableOpacity style={styles.back3} onPress={()=>setModalVisible(!modalVisible)}>
                   <Icon size={30} color="#C3AD60" name="back" style={styles.pad4}/> 
                    </TouchableOpacity>
                   <BigText4 style={styles.pad4}>Procurement</BigText4>
                </FirstView5>
                </View>
                <View style={styles.white1}>
                <Image style={styles.image}/>
                    <Quantity1><QtyText1>Qty: 1</QtyText1><Icon name="caretdown" size={6} color="#fff"/></Quantity1>
                    <View style={styles.linkView}>
                    <Text 
                    style={styles.link}
                    >
                        {routee}
                    </Text>
                    </View>
                   
                
                </View>
                <View style={styles.white2}>
                    <Smalltxt>Procurement Fee:10%</Smalltxt>
                    <Smalltxt>Product Price:N0.00</Smalltxt>
                    <Smalltxt>Shipping Fee/Kg:N0.00</Smalltxt>
                    <Smalltxt>Import Duty/Kg:N0.00</Smalltxt>
                    <Smalltxt>VAT:7.5%</Smalltxt>
                </View>
                <View style={styles.white3}>
                    <Bigtxt>Total: </Bigtxt>
                    <SugoiDekaitxt>N0.00</SugoiDekaitxt>
                </View>
                <View style={styles.center}>
                <TouchableOpacity style={styles.txt}>
                    <Txt>Pay</Txt>
                </TouchableOpacity>
                </View>
                </View>
            </Modal>
            <Modal
            animationType="fade"
            visible={modalVisible1}
            onRequestClose={() => {
                setModalVisible1(!modalVisible1);
              }}
            >
                <View style={styles.popup2}>
                <View style={styles.mar}>
                <FirstView5>
                <TouchableOpacity style={styles.back3} onPress={()=>setModalVisible1(!modalVisible1)}>
                   <Icon size={30} color="#C3AD60" name="back" style={styles.pad4}/> 
                    </TouchableOpacity>
                   <BigText4 style={styles.pad4}>Procurement</BigText4>
                </FirstView5>
                </View>
                <View style={styles.white1}>
                <Image source={require('../../../../assets/pro.png')}/>
                    <Quantity>
                        <QtyText>Qty: 1</QtyText>
                    <Icon name="caretdown" size={6} color="#fff"/>
                    </Quantity>
                </View>
                <View style={styles.white2}>
                    <Smalltxt>Procurement Fee:10%</Smalltxt>
                    <Smalltxt>Product Price:N0.00</Smalltxt>
                    <Smalltxt>Shipping Fee/Kg:N0.00</Smalltxt>
                    <Smalltxt>Import Duty/Kg:N0.00</Smalltxt>
                    <Smalltxt>VAT:7.5%</Smalltxt>
                </View>
                <View style={styles.white3}>
                    <Bigtxt>Total: </Bigtxt>
                    <SugoiDekaitxt>N0.00</SugoiDekaitxt>
                </View>
                <View style={styles.center}>
                <TouchableOpacity style={styles.txt}>
                    <Txt>Pay</Txt>
                </TouchableOpacity>
                </View>
                </View>
            </Modal> */}
            <ScrollView>
                    <FirstView6>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon size={30} color="#C3AD60" name="back"/>
                </TouchableOpacity>
                <BigText5>Notifications</BigText5>
                <TouchableOpacity onPress={()=>navigation.navigate("Procurement10")}>
                    <Icon2 size={30} color="#C3AD60" name='history'/>
                </TouchableOpacity>
                </FirstView6>
                <SecondView6>
                <View style={styles.photoview}>
                <Image source={require('../../../assets/camera.png')}style={styles.image}/>
                <Quantity><QtyText>Qty: 1</QtyText><Icon name="caretdown" size={6} color="#fff"/></Quantity>
                    <View style={styles.linkView}>
                    <Text 
                    style={styles.link}
                    >
                        {routee}
                    </Text>
                    </View>
                   
                
                </View>
                <View style={styles.photoview}>
                <Image source={require('../../../assets/soap.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><Icon name="caretdown" size={6} color="#fff"/></Quantity>
                
                </View>
                <View style={styles.photoview}>
                <Image source={require('../../../assets/pro.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><Icon name="caretdown" size={6} color="#fff"/></Quantity>
                
                </View>
                <View style={styles.photoview}>
                <Image source={require('../../../assets/shoe.png')} style={styles.image}/>
                    <Quantity><QtyText>Qty: 1</QtyText><Icon name="caretdown" size={6} color="#fff"/></Quantity>
                
                </View>
                {/* <TouchableOpacity style={styles.paybtn}>
                    <PayText>Pay All</PayText>
                </TouchableOpacity> */}
                </SecondView6>
            </ScrollView>
        </SafeAreaView>
)};

const styles = StyleSheet.create({
    fintech6container: {
        backgroundColor: "#000",
        paddingTop:20,
        flex: 1,
    },
    back4: {
        padding: 10,
    },
    pad5: {
        paddingLeft: 30,
        
    },
    pad: {
        paddingLeft: 50,
        paddingRight: 60,
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
        top: 87
    },
    link:{
        color:"#fff",
    },
    photoview: {
        marginTop: 32,
        height: 128,
        position: "relative"

    },
    paybtn: {
        height: 48,
        width: 283,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#C3AD60",
        marginTop:64,
    },
    popup1: {
        backgroundColor: "#000",
        flex: 1,
    },
    popup2: {
        backgroundColor: "#000",
        flex: 1,
    },
    back3: {
        padding: 10,
    },
    pad4: {
        paddingLeft: 40,
    },
    mar: {
        marginTop: 55,
    },
    white1: {
        alignItems: "center",
        marginTop: 55,
        position: "relative",
    },
    white2: {
        marginTop: 56,
        paddingLeft: 75,
    },
    white3: {
        marginTop: 64,
        paddingLeft: 75,
        flexDirection: "row",
    },
    txt: {
        width: 283,
        height: 48,
        borderRadius: 100,
        backgroundColor: "#C3AD60",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    center: {
        alignItems: "center",
    },
    image:{
        width: 340,
        height: 128,
        borderRadius: 15,
    }
})