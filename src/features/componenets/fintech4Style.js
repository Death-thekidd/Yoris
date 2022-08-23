import { 
    ImageBackground,
    View,
    Text
} from "react-native";
import styled from "styled-components/native"

export const FirstView3 = styled.View`
flex-direction: row;
align-items: center;
justify-content:space-between;
margin:20px;
`;

export const BigText3 = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #C3AD60;
`;

export const SecondView3 = styled.View`
height: 156px;
margin-top: 35px;
align-items: center;
position: relative;
`;


export const Quantity = styled.View`
height: 32px;
width: 72px;
background-color: rgba(78,78,78,0.5);
flex-direction: row;
display: flex;
align-items: center;
justify-content: center
border-radius: 100px;
position: absolute;
top: 20px;
right: 40px;
`;

export const QtyText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.333333px;
color: #FFFFFF;
flex-direction: row
`;

export const ButtonText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.333333px;
color: #000000;
`;

export const ButtonTextt = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.333333px;
color: #C3AD60;
`

export const CaretWhitespace = styled.View`
padding-left: 15px
`