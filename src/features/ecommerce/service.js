import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {status} from './list';
import {productsPage2} from './list';
import {products2Page2} from './list';
import {VectorHeader5} from '../../components/screenComponents/components';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from 'styled-components/native';
import Posts from './posts';
import {Products, Reviews, About, Services} from './brandz';

import {ww, wp} from '../../../responsive';



const Tabs = createMaterialTopTabNavigator();


const StyledText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(18)}px;
text-align: center;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;

const StyledText1= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: ${ww(36)}px;
text-align: center;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;


const NumFollowers= styled.Text`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: ${ww(24)}px;
color: #C3AD60;
`;


const Plus= styled.Image`
width: ${ww(39)}px;
height: ${ww(39)}px;
`;



const Plus2= styled.Image`
width: ${ww(39)}px;
height: ${ww(39)}px;
transform: rotate(45deg);
`;


const Pluss= styled.TouchableOpacity`
width: 48px;
height: 48px;
background-color: #C3AD60;
align-items:center;
justify-content:center;
border-radius:50px;
margin: 0 ${ww(20)}px ${ww(20)}px 0; 
`;


const Plus1= styled.Image`
width: ${ww(19)}px;
height: ${ww(19)}px;
`;











export default function Vendor2({navigation, routeImage, route}){
	const [clicked, setClicked] = useState(false);
	const [brandView, setBrandView]= useState(true);
	const handleBrandView = ()=>{
		setBrandView(!brandView)

	}
	const handleCart = ()=>{navigation.navigate('Ecommerce6')};
	
	return(
		<SafeAreaView style= {styles.container}>
			<VectorHeader5
			goBack={()=>navigation.goBack()}
			handleBrandView={()=>handleBrandView()}
			handleCart={()=>handleCart()}/>
			<View style={styles.header}>
				<View>
					<Image source={require('../assets/header.png')} style={styles.imageAd}/>
					<Image source={routeImage} style={styles.profile}/>
				</View>
				

			</View>
			<View style={{alignItems:'center'}}>
				<StyledText1>Brand Name</StyledText1>
				<View style={{alignItems:'center', justifyContent:'center', width:'90%' }}>
				<StyledText >Brand Description: Lorem ipsum dolor, sit ahmet... This is pretty much the brand’s bio.</StyledText>
				</View>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.button} ><Text style={{fontSize:15}}>Follow</Text><Icon2 name="plus" style={{marginLeft:20}} size={25} /></TouchableOpacity>
				<TouchableOpacity style={styles.button}><Text style={{fontSize:15}}>Share</Text><Icon2 name="sharealt" style={{marginLeft:15}} size={25} /></TouchableOpacity>
			</View>

			<View style={styles.follower}>
				<NumFollowers>1000</NumFollowers>
				<StyledText>Followers</StyledText>
			</View>

			 <Tabs.Navigator
            headerMode="none"
            screenOptions={{
                tabBarShowIcon: true,
                tabBarActiveTintColor: '#fff',
        	  tabBarInactiveTintColor: '#ddd',
                tabBarIndicatorStyle: {
                    backgroundColor: '#C3AD60',
                },

                tabBarStyle: {
                    borderTopWidth: 2,
                    elevation: 10,
                    backgroundColor: '#000',
                    borderRadius: 1

                }
            }}>
           
            <Tabs.Screen
                name="Services"
                component={Services}
                options={{
      headerShown: false,}}
            />
            	<Tabs.Screen
                name="About"
                component={About}
                options={{
      headerShown: false,}}
            />
            
            	<Tabs.Screen
                name="Reviews"
                component={Reviews}
                options={{
      headerShown: false,}}
            />
             
            
            </Tabs.Navigator>
            
            	<View style={{alignItems:'flex-end', justifyContent:'flex-end'}}>
            	{
            	clicked ?
            	<View style={styles.plus}>
            		<Plus1 source={require('../../../assets/plus1.png')}/>
            		<Plus1 source={require('../../../assets/plus2.png')}/>
            		<Pluss onPress={()=>setClicked(false)}><Plus2 source={require('../../../assets/plusBar.png')}/></Pluss>
            	</View>
            	:
            	<View style={styles.plus2}>
            		<Pluss onPress={()=>setClicked(true)}><Plus source={require('../../../assets/plusBar.png')}/></Pluss>
            	</View>
            }
            </View>
            
            
            
		</SafeAreaView>


		)
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#000000',
	},
	industry:{
		height:'30%', 
		justifyContent:'center'
	},
	industryText:{
		color:'#C3AD60', 
		fontFamily:'Roboto', 
		fontWeight:'400', 
		fontSize:15, 
		lineHeight:21.09, 
		marginLeft:20
	},
	seeAllView:{
		alignItems:'flex-end', 
		marginRight:20
	},
	seeAll:{
		color:'white',  
		fontSize:12, 
		fontFamily:'Roboto', 
		fontWeight:'700', 
		lineHeight:14,
		marginLeft:20
	},
	brandName:{
		fontSize:17, 
		fontWeight:'400', 
		fontFamily:'Roboto', 
		color:'#fff', 
		fontSize:10,
		textAlign:'center',
	},
	km:{
		color:'#4E4E4E', 
		fontFamily:'Roboto',
		fontSize:10,
		textAlign:'center',

	},
	input:{
		backgroundColor:'#444444',
		borderColor:'#777777',
		borderRadius:8,
		width:'90%',
		height:'50%'
		
	},	
	inputView:{
		alignItems:'center',
		justifyContent:'center',
		height:'10%'
	},
	image:{
		height:60,
		width:60,
		margin:20,
		borderRadius:17
	},
	image2:{
		borderRadius:50,
		width:55,
		height:55,
		marginLeft:25
	},

	imageView:{
		alignItems:'center',
		justifyContent:'center'
	},
	imageVieww:{
		alignItems:'center',
		justifyContent:'center',
		margin:10,
		padding:0
	},
	imageVieww2:{
		flexDirection:'row',
		margin:0,
		padding:0
	},
	header:{
		marginBottom:50
	},
	imageAd:{
		height:90,
		width:'100%',
		position:'absolute'
	},
	profile:{
		height:90,
		width:90,
		zIndex:1,
		left:'39%',
		top:'50%',
		padding:0,
		margin:0,
		borderRadius:50,
	},
	products:{
		flex:1, 
		backgroundColor:'#000000', 
		justifyContent:'center',
		alignItems:'center'
	},
	button:{
		borderRadius:25,
		backgroundColor:'#C3AD60',
		width:128,
		height:48,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row'
	},
	buttons:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginTop:30,
		marginBottom:30
	},
	follower:{
		alignItems:'center',
		marginBottom:ww(15)
	},
	plus:{
		flexDirection:'row',
		width:'40%',
		justifyContent:'space-between',
		alignItems:'center',
		position:'absolute',
		backgroundColor:'#00000066',
	},
	plus2:{
		position:'absolute',
		alignItems:'flex-end',
		width:ww(428),
		borderRadius:30
	},



})