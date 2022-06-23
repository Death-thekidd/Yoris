import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
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

const StyledImage= styled.Image`
  
width: 96px;
height: 96px;
`;

const ProductName= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 28px;
text-align: center;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;

const Price= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
/* identical to box height */
letter-spacing: -0.333333px;

color: #FFFFFF;
`;

const Piece= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.333333px;
color: #FFFFFF;
margin-bottom:5px;
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
line-height: 28px;
text-align: center;
letter-spacing: -0.333333px;

color: #000000;

`;

const PriceText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.333333px;

color: #FFFFFF;

`;

const Total= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.333333px;

color: #FFFFFF;

`;






export default function Ecommerce7({navigation}){
	  
	return(
	<SafeAreaView style={styles.container}>	
  		<ScrollView showsVerticalScrollIndicator={false}>
  			 <View style={styles.vector}>
		        <TouchableOpacity onPress={()=>navigation.goBack()}>
		          <Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
		        </TouchableOpacity>
		        <View style={{alignItems:'center', justifyContent:'center', width:'100%', right:45}}><Head>Checkout</Head></View>
   			 </View>

         <View style={styles.check}> 
        <StyledImage source={require('../assets/cart1.png')} />
        <View style={{justifyContent:'space-between'}}><View><ProductName>Product Name</ProductName><Price>N0.00</Price></View><Piece>1 piece</Piece></View>
        <View style={{alignItems:'center', justifyContent:'flex-end'}}><Text style={{color:'green'}}>+</Text><Text style={{color:'white'}}>1</Text><Text style={{color:'red'}}>-</Text></View>
      </View>

      <View style={styles.check}> 
        <StyledImage source={require('../assets/cart2.png')} />
        <View style={{justifyContent:'space-between'}}><View><ProductName>Product Name</ProductName><Price>N0.00</Price></View><Piece>10 pieces</Piece></View>
        <View style={{alignItems:'center', justifyContent:'flex-end'}}><Text style={{color:'green'}}>+</Text><Text style={{color:'white'}}>10</Text><Text style={{color:'red'}}>-</Text></View>
      </View>

      <View style={{width:'80%', marginTop:30}}>
      <View style={styles.price}><PriceText>Shipping fee</PriceText><View style={{alignItems:'flex-end'}}><PriceText>N0.00</PriceText></View></View>
      <View style={styles.price}><PriceText>Service Fee fee</PriceText><View style={{alignItems:'flex-end'}}><PriceText>N0.00</PriceText></View></View>
      <View style={styles.price}><PriceText>VAT</PriceText><View style={{alignItems:'flex-end'}}><PriceText>N0.00(7.5%)</PriceText></View></View>
      <View style={styles.total}><Total>Total</Total><View style={{alignItems:'flex-end'}}><PriceText>N0.00</PriceText></View></View>
      </View>
      <View style={styles.buyNow}><StyledButton><BuyNow>Pay</BuyNow></StyledButton></View>

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
  buyNow:{
    alignItems:'center',
    justifyContent:'center',
    margin:50
  },
  check:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:30
  },
  price:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:30,
    marginBottom:10
  },
  total:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:30,
    marginLeft:30
  }


}) 