import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';



const TopView= styled.ImageBackground`
width: 340px;
height: 180px;
justify-content:space-between;
padding:1%;
border-radius: 16px;
margin:15px 5px 15px 15px;
`;

const FrontBack= styled.Image`
width: 26px;
height: 20px;
resize-mode:contain;
`;

const Xbox= styled.Image`
width: 32px;
height: 32px;
border-radius:50px;

`;

const UserName= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;


color: #FFFFFF;
`;

const ThousandText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 38px;


color: #FFFFFF;
`;


const CenterView= styled.View`
		flex-direction: row;
		align-items: center;
		justify-content:space-between;

`;


const TopIcon= styled.Image`
height: 20px;
width: 21.11111068725586px;
`;


const Pic= styled.Image`
width: 54px;
height: 54px;

`;

const PicView= styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
margin:15px 0 15px 0;
`;




const SavedBenefitiaries= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 14px;

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

const BenefitiariesView= styled.View`

margin:30px 15px 0 15px;
`;


const Fins= styled.Image`
width: 73px;
height: 73px;
margin:0 5px 10px 0;
`;


const FinView= styled.View`
flex-direction:row;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;
margin:0 0 60px 0;
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
margin:0 10px 70px 10px;

height: 73px;
width: 100px;
`;


 


export default function Fintech1({navigation}){
	const topCard = [{source:require('../../../assets/cardBackground1.png'), topText:'N100,000.00', userName:'User Name'}, {source:require('../../../assets/cardBackground2.png'), topText:'N100,000.00', userName:'User Name'}, {source:require('../../../assets/cardBackground1.png'), topText:'N100,000.00', userName:'User Name'}];
	const pics = [require('../../../assets/finpic2.png'), require('../../../assets/finpic3.png'), require('../../../assets/finpic4.png'), require('../../../assets/finpic1.png'), require('../../../assets/finpic5.png')]
	return(
		<SafeAreaView style={styles.container}>
		<ScrollView showsVerticalScrollIndicator={false}>
		<View>
		<ScrollView  horizontal showsHorizontalScrollIndicator={false}>	
			{topCard.map((item, index) => {
            return (
            
              <TopView source={item.source} key={index} >
				<CenterView>
				<ThousandText>{item.topText}</ThousandText><FrontBack source={require('../../../assets/frontback.png')}/>
				</CenterView>
				<CenterView>
					<CenterView style={{width:'50%'}}><Xbox source={require('../../../assets/xbox.png')}/><UserName>{item.userName}</UserName></CenterView>
					<CenterView style={{width:'20%'}}>
						<TopIcon source={require('../../../assets/phoneBook.png')}/>
						<TopIcon source={require('../../../assets/icon2.png')}/>
					</CenterView>
				</CenterView>
			</TopView>
            );
          })}
          

          </ScrollView>
          </View>
          <BenefitiariesView style={styles.padding}>
	          <SavedBenefitiaries>Saved Benefitiaries:</SavedBenefitiaries>
	          <PicView>
	          	{pics.map((item, index) => {
					
	            return (
	            
	             <Pic source={item} key={index}/>
	            );
	          })}
	          </PicView>
	      </BenefitiariesView>   
	       <View style={[styles.buyNow, {backgroundColor:'#000'}, styles.padding]}>
	       	<StyledButton onPress={()=>setIsDisplay(true)} style={styles.button}><BuyNow style={styles.buttonText}>Send/Recieve Money via Barcode</BuyNow></StyledButton>
	       </View>
	        <View style={[styles.buyNow, {backgroundColor:'#000'}]}>
	       	<StyledButton onPress={()=>setIsDisplay(true)} style={styles.button}><BuyNow style={styles.buttonText}>Send/Recieve Money via NFC</BuyNow></StyledButton>
	       </View>
	       <FinView>
	       		<FinInd onPress={()=>navigation.navigate('Food1')}><Fins source={require('../../../assets/finpic6.png')}/><FinText>Food</FinText></FinInd>
	       		<FinInd onPress={()=>navigation.navigate('MobileTopUp')}><Fins source={require('../../../assets/finpic7.png')}/><FinText>Mobile Top-ups</FinText></FinInd>
	       		<FinInd onPress={()=>navigation.navigate('Hotel')}><Fins source={require('../../../assets/finpic8.png')}/><FinText>Hotels</FinText></FinInd>
						<FinInd onPress={()=>navigation.navigate('Gym')}><Fins source={require('../../../assets/finpic9.png')}/><FinText>Gyms & Spa</FinText></FinInd>
	       		<FinInd onPress={()=>navigation.navigate('Procurement1')}><Fins source={require('../../../assets/finpic10.png')}/><FinText>Procurement</FinText></FinInd>
	       		<FinInd><Fins source={require('../../../assets/black.png')}/></FinInd>
	       </FinView>
	       </ScrollView>
		</SafeAreaView>

	)}

	const styles=StyleSheet.create({
		container:{
			flex:1,
			backgroundColor:'#000',

		},
		buyNow:{
    alignItems:'center',
    justifyContent:'center',
    margin:10
  },
  button:{
  	backgroundColor:'#000', 
  	borderWidth:1, 
  	borderColor:'#C3AD60'
  },
  buttonText:{
  	color:'#C3AD60', 
  	margin:5,
  	fontSize:16
  },
  padding:{
  	padding:20,
  	paddingTop:0,
  	paddingBottom:0  
  	  }
	})