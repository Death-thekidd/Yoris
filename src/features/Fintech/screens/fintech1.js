import React, { useState } from 'react';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
    FirstView,
    BigText,
    SecondView,
    BtnText,
    MiddleText
} from '../componenets/fintech1Style'

export default function Fintech1({navigation}){
    return( 
    <SafeAreaView style={styles.container}>
     <ScrollView>
         <FirstView>
        <TouchableOpacity onPress={()=>navigation.navigate("Fintech8")}>
         <Icon size={30} color="#C3AD60" name="back" style={styles.pad}/>
        </TouchableOpacity>
            <BigText style={styles.padd}>Procurement</BigText>
        <TouchableOpacity onPress={()=>navigation.navigate("Fintech10")}>
            <Icon size={20} color= "#C3AD60" name='bells' style={styles.padddd}/>
        </TouchableOpacity>
         <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Fintech6")}>
         <Icon1 size={20} color="#C3AD60" name="clipboard" style={styles.paddd}/>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate("Fintech11")}>
            <Icon2 size={20} color="#C3AD60" name='history'/>
         </TouchableOpacity>
         </FirstView>
         <SecondView>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Fintech2")}>
             <BtnText>Paste Link</BtnText>
            </TouchableOpacity>
            <View style={styles.txt}><MiddleText>-Or-</MiddleText></View>
            <TouchableOpacity style={styles.btn1} onPress={()=>navigation.navigate("Fintech3")}>
                <BtnText>Upload Photo</BtnText>
            </TouchableOpacity>
         </SecondView>
     </ScrollView>
    </SafeAreaView>
     
    )
   
}

const styles = StyleSheet.create({
container: {
    backgroundColor: "#000",
    paddingTop: 25,
    flex: 1,

},
pad: {
    paddingLeft: 34,
    color: "#C3AD60",
},
padd: {
    paddingLeft: 62,
    paddingRight: 15,
    textAlign: "center",
},
padddd: {
    paddingRight: 15,
},
paddd: {
    paddingRight: 15,
},
btn: {
    backgroundColor: "#C3AD60",
    borderRadius: 100,
    height: 65,
    width: 283,
    alignItems: "center",
    justifyContent: "center",
    color: "#000"
},
btn1: {
    marginTop: 39,
    backgroundColor: "#C3AD60",
    borderRadius: 100,
    height: 65,
    width: 283,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
},
btnText: {
    color: "#000",
    fontFamily: "Roboto",
},
txt: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
},
touch: {
}
});



