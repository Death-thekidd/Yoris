import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
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


const StyledImage= styled.ImageBackground`
width: 360px;
height: 164px;
border-radius: 5px;
align-items:flex-end;
justify-content:flex-end;
`;


const HotelName= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;

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


const TopTextView= styled.View`
flex-direction:row; 
justify-content:space-between;
`;









export default function Hotel({navigation}){
	let [hotelPics, setHotelPics]=useState([
                    {image: require('../../../assets/hotelpic1.png'), isLike:true},
                    {image: require('../../../assets/hotelpic2.png'), isLike:false},
                    {image: require('../../../assets/hotelpic3.png'), isLike:false},
                    ])
 const handleLikes = (ind)=>{
  if (hotelPics[ind].isLike) {
    hotelPics[ind].isLike = false
    hotelPics=[...hotelPics]
    setHotelPics(hotelPics)
  }else{
    hotelPics[ind].isLike = true
    hotelPics=[...hotelPics]
    setHotelPics(hotelPics)
  }
 }                   
	return(
		<SafeAreaView style={styles.container}>
    <ScrollView>
			<View style={styles.vector}>
       	 		<TouchableOpacity onPress={()=>navigation.goBack()}>
          		<Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
        		</TouchableOpacity>
        		<View style={{alignItems:'center', justifyContent:'center', width:'100%', right:45}}><Head>Hotels</Head></View>
    		</View>
    		<ScrollView contentContainerStyle={{flex:1, alignItems:'center', margin:10}} showsVerticalScrollIndicator={false}>	
			{hotelPics.map((item, index) => {
            return (
            <TouchableOpacity onPress={()=>navigation.navigate('Hotel2')} key={index}>
            <View style={{margin: 25}}>
             <StyledImage source={item.image} resizeMode="cover" style={styles.image}>
          <TouchableOpacity onPress={()=>handleLikes(index)}>
    			 <Icon2 name="heart" style={{marginRight:10, marginBottom:10}} size={30} color={item.isLike ? "#E22" : "#999"} />
          </TouchableOpacity>
    		</StyledImage>
    		<TopTextView>
    				<HotelName>Name of Hotel</HotelName><OtherText>0.7km away</OtherText>
    		</TopTextView>
    		<OtherText>Cost per night</OtherText>
    		</View>	
    		</TouchableOpacity>
            );
          })}
          

          </ScrollView>
      </ScrollView>    
    		

    	</SafeAreaView>	

		)}


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
