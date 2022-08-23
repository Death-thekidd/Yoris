import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';



const TopText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 14px;
text-align: center;

color: #FFFFFF;
`;


const StyledButton= styled.TouchableOpacity`
  
width: 320px;
height: 48px;
align-items:center;
justify-content:center;
background: #C3AD60;
border-radius: 30px;


`;

const BuyNow= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
text-align: center;
letter-spacing: -0.333333px;

color: #000000;

`;


const Head= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
letter-spacing: -0.333333px;
color: #C3AD60;
`;


export default function MobileTopUp2({navigation}){
	return(
		<SafeAreaView style={styles.container}>
		<View style={styles.vector}>
       	 <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
        	</TouchableOpacity>
    	</View>
			<TopText>9mobile</TopText>
			<View style={styles.buttons}>
				<View style={styles.buyNow}><StyledButton><BuyNow>AirTime</BuyNow></StyledButton></View>
				<View style={styles.buyNow}><StyledButton><BuyNow>Data</BuyNow></StyledButton></View>
			</View>
		</SafeAreaView>
	)
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000'
  },
   buyNow:{
    alignItems:'center',
    justifyContent:'center',
    margin:30
  },
  buttons:{
  	flex:1,
  	alignItems:'center',
  	justifyContent:'center'
  }

})
