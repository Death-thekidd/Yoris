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



export const SearchBar = styled.View`
width: ${wp(360)}%;
height: ${ww(36)}px;
flex-direction:row;
align-items:center;
background: #4E4E4E;
border-radius: 30px;
`;


export const TopText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: ${ww(12)}px;
color: #FFFFFF;
`;


export const BottomText1 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: ${ww(24)}px;
color: #FFFFFF;
`;


export const BottomText2 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: ${ww(12)}px;
color: #C3AD60;
`;


export const TopTrend = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: ${ww(18)}px;
color: #C3AD60;
`;


export const Button1 = styled.TouchableOpacity`
width: ${ww(116)}px;
height: ${ww(28)}px;
border: 1px solid #4E4E4E;
border-radius: 15px;
align-items: center;
justify-content: center;
margin:${ww(10)}px 0 ${ww(8)}px 0;
`;

export const Button2 = styled.TouchableOpacity`
width: ${ww(116)}px;
height: ${ww(28)}px;
background: #C4C4C4;
border-radius: 15px;
align-items: center;
justify-content: center;
`;



export const ButtonText1 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: ${ww(12)}px;
text-align: center;
color: #4E4E4E;
`;

export const Card = styled.View`
border-bottom-color:#4e4e4e;
border-bottom-width:1px;
padding: ${ww(20)}px 0 ${ww(20)}px ${ww(30)}px;
`;


export const TrendTopic = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: ${ww(18)}px;
color: #FFFFFF;
`;


export const Post = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: ${ww(14)}px;
color: #C4C4C4;
margin-top:${ww(5)}px;
`;


export const Txt2 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: ${ww(12)}px;
color: #C4C4C4;
`;








export default function Search({navigation}) {
    
        return(
        <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems:'center'}}>
                <SearchBar>
                    <Icon2 size={ww(20)} color="#C4C4C4" name="back"/>
                    <TextInput style={styles.search}/>
                    <Icon name="search" size={ww(20)} color="#C4C4C4" />
                </SearchBar>
            </View>

            <ImageBackground source={require('../../../../assets/searchImage.png')} style={styles.image}>
                <View style={styles.imageTexts}>
                    <TopText>Trend Industry</TopText>
                    <View style={styles.bottom}>
                        <BottomText1>Trending Topics</BottomText1>
                        <BottomText2>Top Trend</BottomText2>
                    </View>
                </View>    
            </ImageBackground>

            <View>
                <Card>
                    <TopTrend>Top Trends In Your Location</TopTrend>
                    <Button1 onPress={()=>navigation.navigate('Message')}><ButtonText1>Change Location</ButtonText1></Button1>
                    <Button2 onPress={()=>navigation.navigate('Vendor1')}><ButtonText1>Keep these</ButtonText1></Button2>
                </Card>

                <Card style={{paddingLeft:ww(50)}}>
                    <TrendTopic>Trend Topic 1</TrendTopic>
                    <Post>20k posts</Post>
                </Card>

                <Card style={{paddingLeft:ww(50)}}>
                    <TrendTopic>Trend Topic 2</TrendTopic>
                    <Post>15k posts</Post>
                </Card>
            </View>

            <View>
                <Card>
                    <TopTrend>Top Trends In Your Industry</TopTrend>
                    <Txt2 style={styles.tText}>These are trending topics in your industries of choice. You can edit industry settings in your profile.</Txt2>
                </Card>

                <Card style={{paddingLeft:ww(50)}}>
                    <TrendTopic>Trend Topic 1</TrendTopic>
                    <Post>20k posts</Post>
                </Card>

                <Card style={{paddingLeft:ww(50)}}>
                    <TrendTopic>Trend Topic 2</TrendTopic>
                    <Post>15k posts</Post>
                </Card>
            </View>
            </ScrollView>
        </SafeAreaView>
        )
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingTop:ww(20),
        flex:1
    },
    search:{
        width:'85%'
    },
    image:{
        height:ww(256), 
        marginTop:20,
        justifyContent:'flex-end'
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        
    },
    imageTexts:{
        margin:20
    },
    tText:{
        marginLeft:ww(50),
        marginRight:ww(50),
        marginTop: ww(20),
        marginBottom: ww(20),
        width:ww(290)
    }
})