import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon  from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';





const Head= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
letter-spacing: -0.333333px;
color: #C3AD60;
`;


const GymTopImage= styled.ImageBackground`
  
height: 180px;
overflow-x: scroll;

justify-content:flex-end;
background: #FFFFFF;
`;


const HotelName= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 14px;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;

const HotelText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 12px;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;

const OtherText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 16px;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;


const AmountView= styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center;
margin:20px 10px 20px 30px ;
`;


const Amount= styled.View`
width: 72px;
height: 32px;
border-radius: 15px;
align-items:center;
justify-content:center;
margin:10px;
`;



const HotelImage= styled.Image`
width: 142px;
height: 106px;
margin:5px;
border-radius: 5px;
`;

const HotelImages= styled.View`
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
`;

const GreyView= styled.View`
width: 32px;
height: 32px;
border-radius:50px;
background: #C4C4C4;
`;





export default function Gym({navigation}){
	const [sort, setSort]= useState(1);
	return(
		<SafeAreaView style={styles.container}>
		<ScrollView>
			<View style={styles.vector}>
	       	 		<TouchableOpacity onPress={()=>navigation.goBack()}>
	          			<Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
	        		</TouchableOpacity>
	        		<View style={{alignItems:'center', justifyContent:'center', width:'100%', right:45}}><Head>Gym and Spa</Head></View>
	        		<Icon name="search" style={{marginRight:25}} size={25} color="#C3AD60" />
	    	</View>
	    	<GymTopImage source={require('../../../assets/hotelpic11.png')} resizeMode="cover">
		 	<View style={{width:'60%', flexDirection:'row', alignItems:'center', marginBottom:15, marginLeft:15}}>
		 		<GreyView></GreyView>
		 	<View style={{height:32, justifyContent:'center'}}>
    				<HotelName>Name of Hotel</HotelName>
    				<HotelText>0.7km away</HotelText>
    		</View>
    		</View>
    		</GymTopImage>
    	<AmountView>
    		<OtherText style={{marginRight:10}}>Sort:</OtherText>
    		<TouchableOpacity onPress={()=>setSort(1)}>
		       <Amount style={sort==1 ? {backgroundColor: '#4E4E4E'} :{backgroundColor: '#000'} }>
		       		<OtherText>Single</OtherText>
		       </Amount>
		     </TouchableOpacity>
		     <TouchableOpacity onPress={()=>setSort(2)}>  
		       <Amount style={sort==2 ? {backgroundColor: '#4E4E4E'} :{backgroundColor: '#000'} }>
		       		<OtherText>Double</OtherText>
		       </Amount>
		     </TouchableOpacity>  
		       <TouchableOpacity onPress={()=>setSort(3)}>
		       <Amount style={sort==3 ? {backgroundColor: '#4E4E4E'} :{backgroundColor: '#000'} }>
		       		<OtherText>Triple</OtherText>
		       </Amount>
		       </TouchableOpacity>
     	</AmountView>
     	<HotelImages>
     		<TouchableOpacity style={{margin:10}} onPress={()=>navigation.navigate('Gym2')}>
     			<HotelImage source={require('../../../assets/hotelpic7.png')}/>
     			<View style={styles.distance}><OtherText>0.7km away</OtherText></View>
     		</TouchableOpacity>
     		<View style={{margin:10}}>
     			<HotelImage source={require('../../../assets/hotelpic8.png')}/>
     			<View style={styles.distance}><OtherText>0.7km away</OtherText></View>
     		</View>
     		<View style={{margin:10}}>
     			<HotelImage source={require('../../../assets/hotelpic9.png')}/>
     			<View style={styles.distance}><OtherText>0.7km away</OtherText></View>
     		</View>
     		<View style={{margin:10}}>
     			<HotelImage source={require('../../../assets/hotelpic10.png')}/>
     			<View style={styles.distance}><OtherText>0.7km away</OtherText></View>
     		</View>
     	</HotelImages>
     	<View style={[styles.distance, {alignItems:'flex-end', marginRight:15}]}><OtherText>See all</OtherText></View>
     	</ScrollView>
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
