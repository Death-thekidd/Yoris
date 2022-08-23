import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, Modal, Pressable} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon2  from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import Input from "../../components/input";
import { FontAwesome } from "../../components/Icons";
import Header from "../../components/Header";
import { Spacer } from "../../components/spacer/spacer.component";
import {
  ContinueButton,
  ContinueView,
  ContinuewButtonText,
} from "../logictics/components/logictics.styles";
import {
  CardDateContainer,
  CardDateDevider,
  CardInfoContainer,
  PaymentContainer,
  Section,
  SubTitle,
  Title,
} from "./style";









const methods = [
  {
    imageSource: require("../../../assets/CardOption.png"),
    text: "Credit/Debit Card",
    value: "card",
  },
  {
    imageSource: require("../../../assets/Qrcode.png"),
    text: "Qr Code",
    value: "code",
  },
  {
    imageSource: require("../../../assets/Paypal.png"),
    value: "paypal",
  },
];


const saved_cards = [
  {
    source: require("../../../assets/mastercardLogo1.png"),
  },
  {
    source: require("../../../assets/visaLogo1.png"),
  },
  {
    source: require("../../../assets/visaLogo1.png"),
  },
];

const StyledCard1= styled.Image`
width: 85.33px;
height: 48px;
border: 1px solid #000000;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const CardsView= styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const CardView= styled.View`
margin: 20px 0 20px 0;
`;

const Head= styled.Text`

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
margin: 20px 0 20px 0;
color: #C3AD60;

border: 1px solid #000000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Head2= styled.Text`

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
margin: 30px 0 10px 0;
color: #C3AD60;

border: 1px solid #000000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledInput= styled.TextInput`
height: 48px;
width:100%;
background: #4E4E4E;
border-radius: 5px;
margin: 20px 0 20px 0;
`;



const StyledText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin: 20px 0 20px 0;
`; 

const DateBtn= styled.TouchableOpacity`
width: 96px;
height: 48px;
align-items:center;
justify-content:center;
background-color: #C3AD60;
border-radius: 10px;
margin-right:5px;
`;

const StyledDateView= styled.TextInput`
width: 96px;
height: 48px;
background: #4E4E4E;
border-radius: 5px;
margin-Right:5px;
`;

const StyledButton= styled.TouchableOpacity`
  
width: 320px;
height: 48px;
align-items:center;
justify-content:center;
background: #C3AD60;
border-radius: 30px;


`;

const BuyNow= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
text-align: center;
letter-spacing: -0.333333px;

color: #000000;

`;







export default function Ecommerce8({navigation}){
	const [isDisplay, setIsDisplay]= useState(false);
	const [cardNumber, setCardNumber] = useState("");
  const [cardCvvNumber, setCardCvvNumber] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [value, setValue] = useState();
	return(
		<SafeAreaView style={styles.container}>
			
			
			<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
			<Modal visible={isDisplay} transparent={true} animationType='fade' style={styles.container}>
      <View
      style={{
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 50,
        backgroundColor: "#000",
        justifyContent:'center'
      }}
    >
				<Header
        iconLeft={require("../../../assets/cancelGold.png")}
        headerTitle={"Choose Payment Method"}
        onLeftIconPress={() => setIsDisplay(false)}
      />
      <PaymentContainer>

      {/* SavedCards */}
      <Section>
        <Text>Saved Cards</Text>
        <FlatList
          data={saved_cards}
          alwaysBounceHorizontal
          renderItem={({ item, i }) => (
            <Image style={{ marginHorizontal: 10 }} source={item.source} />
          )}
          horizontal
        />
      </Section>

      {/* New card details */}
      <Section>
        <Title>New Card Details</Title>
        <Input
          placeholder={"Card Number"}
          value={cardNumber}
          setValue={setCardNumber}
          style={styles.input}
          keyboardType={"number-pad"}
          placeholderTextColor={"#fff"}
        />
        <SubTitle>Expiration Date</SubTitle>

        <CardInfoContainer>
          {/* Month and Year */}
          <CardDateContainer>
            <Input
              placeholder={"Month"}
              value={cardMonth}
              setValue={setCardMonth}
              style={[styles.input, styles.cardDate]}
              keyboardType={"number-pad"}
              placeholderTextColor={"#fff"}
              maxLength={2}
            />
            <CardDateDevider>/</CardDateDevider>
            <Input
              placeholder={"Year"}
              value={cardYear}
              setValue={setCardYear}
              style={[styles.input, styles.cardDate]}
              keyboardType={"number-pad"}
              placeholderTextColor={"#fff"}
              maxLength={4}
            />
          </CardDateContainer>
          {/* CVV */}
          <Input
            placeholder={"cvv"}
            value={cardCvvNumber}
            setValue={setCardCvvNumber}
            style={[styles.input, styles.cvv]}
            keyboardType={"number-pad"}
            placeholderTextColor={"#fff"}
            maxLength={4}
          />
        </CardInfoContainer>
      </Section>

      <Spacer size="xxl">
           <View style={styles.buyNow}><StyledButton onPress={()=>setIsDisplay(true)}><BuyNow>Continue</BuyNow></StyledButton></View>
      </Spacer>
    </PaymentContainer>
    </View>
			</Modal>
      <View style={styles.vector}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Icon2 name="back" style={{marginLeft:20}} size={25} color="#C3AD60" />
            </TouchableOpacity>
            <View style={{alignItems:'center', justifyContent:'center', width:'100%', right:45}}><Head>Checkout</Head></View>
         </View>
		<View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#000",
        justifyContent:'center'
      }}
    >
      {/* Header */}

      

      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        {/* Options List */}
        {methods.map(({ imageSource, text, value }, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              marginVertical: 20,
              borderRadius: 5,
              alignItems: "center",
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                // justifyContent: "space-between",
              }}
            >
              <Image style={{ resizeMode: "contain" }} source={imageSource} />
              {text && (
                <Text style={{ fontSize: 18.5, marginLeft: 25 }}>{text}</Text>
              )}
            </View>
            <RadioButton.Item value={value} />
          </View>
        ))}
      </RadioButton.Group>
      {/* Continue Button */}

      <Spacer size="xxl">
        <View style={[styles.buyNow, {marginTop:40}]}><StyledButton onPress={()=>setIsDisplay(true)}><BuyNow>Continue</BuyNow></StyledButton></View>
      </Spacer>
    </View>
			</ScrollView>	
		</SafeAreaView>
		)
}

const styles=StyleSheet.create({
	container:{
		backgroundColor:'#000',
		flex:1,
	},
	scrollView:{
		backgroundColor:'#000',
		flex:1,
		margin:20,
	},
	modalView:{
		flex:1,
		backgroundColor:'#000',
		margin:20,
	},
	modalView2:{
		justifyContent:'center'
	},
	vector:{
    flexDirection:'row',
    alignItems:'center',
  },
	data:{
		alignItems:'center'
	},
	data2:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	},
	buyNow:{
    alignItems:'center',
    justifyContent:'center',
    margin:60
  },
  
  input: {
    backgroundColor: "#4E4E4E",
    padding: 15,
    borderRadius: 7,
    color: "#fff",
  },
  cvv: {
    width: "30%",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceEvenly: {
    justifyContent: "space-between",
  },
  subTitle: {
    color: "#fff",
    marginTop: 30,
    fontSize: 15,
  },
  cardDate: {
    width: "40%",
  },

})