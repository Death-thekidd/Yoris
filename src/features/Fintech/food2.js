import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Icon2  from 'react-native-vector-icons/AntDesign';
import Icon  from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import {VectorHeader} from '../../components/screenComponents/components';
import {products2} from '../ecommerce/list';



const GreyView= styled.View`
width: 48px;
height: 48px;
border-radius:50px;
background: #4E4E4E;
`;


const TopText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;

color: #FFFFFF;
`;

const BottomText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;

color: #FFFFFF;
`;

const GymCarosel= styled.Image`
width: 107px;
height: 107px;
border-radius: 5px;
margin:10px 20px 10px 0;
`;




export default function Food2({navigation}){
  const [isView, setView]= useState(true);
  const handleBrandView=()=>{
    setView(!isView);
  }
  const handleCart=()=>{
    navigation.navigate('Ecommerce6')
  }
    const Vendors = [{name:'Vendor1', distance:1, images:[require('../../../assets/foodImg1.png'),require('../../../assets/foodImg2.png'),require('../../../assets/foodImg3.png'),require('../../../assets/foodImg4.png'),]},
    {name:'Vendor2', distance:2, images:[require('../../../assets/foodImg3.png'),require('../../../assets/foodImg4.png'),require('../../../assets/foodImg5.png'),require('../../../assets/foodImg6.png'),]},
    {name:'Vendor3', distance:3, images:[require('../../../assets/foodImg6.png'),require('../../../assets/foodImg7.png'),require('../../../assets/foodImg8.png'),require('../../../assets/foodImg9.png'),]}]
	return(
	<SafeAreaView style={styles.container}>	
    <ScrollView showsHorizontalScrollIndicator={false}>

        <VectorHeader
        goBack={()=>navigation.goBack()}
        handleBrandView={()=>handleBrandView()}
        handleCart={()=>handleCart()}/>

        {
          isView ?
          <View>
          {Vendors.map((item, index) => {
              return (
               <View key={index}> 
                <TouchableOpacity style={styles.top} onPress={()=>navigation.navigate('Food3')}>
          <GreyView></GreyView>
          <View style={styles.text}>
            <TopText>{item.name}</TopText>
            <BottomText>{item.distance} km away</BottomText>
          </View>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:20, paddingTop:10}}>
        
       {item.images.map((item, index) => {
              return (
                
                <View key={index} contentContainertyle={styles.carosel}>
                   
                    <GymCarosel source={item}/>
                    
                </View>
              );
            })}
          
        </ScrollView>
        </View>
              );
            })}
          </View>  

            :
          
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
                <Text style={styles.brandName}>Brand Name</Text>
                <Text style={styles.km}>0.07km away</Text>
              </TouchableOpacity >  
              </View>
            }
            />

      </View>

        }
        
        

        
    </ScrollView>
    </SafeAreaView>	

)}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
  },
  top:{
    flexDirection:'row',
    alignItems:'center',
    margin:20,
    marginBottom:0
  },
  text:{
  justifyContent:'center',
  alignItems:'flex-start',
  marginLeft:10
  },
  carosel:{
    flexDirection:'row', 
    alignItems:'center', 
  },
  imageVieww:{
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    padding:0
  },
  inputView:{
    alignItems:'center',
    justifyContent:'center',
    height:'10%'
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

})