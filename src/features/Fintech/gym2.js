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
height: 228px;
overflow-x: scroll;

justify-content:flex-end;
background: #FFFFFF;
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


const AmountView= styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center;
`;


const Amount= styled.View`
width: 72px;
height: 32px;
background: #4E4E4E;
;
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


const Service= styled.View`
  
width: 96px;
height: 96px;
background: #4E4E4E;
border-radius: 5px;
align-items:center;
justify-content:center;
`;


const GymCarosel= styled.Image`
width: 148px;
height: 116px;
border-radius: 5px;
margin:10px 20px 10px 0;
`;


const StyledButton= styled.TouchableOpacity`
  
width: 250px;
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
font-size: 18px;
line-height: 28px;
text-align: center;
letter-spacing: -0.333333px;

color: #000000;

`;


const VectorImage= styled.Image`
left: 16.59%;
right: 77.8%;
`;


const GreyView= styled.View`
width: 64px;
height: 64px;
border-radius:50px;
background: #C4C4C4;
`;

const VectorWidget= styled.Image`
height: 24px;
width: 24px;
margin:10px;
`;




export default function Gym2({navigation}){
	const Carosel = [require('../../../assets/hotelpic5.png'), require('../../../assets/hotelpic6.png'), require('../../../assets/hotelpic1.png')]
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
	    	<GymTopImage source={require('../../../assets/hotelpic12.png')} resizeMode="cover">
		 	<View style={{width:'60%'}}>
		 			<GreyView style={{margin:5}}></GreyView>
    				<HotelName>Name of Hotel</HotelName>
    				<OtherText>123, street name, awesome local govt. State.</OtherText>
    		</View>
    	</GymTopImage>
     <View style={styles.middle}>
        <View style={styles.services}>
          <Service>
            <VectorWidget source={require('../../../assets/layer1.png')}/>
            <OtherText>Instructor</OtherText>
          </Service>
          <Service>
          	<VectorWidget source={require('../../../assets/layer2.png')}/>
          	<OtherText>Parking</OtherText>
          </Service>
          <Service>
            <VectorWidget source={require('../../../assets/layer3.png')}/>
            <OtherText>Diet Plan</OtherText>
          </Service>
       </View>
     </View>
	     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:20}}>
	     {Carosel.map((item, index) => {
	            return (
	            	
	            	<View key={index} contentContainertyle={styles.carosel}>
	            	
	            			<GymCarosel source={item}/>
	            	</View>
	            );
	          })}
	      </ScrollView>
	       <View style={styles.buyNow}><StyledButton ><BuyNow>Book an appointment</BuyNow></StyledButton></View>
	       <View style={styles.buyNow}><StyledButton style={{backgroundColor:'#000', borderWidth:2, borderColor:'#C3AD60'}}><BuyNow style={{color:'#C3AD60'}}>Become a member</BuyNow></StyledButton></View>
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
  middle:{
    margin:20,
    marginTop:40
  },
  services:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  carosel:{
  	flexDirection:'row', 
  	alignItems:'center', 
  },
  buyNow:{
    alignItems:'center',
    justifyContent:'center',
    margin:20,
	}
})
