import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image} from 'react-native';
import {status} from './list';

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
		lineHeight:14
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
	vector:{
		flexDirection:'row',
		justifyContent:'space-between',
		height:'7%',
		alignItems:'center'
	},
	vectorRight:{
		flexDirection:'row',
		
	}


})