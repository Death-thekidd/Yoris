import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon  from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';



const StyledImage= styled.ImageBackground`
width: 360px;
height: 360px;
overflow-x: scroll;
flex-direction:row;
align-items:flex-end;
justify-content:space-between;
align-self:center;
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


const Service= styled.View`
  
width: 96px;
height: 96px;
background: #4E4E4E;
border-radius: 5px;
align-items:center;
justify-content:center;
`;


const Amount= styled.View`
width: 72px;
height: 32px;
background: #C3AD60;
border-radius: 15px;
align-items:center;
justify-content:center;
margin:10px;
`;


const AmountView= styled.View`
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
margin:20px;
`;



const BottomView= styled.View`
height: 86px;
background: #9A8340;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;



const BottomText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 24px;

color: #FFFFFF;
`;


const BottomOtherText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 20px;

color: #FFFFFF;
`;


const BottomButton= styled.TouchableOpacity`
  
width: 133px;
height: 49px;
background: #000000;
border-radius: 30px;
align-items:center;
justify-content:center;
margin:10px;
`;

const VectorWidget= styled.Image`
height: 24px;
width: 24px;
margin:10px;
`;




export default function Hotel({navigation}){
  const [sort, setSort]= useState(1);
  const [isLike, setIslike]=useState(false);
	return(
	<SafeAreaView style={styles.container}>	
    <ScrollView>
		<View style={styles.vector}>
       	 		<TouchableOpacity onPress={()=>navigation.goBack()}>
          			<Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
        		</TouchableOpacity>
        		<Icon name="search" style={{marginRight:25}} size={25} color="#C3AD60" />
    	</View>
		 <StyledImage source={require('../../../assets/hotelpic4.png')} resizeMode="cover">
		 	  <View style={{width:'60%'}}>
    				<HotelName>Name of Hotel</HotelName>
    				<OtherText>123, street name, awesome local govt. State.</OtherText>
    		</View>
        <TouchableOpacity onPress={()=>setIslike(!isLike)}>
          <Icon2 name="heart" style={{marginRight:10, marginBottom:10}} size={30} color={isLike ? "#E22" : "#999"} />
        </TouchableOpacity>
    	</StyledImage>
     <View style={styles.distance}><OtherText>0.7km away</OtherText></View> 
     <View style={styles.middle}>
        <OtherText>0.7km away</OtherText>
        <View style={styles.services}>
          <Service>
            <VectorWidget source={require('../../../assets/layer4.png')}/>
            <OtherText>WiFi</OtherText>
          </Service>
          <Service>
            <VectorWidget source={require('../../../assets/layer2.png')}/>
            <OtherText>Parking</OtherText>
          </Service>
          <Service>
            <VectorWidget source={require('../../../assets/layer5.png')}/>
            <OtherText>Food</OtherText>
          </Service>
       </View>
     </View>
     <View style={{alignItems:'center', justifyContent:'center'}}>
     <AmountView>
       <TouchableOpacity onPress={()=>setSort(1)}>
           <Amount style={sort==1 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>Single</OtherText>
           </Amount>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>setSort(2)}>  
           <Amount style={sort==2 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>Double</OtherText>
           </Amount>
         </TouchableOpacity>  

           <TouchableOpacity onPress={()=>setSort(3)}>
           <Amount style={sort==3 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>Triple</OtherText>
           </Amount>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSort(4)}>
           <Amount style={sort==4 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>Quad</OtherText>
           </Amount>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSort(5)}>
           <Amount style={sort==5 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>King</OtherText>
           </Amount>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSort(6)}>
           <Amount style={sort==6 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>Queen</OtherText>
           </Amount>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSort(7)}>
           <Amount style={sort==7 ? {backgroundColor: '#C3AD60'} :{backgroundColor: '#4E4E4E'} }>
              <OtherText>Twins</OtherText>
           </Amount>
           </TouchableOpacity>
     </AmountView>
     </View>
     </ScrollView>
     <BottomView>
        <View style={{flexDirection:'row', alignItems:'center', width:'40%', margin:10}}>
          <BottomText>N0.0</BottomText>
          <OtherText>/Night</OtherText>
        </View>
        <BottomButton><BottomOtherText>Book Now</BottomOtherText></BottomButton>
     </BottomView>
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
    justifyContent:'space-between',
    width:'100%'
  },
  distance:{
    flexDirection:'row', 
    alignItems:'flex-end', 
    justifyContent:'flex-end',
     marginRight:20
  },
  middle:{
    margin:20,
    marginTop:40
  },
  services:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }

})