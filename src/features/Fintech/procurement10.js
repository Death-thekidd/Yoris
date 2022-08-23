import React, { useState } from "react";
import {Calendar, CalendarList} from "react-native-calendars";
import dateFns from 'date-fns';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather"
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons" 
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity, TextInput, Image } from "react-native";
import {  
   First,
   BackupTxt,
   Second,
   DateView,
   Date,
   Time,
   Select
} from '../componenets/fintech11Style'
import { BigText5 } from '../componenets/fintech6Style';
import { Quantity1, PhotoView1, QtyText1 } from '../componenets/fintech5Style';
import { PhotoView, Quantity, QtyText, CaretWhitespace } from '../componenets/fintech4Style';



export default function History({navigation, route}){
    const [routee, setRoute]= useState(route.params.paramKey);
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <SafeAreaView style={styles.pendingContainer}>
            <Modal
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.calendarContainer}>
                    <Calendar
                    style={{
                        height: 257,
                        width: 294,
                    }}
                     theme={{
                       calendarBackground: '#000',
             
                       selectedDayBackgroundColor: '#C3AD60',
                       selectedDayTextColor: '#166088',
                       selectedDotColor: '#166088',
             
                       dayTextColor: '#DBE9EE',
                       textDisabledColor: '#000',
                       dotColor: '#DBE9EE',
             
                       monthTextColor: '#C3AD60',
                       textMonthFontWeight: 'bold',
             
                       arrowColor: '#DBE9EE',
                     }}
                     onDayPress={day => {
                        console.log('selected day', day);
                        
                    }}
                    />
                    
                    <TouchableOpacity style={styles.selectbtn}>
                        <Select>Select</Select>
                    </TouchableOpacity>
                    
                </View>
            </Modal>
            <ScrollView>
                <First>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon size={30} color="#C3AD60" name="back"/>
                    </TouchableOpacity>
                    <BigText5>History</BigText5>
                    <TouchableOpacity onPress={()=>navigation.navigate("CalendarScreen")}>
                    <Icon4 size={20} color="#C3AD60" name="calendar"/>
                    </TouchableOpacity>
                </First>

                <Second>
                <View style={styles.photoview}>
                <Image source={require('../../../assets/pro-modified.png')}style={styles.image}/>
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
                <DateView>
                    <Date>DD/MM/YYYY</Date>
                    <Time>00:00AM</Time>
                </DateView>
                </View>
                
            
                <View style={styles.photoview}>
                <Image style={styles.image} source={require('../../../assets/shoe-modified.png')}/>
                    <Quantity>
                        <QtyText>Qty: 1</QtyText>
                        <CaretWhitespace>
                            <Icon name="caretdown" size={12} color="#fff"/>
                        </CaretWhitespace>
                    </Quantity>
                    <DateView>
                    <Date>DD/MM/YYYY</Date>
                    <Time>00:00AM</Time>
                    </DateView>
                </View>
                <View style={styles.photoview}>
                <Image style={styles.image} source={require('../../../assets/pro-modified.png')}/>
                    <Quantity>
                        <QtyText>Qty: 1</QtyText>
                        <CaretWhitespace>
                            <Icon name="caretdown" size={12} color="#fff"/>
                        </CaretWhitespace>
                    </Quantity>
                    <DateView>
                    <Date>DD/MM/YYYY</Date>
                    <Time>00:00AM</Time>
                    </DateView>
                </View>
                <View style={styles.photoview}>
                <Image style={styles.image} source={require('../../../assets/soap-modified.png')}/>
                    <Quantity>
                        <QtyText>Qty: 1</QtyText>
                        <CaretWhitespace>
                            <Icon name="caretdown" size={12} color="#fff"/>
                        </CaretWhitespace>
                    </Quantity>
                    <DateView>
                    <Date>DD/MM/YYYY</Date>
                    <Time>00:00AM</Time>
                    </DateView>
                </View>
                <View style={styles.photoview}>
                <Image style={styles.image} source={require('../../../assets/camera-modified.png')}/>
                    <Quantity>
                        <QtyText>Qty: 1</QtyText>
                        <CaretWhitespace>
                            <Icon name="caretdown" size={12} color="#fff"/>
                        </CaretWhitespace>
                    </Quantity>
                    <DateView>
                    <Date>DD/MM/YYYY</Date>
                    <Time>00:00AM</Time>
                    </DateView>
                </View>
                </Second>
            </ScrollView>
            <View style={styles.dwn}>
                <TouchableOpacity  style={styles.backup}>
                    <BackupTxt>Back Up</BackupTxt>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
)}

const styles= StyleSheet.create({
    pendingContainer: {
        backgroundColor: "#000",
        paddingTop:20,
        flex: 1,
    },
    defaultText: {
        color: "#fff",
        textAlign: "center"
    },
    pad: {
        paddingLeft: 30,
    },

    padd: {
        paddingLeft: 90,
        paddingRight: 100
    },
    backup: {
        height: 48,
        width: 300,
        borderColor: "#C3AD60",
        borderWidth: 2,
        backgroundColor: "#000",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        margin:20
    },
    linkView: {
        height: 45,
        width: 340,
        backgroundColor: "#4E4E4E",
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        paddingLeft: 25,
        justifyContent:"space-between",
        position: "absolute",
        top: 84,
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 25,
    },
    link:{
        color:"#fff",
    },
    photoview: {
        position: "relative",
        height: 188
    },
    image: {
        width:340,
        height: 128,
        borderRadius: 15,

    },
    calendarContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000",
        alignItems: "center"
    
    },
    selectbtn: {
        height: 48,
        width: 180,
        borderRadius: 100,
        backgroundColor: "#C3AD60",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100
    },
    dwn:{
        justifyContent:'flex-end',
        position: "absolute",
        width:'100%',
        height:'100%',
        alignItems:'center',


     }
})