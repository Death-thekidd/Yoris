import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import style from "./AddressBox/style";
import { Button } from "react-native";

export const Input = styled.TextInput`
  background: #4e4e4e;
`;

export const LocationContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  flex: 1;
`;

export const LocationWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const LocationRow = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

export const ImageBackground = styled.Image`
  width: 15px;
  position: relative;
  height: 15px;
`;

export const LocationPrimary = styled.Text`
  color: #c3ad60;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  font-family: "Roboto";
`;

export const ImageCancel = styled.Image`
  width: 15px;
  position: relative;
  height: 15px;
`;

export const ImageLocation = styled.Image`
  width: 15px;
  position: relative;
  height: 15px;
`;

export const LocationSecondary = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: left;
  font-family: "Roboto";
  font-weight: 400;
`;

export const LocationSaved = styled.Text`
  position: relative;
  color: #fff;
  font-family: "Roboto";
  top: 20px;
  right: 30px;
  font-size: 15px;
  text-align: left;
`;

export const LocationTertiary = styled.Text`
  position: relative;
  color: #4e4e4e;
  font-family: "Roboto";
  font-size: 13px;
  text-align: left;
  top: 20px;
  right: 80px;
`;

export const LocationBox = styled.Text`
  position: relative;
  width: 100px;
  height: 80px;
  color: #fff;
  font-size: 10px;
  background: #4e4e4e;
  border-radius: 5px;
  top: 30px;
  left: 30px;
  padding: 20px;
  text-align: center;
`;

export const LocationScroll = styled.Text`
  position: relative;
  width: 95px;
  height: 80px;
  top: 30px;
  font-size: 10px;
  text-align: right;
  color: #fff;
  left: 25px;
  background: #4e4e4e;
  padding: 20px;
  border-radius: 1px;
`;

export const LocationSwitch = styled.View`
  position: relative;
  width: 32px;
  height: 16px;
  top: 20px;
  right: 20px;
  border-radius: 15px;
  background: #1db704;
`;

export const ImageEllipse = styled.ImageBackground`
  width: 20px;
  height: 15px;
`;

export const LocationType = styled.Text`
  color: #fff;
  font-family: "Roboto";
  font-size: 15px;
  text-align: left;
  right: 50px;
  position: relative;
  top: 40px;
`;

export const LocationNumber = styled.Text`
  position: relative;
  width: 260px;
  height: 48px;
  color: #fff;
  top: 50px;
  margin-bottom: 20px;
  padding: 12px;
  background: #4e4e4e;
  border-radius: 3px;
`;

export const LocationBtn = styled(Button).attrs({ color: colors.ui.primary })`
  width: 260px;
  height: 60px;
  padding: 12px;
  top: 40px;
  text-align: center;
  color: #000;
  font-weight: 400;
  font-size: 18px;
  background: #c3ad60;
  border-radius: 5px;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const LocationLine = styled.View`
  width: 70%;
  height: 7px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  background: #c3ad60;
  margin-top: 50px;
  border: 3px;
  margin-bottom: 20px;
`;

export const LocationReceived = styled.Text`
  color: #4e4e4e;
  position: relative;
  font-size: 10px;
  right: 80px;
`;

export const LocationInput = styled(TextInput)`
  width: 70%;
  height: 3px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  background: #c4c4c4;
  border: 3px;
  margin-top: 10px;
`;

export const ImageDrop = styled.Image`
  width: 25px;
  height: 18px;
  left: 10px;
  top: 10px;
  position: relative;
`;

export const LocationPhone = styled.Text`
  font-size: 10px;
  color: #4e4e4e;
  font-weight: 300;
  margin-top: 10px;
  text-align: left;
`;

export const PhoneInput = styled(TextInput)`
  width: 200px;
  height: 3px;
  position: relative;
  top: 10px;
  background: #c4c4c4;
  border-bottom: 3px;
`;
