import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';


const StyledImage= styled.Image`
width: 42px;
height: 42px;
border-radius:50px;
margin: 0 20px 0 15px;
`;

const PostText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
padding-right:20%;

color: #FFFFFF;
`;

const Handle= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;

opacity: 0.5;
`;

const UserName= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
/* identical to box height */


color: #FFFFFF;
`;

const Ham= styled.Image`
 width: 3.57px;
height: 15px;
`;

const Bread= styled.Image`
width: 107px;
height: 107px;
`;





export default function Posts(){
	return(
		<View style={styles.container}>
		<View>
			<View style={styles.row}>
				<StyledImage source={require('../assets/ad.png')}/>
				<View>
					<View style={styles.user}>
						<View style={styles.ham}>
							<UserName>User Name</UserName>
							<Handle>@handle</Handle>
						</View>
						<Ham source={require('../assets/ham.png')}/>
					</View>
					<View>
						<PostText>So I came across this awesome brand that sells ankara bracelets and pendants, they looked really awesome!!!</PostText>
					</View>
				</View>

			</View>
		</View>	
			
		</View>
		)
};
const styles = StyleSheet.create({
	container:{
		flex:1, 
		backgroundColor:'#000000'
	},
	row:{
		flexDirection:'row',
	},
	user:{
		flexDirection:'row',
		alignItems:'center',
		marginBottom:5,
		justifyContent:'space-between'
	},
	ham:{
		flexDirection:'row',
		alignItems:'center',
	},
})