import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather" 
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {  
    FirstView2,
    BigText2,
    SecondView2,
    Imagebox,
    BtnText
} from "../componenets/fintech3Style"

export default function Fintech3({navigation}){
    return(
        <SafeAreaView style={styles.fintech3container}>
            <ScrollView>
                <FirstView2>
                <TouchableOpacity style={styles.back1} onPress={()=>navigation.goBack()}>
                   <Icon size={30} color="#C3AD60" name="back" style={styles.pad2}/> 
                    </TouchableOpacity>
                   <BigText2 style={styles.pad3}>Procurement</BigText2>
                </FirstView2>
                <SecondView2>
                    <TouchableOpacity>
                    <Imagebox>
                        <Icon2 size={64} color="#808080" name="image"/>
                        
                    </Imagebox>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("Fintech4")} ><BtnText>Upload</BtnText></TouchableOpacity>
                </SecondView2>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 fintech3container: {
    backgroundColor: "#000",
    paddingTop: 25,
    flex: 1,
 },
 back1: {
    padding: 10,
 },
 pad2: {
    paddingLeft: 30
 },
 pad3: {
    paddingLeft: 59,
 },
 button1: {
    width: 180,
    height: 48,
    backgroundColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 48,
 },

});