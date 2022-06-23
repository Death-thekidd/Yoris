import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';


const StyledCart1= styled.Image`
		width: 20px;
		height: 20px;
		margin-right:20px;
`;

const StyledHamburger1= styled.Image`
		width: 20px;
		height: 20px;
		margin-right:20px;
`;

const StyledFilter1= styled.Image`
		width: 20px;
		height: 20px;
		margin-right:20px;
`;

export const VectorHeader = ({goBack, handleBrandView, handleCart})=>{
	return(
		
<View style={styles.vector}>
				<TouchableOpacity onPress={()=>goBack()}>
					<Icon2 name="back" style={{marginLeft:20}} size={20} color="#C3AD60" />
				</TouchableOpacity>	
				<View style={styles.vectorRight}>
					<Icon name="search" style={{marginRight:25}} size={20} color="#C3AD60" />
					<TouchableOpacity onPress={()=>handleCart()}>
					<StyledCart1 source={require('../../features/assets/cart.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>handleBrandView()}>
						<StyledFilter1 source={require('../../features/assets/filter.png')}/>
					</TouchableOpacity>
				</View>
			</View>
		)
}
const styles = StyleSheet.create({
	vector:{
		flexDirection:'row',
		justifyContent:'space-between',
		height:80,
		alignItems:'center'
	},
	vectorRight:{
		flexDirection:'row',
		
	}


})	


export const VectorHeader2 = ({goBack, handleBrandView, handleCart})=>{
	return(
		
<View style={styless.vector}>
				<TouchableOpacity onPress={()=>goBack()}>
					<Icon2 name="back" style={{marginLeft:20}} size={20} color="#C3AD60" />
				</TouchableOpacity>	
				<View style={styless.vectorRight}>
					<Icon name="search" style={{marginRight:25}} size={20} color="#C3AD60" />
					<TouchableOpacity onPress={()=>handleCart()}>
					<StyledCart1 source={require('../../features/assets/cart.png')}/>
					</TouchableOpacity>	
				</View>
			</View>
		)
}
const styless = StyleSheet.create({
	vector:{
		flexDirection:'row',
		justifyContent:'space-between',
		height:80,
		alignItems:'center'
	},
	vectorRight:{
		flexDirection:'row',
		
	}


})	




export const VectorHeader3 = ({goBack, handleBrandView, handleCart})=>{
	return(
		
<View style={stylesss.vector}>
				<TouchableOpacity onPress={()=>goBack()}>
					<Icon2 name="back" style={{marginLeft:20}} size={20} color="#C3AD60" />
				</TouchableOpacity>	
				<View style={stylesss.vectorRight}>
					<Icon name="search" style={{marginRight:25}} size={20} color="#C3AD60" />
					<TouchableOpacity onPress={()=>handleCart()}>
					<StyledCart1 source={require('../../features/assets/cart.png')}/>
					</TouchableOpacity>	
				</View>
			</View>
		)
}
const stylesss = StyleSheet.create({
	vector:{
		flexDirection:'row',
		justifyContent:'space-between',
		height:80,
		alignItems:'center'
	},
	vectorRight:{
		flexDirection:'row',
		
	}


})

