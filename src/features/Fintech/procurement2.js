import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign" 
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { 
    FirstView1, 
    BigText1,
    SecondView1,
    PasteText

} from '../componenets/fintech2Style';




export default function Fintech2({navigation}){
    const [pasteLink, setPasteLink] = useState('Paste Link')  
    return(
        <SafeAreaView style={styles.fintech2container}>
            <ScrollView>

                <FirstView1>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon size={30} color="#C3AD60" name="back"/> 
                    </TouchableOpacity>
                   <BigText1>Procurement</BigText1>
                   <View></View>
                </FirstView1>

                <SecondView1>
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor="#fff"
                    value={pasteLink}
                    placeholder="Paste Link"
                    onChangeText={pastelink => setPasteLink(pastelink)}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate('Procurement5', {
                        paramKey: pasteLink,
                    })
                    } style={styles.paste}><PasteText>Paste</PasteText></TouchableOpacity>
                </SecondView1>
            </ScrollView>
        </SafeAreaView>
    )
}
//#CDA360
const styles = StyleSheet.create({
    fintech2container: {
        backgroundColor: "#000",
        paddingTop:20,
        flex: 1,
    },
    pad: {
        paddingLeft: 59,
    },
    pad1: {
        paddingLeft: 30
    },
    input: {
        backgroundColor: "#4E4E4E",
        width: 320,
        height: 48,
        borderRadius: 100,
        flexDirection: "row",
        paddingLeft: 20,
        color: "#fff"   
    },
    paste: {
        backgroundColor: "#C3AD60",
        height: 48,
        width: 180,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        marginTop: 48,
    },
    back: {
        padding: 10,
    }

})