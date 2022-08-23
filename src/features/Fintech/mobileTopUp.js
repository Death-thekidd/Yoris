import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';



const Head= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.333333px;
color: #C3AD60;
`;


const Networks= styled.Image`
width: 72px;
height: 100px;
margin:5px
`;


const FinView= styled.View`
flex-direction:row;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;
margin:40px 0 40px 0;
`;


const FinText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
text-align:center;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;

`;


const FinInd= styled.TouchableOpacity`
align-items:center;
justify-content:flex-start;
margin:60px 10px 60px 10px;

height: 73px;
width: 100px;
`;


export default function MobileTopUp({navigation}){
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.vector}>
       	 <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
        	</TouchableOpacity>
        	<View style={{alignItems:'center', justifyContent:'center', width:'100%', right:45}}><Head>Select Network</Head></View>
    		</View>

    		 <FinView>
	       		<FinInd onPress={()=>navigation.navigate('MobileTopUp2')}><Networks source={require('../../../assets/9mobile.png')}/><FinText>9mobile</FinText></FinInd>
	       		<FinInd onPress={()=>navigation.navigate('MobileTopUp2')}><Networks source={require('../../../assets/tizeti.png')}/><FinText>Tizeti</FinText></FinInd>
	       		<FinInd><Networks source={require('../../../assets/glo.png')}/><FinText>Glo</FinText></FinInd>
	       		<FinInd><Networks source={require('../../../assets/airtel.png')}/><FinText>Airtel</FinText></FinInd>
	       		<FinInd><Networks source={require('../../../assets/mtn.png')}/><FinText>MTN</FinText></FinInd>
	       		<FinInd><Networks source={require('../../../assets/spectranet.png')}/><FinText>Spectranet</FinText></FinInd>
	       </FinView>
    	</SafeAreaView>	
		)
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000'
  },
  vector:{
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },

})