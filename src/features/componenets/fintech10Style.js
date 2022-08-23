import { 
    ImageBackground,
    View,
    Text
} from "react-native";
import styled from "styled-components/native";

export const LastView = styled.View`
    width: 100%;
    height: 12%;
    background-color: #4E4E4E;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`

export const PriceColumn = styled.View`

`;

export const Bold = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    fontWeight: 900;
    letterSpacing: -0.333333px;
    color: #FFFFFF;
`

export const Total = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: -0.333333px;
    color: #FFFFFF;
`; 

export const Pricing = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: -0.333333px;
    color: #FFFFFF;
`;

export const Paytxt = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: -0.333333px;
    color: #000000;

`;

export const Second = styled.View`
    flex-direction: row;
    margin-top: 33px;
    align-items: center;
`;

export const SelectTxt = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
    padding-left: 64px;
    padding-right: 200px
`;

export const Radiobtn = styled.View`
    width: 16px;
    height: 16px;
    background: #6C63FF;
    border: 3px solid #fff;
    border-radius: 100px;
    
`;

export const Radiobtn2 = styled.View`
    width: 16px;
    height: 16px;
    border: 3px solid #fff;
    border-radius: 100px;
`;

export const Quantity1 = styled.View`
    background-color: rgba(78,78,78,0.5);
    flex-direction: row;
    align-items: center;
    align-self:flex-start;
    justify-content:center;
    border-radius: 15px;
    width:72px;
    height:32px;
    margin:15px 0 0 15px;
`;

export const Third = styled.View`
    margin-top: 33px;
    align-items: center;
`
