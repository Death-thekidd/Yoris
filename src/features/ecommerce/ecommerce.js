import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView} from 'react-native';
import {status} from './list';
import {products} from './list';

export default function TestDrive(){
	return(
		<SafeAreaView style= {styles.container}>
			<View style={styles.vector}>
				<Icon name="shopping-cart" style={{marginLeft:20}} size={25} color="#C3AD60" />
				<View style={styles.vectorRight}>
					<Icon name="search" style={{marginRight:25}} size={25} color="#C3AD60" />
					<Icon name="align-right" style={{marginRight:20}} size={25} color="#C3AD60" />
				</View>
			</View>
			<View style={styles.industry}>
				<Text style={styles.industryText}>Industry 1</Text>
				<View>
					<View style={styles.seeAllView}>
						<Text style={styles.seeAll}>See all</Text>
					</View>
						<FlatList
						data={status}
						horizontal={true}
						keyExtractor={(item, index)=>index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({item, index})=>
							<View style={styles.imageView}>
							
								<Image source={item} style={styles.image} key={index}/>
								<Text style={styles.brandName}>Brand Name</Text>
								<Text style={styles.km}>70Km away</Text>
							</View>
						}
						/>
				</View>
			</View>
			<View style={styles.ad}>
				<Image source={require('../assets/ad.png')} style={styles.imageAd}/>
			</View>
			<View style={{alignItems:'center', justifyContent:'center', flex:1}}>
				<FlatList
						data={products}
						numColumns={3}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({item, index})=>
							<View style={styles.imageVieww}>
							
								<Image source={item.image} style={styles.image} key={index}/>
								<Text style={styles.brandName}>Product Name</Text>
								<Text style={styles.km}>N0.00</Text>
							</View>
						}
						/>

			</View>
			<Text style={styles.seeAll}>See all</Text>	
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
		color:'white', 
		fontSize:15
	},
	km:{
		color:'#4E4E4E', 
		fontFamily:'Roboto'
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
		height:80,
		width:80,
		margin:20,
		borderRadius:5
	},

	imageView:{
		alignItems:'center',
		justifyContent:'center'
	},
	imageVieww:{
		alignItems:'center',
		justifyContent:'center',
		margin:0,
		padding:0
	},
	vector:{
		flexDirection:'row',
		justifyContent:'space-between',
		height:'10%',
		alignItems:'center'
	},
	vectorRight:{
		flexDirection:'row',
		
	},
	ad:{
		marginTop:40,
		marginBottom:40  
	},
	imageAd:{
		height:140,
		width:'100%'
	}


})