import { 
    ImageBackground,
    View,
    Text
} from "react-native";
import styled from "styled-components/native";
import { TextInput } from 'react-native-paper';

export const FirstView = styled.View`
flex-direction: row;
align-items: center;
justify-content:space-between;
padding:20px;
`;

export const BigText = styled.Text`
color: #C3AD60;
font-size: 24px;
font-family:"Roboto";
font-style: normal;
font-weight: 300;
line-height: 28px;

`;

export const SecondView = styled.View`
display: flex;
margin-top: 189px;
align-items: center;
justify-content: center;
`;

export const BtnText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: -0.333333px;
color: #000000;
`;

export const MiddleText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: -0.333333px;
color: #FFFFFF;
`;

