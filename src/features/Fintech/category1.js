import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon  from 'react-native-vector-icons/Feather';
import Icon3  from 'react-native-vector-icons/Entypo';
import styled from 'styled-components/native';



const StyledImage= styled.Image`
width: 56px;
height: 56px;
border-radius: 5px;
  
`;


const StyledText1= styled.Text`
font-family: Roboto;
font-size: 16px;
font-weight: 300;
color: #C4C4C4;  
`;


const StyledText2= styled.Text`
font-family: Roboto;
font-size: 24px;
font-weight: 700;
 color: #FFFFFF; 
`;

const StyledText3= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;

color: #FFFFFF;
`;









export function Category1({navigation}){
    const meals = [
         {image:require('../../../assets/foodImg2.png'), name: 'Name of meal', description:'Detailed description of meal', price:'N0.00', time:'30 mins'},
         {image:require('../../../assets/foodImg3.png'), name: 'Name of meal', description:'Detailed description of meal', price:'N0.00', time:'30 mins'},
         {image:require('../../../assets/foodImg10.png'), name: 'Name of meal', description:'Detailed description of meal', price:'N0.00', time:'30 mins'},
         {image:require('../../../assets/foodImg11.png'), name: 'Name of meal', description:'Detailed description of meal', price:'N0.00', time:'30 mins'}   
    ]
	return(
	<View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        {meals.map((item, index)=>{
            return(
                <View style={[styles.row, {paddingTop:20, marginLeft:20, marginRight:20, paddingBottom:15, borderBottomWidth:1, borderBottomColor:'#4E4E4E', height:'30%'}]}  key={index}>
            <View style={styles.row}>
                <StyledImage source={item.image}/>
                <View style={{marginLeft:20, justifyContent:'space-between'}}>
                    <View>
                        <StyledText2>{item.name}</StyledText2>
                        <StyledText1>{item.description}</StyledText1>
                    </View>    
                    <StyledText3>{item.price}</StyledText3>
                </View>
            </View>
            <View style={styles.right}>
                <Icon name="clock" size={16} color="#C3AD60" />
                <View style={{alignItems:'center'}}>
                    <StyledText1 style={styles.min}>{item.time}</StyledText1>
                </View>
            </View>
        </View>
                )
        })

        }
        
      </ScrollView>  
    </View>	

)}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  right:{
    width:'13%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  min:{
    textAlign:'center'
  }


})