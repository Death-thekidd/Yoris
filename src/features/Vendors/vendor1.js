import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign" ;
import styled from 'styled-components/native';
import { 
    SafeAreaView, 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Pressable, 
    Modal,
    Image 
} from "react-native";
import {  
    FirstView5,
    BigText4,
} from '../../components/screenComponents/fintech5Style';
import {Btn1, Btn2} from '../../components/screenComponents/components'
import {ww, wp} from '../../../responsive';


const Brand= styled.Image`
width: ${ww(180)}px;
height: 100%;
`;

const BrandText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: ${ww(32)}px;
color: #FFFFFF;
`;

const BrandText2= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(16)}px;
color: #FFFFFF;
`;



const BrandText3= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(10)}px;
color: #4E4E4E;
width: ${ww(152)}px;
`;


const BrandButton= styled.TouchableOpacity`
width: ${ww(145)}px;
height: ${ww(48)}px;
background: #C3AD60;
align-items:center;
justify-content:center;
`;

const BrandButtonTxt= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(24)}px;
text-align: center;
letter-spacing: -0.333333px;
color: #000000;
`;



const BrandText1= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(16)}px;
color: #4E4E4E;
padding-bottom:${ww(3)}px;
`;


const Line= styled.View`
width:${wp(340)}%;
margin: ${ww(50)}px ${ww(20)}px ${ww(50)}px ${ww(20)}px;
height: 0px;
border: 1px solid rgba(250, 246, 243, 0.5);
align-self:center;
`;


const Stat= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(16)}px;
text-align: center;
letter-spacing: -0.408px;

`;


const StatPic= styled.Image`
width: ${wp(360)}%;
height: ${ww(261)}px;
border-radius: 10px;
`;

const Time= styled.View`
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        width: ${wp(280)}%;

`;



const DemoText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(24)}px;
letter-spacing: -0.408px;

color: #FFFFFF;

`;


const DemoText2= styled.Text`
width: ${ww(147)}px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(12)}px;
letter-spacing: -0.408px;

color: #4E4E4E;

`;


const Amount= styled.Text`
font-family: 'Roboto';
font-weight: 900;
font-size: ${ww(48)}px;
color: #FFFFFF;
margin:0;
padding:0;
`;


const Unit= styled.Text`
font-family: 'Roboto';
font-size: ${ww(12)}px;
font-weight: 300;
letter-spacing: -0.40799999237060547px;
text-align: left;
color: #FFFFFF;
`;




const UnitBtm= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(12)}px;
letter-spacing: -0.408px;
color: #C3AD60;
`;





export default function Vendor1({navigation}){
    const [activeStat, setActiveStat] = useState(1);
    const [activeTime, setActiveTime] = useState(1);
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <FirstView5>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon size={ww(30)} color="#C3AD60" name="back"/> 
                    </TouchableOpacity>
                   <BigText4>Product Name</BigText4>
                   <View></View>
                </FirstView5>

                <View style={styles.top}>
                    <Brand source={require('../../../assets/bigBrand.png')}/>
                    <View style={styles.brandTxt}>
                        <View>
                            <BrandText1>Price:</BrandText1>
                            <BrandText>N0.00k</BrandText>
                        </View>
                        <View>
                            <BrandText2>Product Description</BrandText2>
                            <BrandText3>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </BrandText3>
                        </View>
                        <BrandButton onPress={()=>navigation.navigate('Vendor2')}><BrandButtonTxt>Category</BrandButtonTxt></BrandButton>
                    </View>
                </View>

                <Line></Line>

                <View style={styles.stats}>
                    <View style={styles.statText}>
                        <TouchableOpacity onPress={()=>setActiveStat(1)}>
                            <Stat style={activeStat==1 ? {color: '#504219'} : {color: '#C3AD60'}}>Likes</Stat>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setActiveStat(2)}>
                            <Stat style={activeStat==2 ? {color: '#504219'} : {color: '#C3AD60'}}>Clicks</Stat>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setActiveStat(3)}>
                            <Stat style={activeStat==3 ? {color: '#504219'} : {color: '#C3AD60'}}>Visitations</Stat>
                        </TouchableOpacity>
                    </View>
                    <StatPic source={require('../../../assets/stat.png')}/>
                    <Time>
                        <TouchableOpacity onPress={()=>setActiveTime(1)}>
                            <Stat style={activeTime==1 ? {color: '#FFF', fontWeight:'300'} : {color: '#4e4e4e', fontWeight:'300'}}>Day</Stat>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setActiveTime(2)}>
                            <Stat style={activeTime==2 ? {color: '#FFF', fontWeight:'300'} : {color: '#4e4e4e', fontWeight:'300'}}>Month</Stat>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setActiveTime(3)}>
                            <Stat style={activeTime==3 ? {color: '#FFF', fontWeight:'300'} : {color: '#4e4e4e', fontWeight:'300'}}>Year</Stat>
                        </TouchableOpacity>
                    </Time>
                </View>

                <View style={{margin:ww(20)}}>
                    <DemoText>Demographics</DemoText>
                    <DemoText2>Product purchases according to age and location</DemoText2>
                    <View style={styles.stats}>
                        <StatPic source={require('../../../assets/stat2.png')}/>
                    </View>    
                </View>
                

                <DemoText style={{margin:ww(20)}}>Number Of Purchases</DemoText>
                <View style={styles.amts}>
                    <View>
                        <View style={styles.amt}><Amount>8</Amount><Unit>Unit</Unit></View>
                        <UnitBtm>Today</UnitBtm>
                    </View>
                    <View>
                        <View style={styles.amt}><Amount>18</Amount><Unit>Unit</Unit></View>
                        <UnitBtm>Today</UnitBtm>
                    </View>
                    <View>
                        <View style={styles.amt}><Amount>150</Amount><Unit>Unit</Unit></View>
                        <UnitBtm>Today</UnitBtm>
                    </View>
                </View>

                <View style={styles.buttons}>
                    <Btn1 Bt={'Edit'} style={styles.button}/>
                    <Btn2 Bt={'Delete'} style={styles.button}/>
                </View>
            </ScrollView>
        </SafeAreaView>

)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingTop:ww(20),
        flex: 1,
    },
    top:{
        flexDirection:'row',
        justifyContent:'center'
    },
    brandTxt:{
        justifyContent:'space-between'
    },
    stats:{
        alignItems:'center'
    },
    statText:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'50%'
    },
    amt:{
        flexDirection:'row',
        alignItems:'flex-end'
    },
    amts:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:ww(20)
    },
    buttons:{
        alignItems:'center'
    },
    button:{
        
    }
})