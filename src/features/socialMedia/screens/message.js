import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/Feather';
import Icon2  from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Dimensions } from "react-native";
import styled from 'styled-components/native';
import {ww, wp} from '../../../../responsive';
/*
${wp()}%;
${hh()}px;
${ww()}px;
*/


export const Msg1 = styled.View`
width: ${ww(281)}px;
background: #C3AD6080;
`;


export const Msg2 = styled.View`
width: ${ww(281)}px;
background: #C3AD60;
`;


export const Txt1 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: ${ww(14)}px;
color: #FFFFFF;
padding: ${ww(5)}px;
`;

export const UserImage = styled.Image`
height: ${ww(32)}px;
width: ${ww(32)}px;
border-radius: 500px;
margin:0 ${ww(20)}px 0 ${ww(20)}px;
`;


export const Highlight = styled.View`
background: rgba(0, 0, 0, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
flex-direction:row;
`;


export const HighlightTxt1 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: ${ww(12)}px;
color: #FAFF00;
padding-bottom:${ww(2)}px;
`;


export const HighlightTxt2 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: ${ww(10)}px;
color: #FFFFFF;
width:50%;
`;


export const Yellow = styled.View`
width: ${ww(8)}px;
height: 100%;
background: #FAFF00;
`;


export const MessageBar = styled.View`
width: ${wp(320)}%;
height: ${ww(48)}px;
background: rgba(78, 78, 78, 0.5);
border-radius: ${ww(30)}px;
flex-direction:row;
`;


export const PlusBar = styled.Image`
width: ${ww(44)}px;
height: ${ww(44)}px;
`;


export const Grey = styled.View`
width: ${ww(48)}px;
height: ${ww(48)}px;
border-radius: ${ww(48)}px;
align-items:center;
justify-content:center;
background: #666666;
`;


export const Send = styled.Image`
width: ${ww(48)}px;
height: ${ww(48)}px;
`;



 

export default function Messsage({navigation}) {
    
        return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                   <View style={styles.card}>
                        <UserImage source={require('../../../../assets/xbox.png')}/>
                        <Msg1 style={styles.msg}><Txt1>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Txt1></Msg1>
                  </View>

                  <View style={styles.card2}>
                        <UserImage source={require('../../../../assets/msgPic.png')}/>
                        <Msg2 style={styles.msg2}><Txt1>A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.</Txt1></Msg2>
                  </View>

                  <View style={styles.card}>
                        <UserImage source={require('../../../../assets/xbox.png')}/>
                        <Msg1 style={styles.msg}>
                            <Highlight>
                                <Yellow style={styles.yellow}></Yellow>
                                <View style={{padding:ww(5)}}>
                                    <HighlightTxt1>User Name</HighlightTxt1>
                                    <HighlightTxt2>A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend...</HighlightTxt2>
                                </View>
                            </Highlight>
                            <Txt1>Thank you! This was very helpful</Txt1>
                        </Msg1>

                  </View>

              </ScrollView>

          <View style={styles.barView}>
                <MessageBar>
                    <Grey><PlusBar source={require('../../../../assets/plusBar.png')}/></Grey>
                    <TextInput style={styles.textInput} placeholder=' Send your message'/>
                </MessageBar>
                <Send source={require('../../../../assets/send.png')}/>
          </View>
        </SafeAreaView>
        )
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingTop:ww(20),
        flex:1,
        justifyContent:'space-between'
    },
    msg:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        padding:10,

    },
    msg2:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        padding:10,

    },
    card:{
        flexDirection:'row',
        marginTop:ww(30)
    },
    card2:{
        flexDirection:'row-reverse',
        marginTop:ww(30)
    },
    yellow:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    barView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:ww(20)
    },
    textInput:{
        width:'100%',
        height:ww(48)
    }

})