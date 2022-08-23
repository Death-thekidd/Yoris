import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {status} from '../ecommerce/list';
import {VectorHeader} from '../../components/screenComponents/components';
import {products2} from '../ecommerce/list';

export default function Food4({navigation}){
	const handleCart = ()=>{navigation.navigate('Ecommerce6')};
		return(
		<SafeAreaView style={styles.container}>
		<VectorHeader
			goBack={()=>navigation.goBack()}
			handleBrandView={()=>handleBrandView()}
			handleCart={()=>handleCart()}/>
		<View style={{alignItems:'center', justifyContent:'center', flex:1}}>
				<FlatList
						data={products2}
						numColumns={3}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({item, index})=>
							<View style={styles.imageVieww}>
							<TouchableOpacity onPress={()=>navigation.navigate('Ecommerce5', {image:item.image})} style={styles.imageView}>
								<Image source={item.image} style={styles.image} key={index}/>
								<Text style={styles.brandName}>Product Name</Text>
								<Text style={styles.km}>N0.00</Text>
							</TouchableOpacity >	
							</View>
						}
						/>

			</View>
		</SafeAreaView>	
		)

}
const styles=StyleSheet.create({
	container:{
		backgroundColor:'#000',
		flex:1
	},
	brandName:{
		fontWeight:'400', 
		fontFamily:'Roboto', 
		color:'white', 
		fontSize:10,
		textAlign:'center'
	},
	km:{
		color:'#4E4E4E', 
		fontFamily:'Roboto',
		fontSize:10,
		textAlign:'center'

	},
	image:{
			height:60,
			width:60,
			margin:20,
			borderRadius:17
		},
	inputView:{
		alignItems:'center',
		justifyContent:'center',
		height:'10%'
	},	
	imageVieww:{
		alignItems:'center',
		justifyContent:'center',
		margin:10,
		padding:0
	},
})