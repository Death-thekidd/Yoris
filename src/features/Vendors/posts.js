import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ww, wp} from '../../../responsive';

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
font-size: ${ww(18)}px;
width: ${ww(261)}px;
color: #FFFFFF;
`;



const Handle= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;

opacity: 0.5;
`;

const UserName= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
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

const GymCarosel= styled.Image`
width: 107px;
height: 107px;
border-radius: 5px;
margin:0 20px 0 0;
`;



export default function Posts(){
	const images=[require('../../../assets/foodImg1.png'),require('../../../assets/foodImg2.png'),require('../../../assets/foodImg3.png'),require('../../../assets/foodImg4.png'),]
	return(
		<ScrollView style={styles.container}>
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
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:20, paddingTop:10}}>
        
       {images.map((item, index) => {
              return (
                
                <View key={index} contentContainertyle={styles.ham}>
                   
                    <GymCarosel source={item}/>
                    
                </View>
              );
            })}
          
        </ScrollView>
						<PostText>So I came across this awesome brand that sells ankara bracelets and pendants, they looked really awesome!!!</PostText>

        					</View>
				</View>
		</View>	
			
		</ScrollView>
		)
};
const styles = StyleSheet.create({
	container:{
		flex:1, 
		backgroundColor:'#000000',
	},
	row:{
		flexDirection:'row',
		margin:ww(20)
	},
	user:{
		flexDirection:'row',
		alignItems:'center',
		marginBottom:5,
		justifyContent:'space-between',
		width:ww(320)

	},
	ham:{
		flexDirection:'row',
		alignItems:'center',

	},
})