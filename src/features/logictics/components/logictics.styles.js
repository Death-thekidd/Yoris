import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";

export const Title = styled.Text`
  textalign: center;
  justifycontent: space-between;
  alignitems: center;
  color: #8b9100;
  font-weight: bold;
  text-transform: uppercase;
`;
export const CategoryView = styled.View`
  display: flex;
`;

export const LogisticsInfoItem = styled.View`
  flex-direction: row;
  margin-vertical: 5;
`;
export const LogisticsInfoItemText = styled.Text`
  color: #fff;
  padding-right: 20px;
  padding-left: 20px;
`;
export const LogisticsInfoItemTextBold = styled.Text`
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
  align-self: flex-end;
`;

export const LogisticsCountryContainer = styled.View`
  margin: 10px;
`;

export const LogisticsCountryText = styled.Text`
  color: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const LogisticsHeaderIconContainer = styled.View`
justifyContent: space-between;
flexDirection: row
alignContent: space-between;
padding: 20px;
`;

export const ItemView = styled.View`
  position: absolute;
  top: 25px;
  height: 54px;
  display: flex;
  justify-content: center;
  background: #4d4100;
  border-radius: 15px;
  width: 100%;
`;
export const ViewList = styled.TouchableOpacity`
  margin-right: 30px;
  justify-content: center;
`;
export const List = styled.FlatList`
  padding: 18px;
`;
export const LogicticsBacground = styled.View`
  flex: 1;
  background-color: black;
`;

export const LogisticBtnCont = styled.View`
  ${"" /* position: absolute; */}
  display:flex;
  flex-flow: row;
  color: #fff;
  width: 340px;
  height: 64px;
  background: #9a8340;
  border: 1px solid #c3ad60;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const LogisticBtnView = styled.View`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 60px 0;
  width: 100%;
  justify-content: center;
`;
export const LogisticBtn = styled(Button).attrs({ color: colors.ui.primary })`
  width: 180px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;

export const ContinueButton = styled(Button).attrs({
  color: colors.ui.primary,
})`
  font-weight: 900;
  font-size: 110px;
  margin-top: 10px;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;
export const ContinueView = styled.View`
    width: 330px;
    height: 64px;

    text-align:center;
    align-self:center
    background: #C3AD60;
    border: 1px solid #9A8340;
    border-radius: 10px;
    

  `;
