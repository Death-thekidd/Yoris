import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon  from 'react-native-vector-icons/Feather';
import Icon3  from 'react-native-vector-icons/Entypo';
import styled from 'styled-components/native';
import {VectorHeader} from '../../components/screenComponents/components';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Category1} from './category1';


const Tabs = createMaterialTopTabNavigator();


const Top= styled.ImageBackground`
height: 320px;
justify-content:space-between;
`;

const TopText1= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #FFFFFF;
`;

const TopText2= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-size: 16px;
font-weight: 300;
color: #FFFFFF;
@media screen an resolution(720px) {

}
`;

const Texts= styled.View`
    width:85%;
    margin:0 20px 15px 20px;
    flex-direction:row;
    justify-content:space-between;
  
`;




export default function Food3({navigation}){

	return(
	<SafeAreaView style={styles.container}>	
      <Top source={require('../../../assets/foodTop.png')}>
        <View style={styles.vector}>
              <TouchableOpacity onPress={()=>navigation.navigate('Food2')}>
                  <Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
              </TouchableOpacity>
              <View style={{width:1}}></View>
        </View>
        <Texts>
          <View style={{width:'80%'}}>
            <TopText1>Brand Name - Locale</TopText1>
            <View style={styles.text}><TopText2>0.7km away</TopText2><TopText2>Delivery fee N0.00</TopText2></View>
          </View>
          <View style={{justifyContent:'center', alignItems:'flex-end', flexDirection:'row'}}>

            <TopText2><Icon3 name="star-outlined" size={13} color="#C3AD60" />4.5</TopText2>
            
          </View>
        </Texts>
      </Top>  
        <Tabs.Navigator
            headerMode="none"
            screenOptions={{
                tabBarShowIcon: true,
                tabBarActiveTintColor: '#C3AD60',
            tabBarInactiveTintColor: '#ddd',
                tabBarIndicatorStyle: {
                    backgroundColor: '#000',
                },

                tabBarStyle: {
                    borderTopWidth: 2,
                    elevation: 10,
                    backgroundColor: '#000',
                    borderRadius: 1

                }
            }}>
               <Tabs.Screen
                name="Category1"
                component={Category1}
                options={{
      headerShown: false,}}
            />
            <Tabs.Screen
                name="Category2"
                component={Category1}
                options={{
      headerShown: false,}}
            />
             <Tabs.Screen
                name="Category3"
                component={Category1}
                options={{
      headerShown: false,}}
            />
            
            </Tabs.Navigator>   
    </SafeAreaView>	

)}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
  },
  vector:{
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  text:{
    flexDirection:'row',
    justifyContent:'space-between'

  },


})