import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign" 
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {  
    SubmittedTxt
} from "../componenets/fintech7Style"

export default function Submitted1({navigation, route}, props) {
    setTimeout(()=> {
        navigation.goBack({paramKey: route.params.paramKey});
    }, 1500);
    return(
        <SafeAreaView style={styles.submittedView}>
        <Icon name="checkcircleo" color="#fff" size={48}/>
        <SubmittedTxt>Order Submitted</SubmittedTxt>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    submittedView: {
        backgroundColor: "#C3AD60",
        paddingTop:20,
        paddingTop: 25,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }

})