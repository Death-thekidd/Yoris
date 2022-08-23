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




export default function Ecommerce6({navigation}){
    const [first, setFirst] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [fourth, setFourth] = React.useState(false);
    const [all, setAll] = React.useState(false);
	return(
	<SafeAreaView style={styles.container}>	
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.vector}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
        </TouchableOpacity>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%', right:45}}><Head>Cart</Head></View>
    </View>

		<View style={{flexDirection:'row', margin:20, alignItems:'center'}}> 
     <RadioButton
        value="all"
        status={ all ? 'checked' : 'unchecked' }
        onPress={() => {
          setAll(!all);
          if (all==true) {
          setFirst(false);
          setSecond(false);
          setThird(false);
          setFourth(false);
          }else{
            setFirst(true);
          setSecond(true);
          setThird(true);
          setFourth(true);
          }
          
        }}
        uncheckedColor={'#fff'}
        color={'#C3AD60'}
      />
      <Text style={{color:'#fff', margin:20}}>Select all</Text>
      </View>

      <View style={styles.check}> 
        <View style={{justifyContent:'center'}}>
        <RadioButton
          value="first"
          status={ first ?  'checked' : 'unchecked' }
          onPress={() => setFirst(!first)}
          uncheckedColor={'#fff'}
          color={'#C3AD60'}
        />
        </View>
        <StyledImage source={require('../assets/cart1.png')} />
        <View style={{justifyContent:'space-between'}}><View><ProductName>Product Name</ProductName><Price>N0.00</Price></View><Piece>1 piece</Piece></View>
        <View style={{alignItems:'center', justifyContent:'flex-end'}}><Text style={{color:'green'}}>+</Text><Text style={{color:'white'}}>1</Text><Text style={{color:'red'}}>-</Text></View>
      </View>

      <View style={styles.check}> 
        <View style={{justifyContent:'center'}}>
        <RadioButton
          value="second"
          status={ second ? 'checked' : 'unchecked' }
          onPress={() => setSecond(!second)}
          uncheckedColor={'#fff'}
          color={'#C3AD60'}
        />
        </View>
        <StyledImage source={require('../assets/cart2.png')} />
        <View style={{justifyContent:'space-between'}}><View><ProductName>Product Name</ProductName><Price>N0.00</Price></View><Piece>10 pieces</Piece></View>
        <View style={{alignItems:'center', justifyContent:'flex-end'}}><Text style={{color:'green'}}>+</Text><Text style={{color:'white'}}>10</Text><Text style={{color:'red'}}>-</Text></View>
      </View>

      <View style={styles.check}> 
        <View style={{justifyContent:'center'}}>
        <RadioButton
          value="third"
          status={ third ?  'checked' : 'unchecked' }
          onPress={() => setThird(!third)}
          uncheckedColor={'#fff'}
          color={'#C3AD60'}
        />
        </View>
        <StyledImage source={require('../assets/cart1.png')} />
        <View style={{justifyContent:'space-between'}}><View><ProductName>Product Name</ProductName><Price>N0.00</Price></View><Piece>1 piece</Piece></View>
        <View style={{alignItems:'center', justifyContent:'flex-end'}}><Text style={{color:'green'}}>+</Text><Text style={{color:'white'}}>1</Text><Text style={{color:'red'}}>-</Text></View>
      </View>

      <View style={styles.check}> 
        <View style={{justifyContent:'center'}}>
        <RadioButton
          value="fourth"
          status={ fourth ? 'checked' : 'unchecked' }
          onPress={() => setFourth(!fourth)}
          uncheckedColor={'#fff'}
          color={'#C3AD60'}
        />
        </View>
        <StyledImage source={require('../assets/cart2.png')} />
        <View style={{justifyContent:'space-between'}}><View><ProductName>Product Name</ProductName><Price>N0.00</Price></View><Piece>10 pieces</Piece></View>
        <View style={{alignItems:'center', justifyContent:'flex-end'}}><Text style={{color:'green'}}>+</Text><Text style={{color:'white'}}>10</Text><Text style={{color:'red'}}>-</Text></View>
      </View>
      <View style={styles.buyNow}><StyledButton onPress={()=>navigation.navigate('Ecommerce7')}><BuyNow>Check out</BuyNow></StyledButton></View>
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
    margin:20
  }


})  