import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import Vendor1 from './ecommerce3';
import Vendor2 from './service';

export default function Ecommerce({navigation, route}){
	return(
		<View style={styles.container}>
	{
		route.params.store ?
		<Vendor1 routeImage={route.params.image} navigation={navigation}/>
		:
		<Vendor2 routeImage={route.params.image} navigation={navigation}/>
	}
	</View>
		)
	
}



const styles = StyleSheet.create({
	container:{
		flex:1, 
		backgroundColor:'#000000',
	},
})