import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export const VectorHeader = ({goBack, handleBrandView})=>{
	return(
		
<View style={styles.vector}>
				<TouchableOpacity onPress={()=>goBack()}>
					<Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
				</TouchableOpacity>	
				<View style={styles.vectorRight}>
					<Icon name="search" style={{marginRight:25}} size={25} color="#C3AD60" />
					<Icon name="shopping-cart" style={{marginRight:25}} size={25} color="#C3AD60" />
					<TouchableOpacity onPress={()=>handleBrandView()}>
						<Icon3 name="filter-list" style={{marginRight:20}} size={25} color="#C3AD60" />
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


export const VectorHeader2 = ({goBack, handleBrandView})=>{
	return(
		
<View style={styless.vector}>
				<TouchableOpacity onPress={()=>goBack()}>
					<Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
				</TouchableOpacity>	
				<View style={styless.vectorRight}>
					<Icon name="search" style={{marginRight:25}} size={25} color="#C3AD60" />
					<Icon name="shopping-cart" style={{marginRight:25}} size={25} color="#C3AD60" />
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
