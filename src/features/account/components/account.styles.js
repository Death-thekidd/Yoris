import styled from 'styled-components/native';
import { TextInput } from "react-native";
import { colors } from '../../../infrastructure/theme/colors';
import { Button } from 'react-native-paper';

export const RegisterContainer = styled.View`
   display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 40px;
  flex: 1;
`;

export const RegisterHeader = styled.View`
   right: 100px;
`;

export const RegisterSection = styled.View`
   display: flex;
`;

export const ImageLogo = styled.Image`
   left: 90px;
`;

export const RegisterInput = styled(TextInput)`
  width: 300px;
  height: 48px;
  top: 20px;
  background: #4E4E4E;
  margin-bottom: 20px;
  border-radius: 30px;
  padding: 10px;
`;

export const RegisterPrimary = styled.Text`
    color: #fff;
    margin-top: 30px;
    font-size: 10px;
    left: 10px;
    text-align: left;
`;

export const RegisterDate = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const RegisterDrop = styled.View`
  position: relative;
  margin-bottom: 10px;
`;

export const RegisterLine = styled(TextInput)`
   width: 300px;
   position: relative;
   height: 1px;
   background: #C3AD60;
   top: 20px;
   margin-bottom: 20px;
`;

export const RegisterBtn = styled(Button).attrs({ color: colors.ui.primary })`
  width: 300px;
  height: 48px;
  background: #C3AD60;
  border-radius: 40px;
  font-size: 15px;
  padding: 2px;
  margin-top: 50px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const RegisterSecondary = styled.Text`
   color: #C3AD60;
   font-size: 15px;
   top: 20px;
   text-align: center;
   font-weight: 200;
`;

export const RegisterLink = styled(Button).attrs({ color: colors.brand.primary })`
 width: 300px;
 height: 48px;
 top: 30px;
 border: 1px solid #C3AD60;
 color: #C3AD60;
 padding: 2px;
 font-weight: 400;
 font-size: 10px;
 margin-bottom: 30px;
 border-radius: 30px;
`;

export const RegisterBackIcon = styled.Image`
   display: flex;
`;

export const RegisterPassword = styled.Text`
  color: #C3AD60;
  text-align: center;
  font-size: 13px;
  margin-top: 60px;
  left: 50px;
`;

export const RegisterUser = styled(Button).attrs({ color: colors.ui.primary })`
  width: 300px;
  height: 48px;
  background: #C3AD60;
  border-radius: 40px;
  font-size: 15px;
  padding: 2px;
  margin-top: 20px;
  font-weight: 300;
`;

export const RegisterTertiary = styled.Text`
   color: #fff;
   font-size: 20px;
   font-weight: bold;
   text-align: center;
   margin-top: 20px;
`;

export const RegisterParagraph = styled.Text`
   color: #fff;
   font-size: 10px;
   margin-top: 20px;
   font-weight: 200;
   text-align: center;
`;

export const RegisterRow = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;