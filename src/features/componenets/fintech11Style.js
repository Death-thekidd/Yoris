import { 
    ImageBackground,
    View,
    Text
} from "react-native";
import styled from "styled-components/native";

export const First = styled.View`
    flex-direction: row;
align-items: center;
justify-content:space-between;
padding:20px;
`;

export const BackupTxt = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: -0.333333px;
    color: #C3AD60;
`;

export const Second = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 58px;
`;
export const DateView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 4px
`;

export const Date = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: -0.333333px;
    color: #FFFFFF;
`;

export const Time = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: -0.333333px;
    color: #FFFFFF;
`;

export const Select = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    color: #000000;
`