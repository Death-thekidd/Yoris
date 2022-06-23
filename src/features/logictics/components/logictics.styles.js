import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";

export const Title = styled.Text`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  color: #8b9100;
  font-weight: bold;
  text-transform: uppercase;
`;
export const CategoryView = styled.View`
  display: flex;
`;

export const LogisticsInfoItem = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 15px;
  justify-content: space-around;
`;
export const LogisticsInfoItemText = styled.Text`
  color: #fff;
  text-align: left;
`;
export const LogisticsInfoItemTextBold = styled.Text`
  color: #fff;
  font-weight: bold;
`;
export const LogisticsInfoItemHelperContainer = styled.Text`
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
  flex-direction: column;
`;
export const LogisticsInfoItemHelperText = styled.Text`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #fff;
  padding: 0 8px;
  font-size: 12.3px;
  align-self: flex-end;
  /* text-align: center; */
  justify-content: center;
  width: 135%;
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
  justify-content: space-between;
  flex-direction: row;
  align-content: space-between;
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

export const ContinueButton = styled.Pressable`
  margin-top: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const ContinuewButtonText = styled.Text`
  color: ${colors.ui.primary};
  /* font-weight: 500; */
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
`;

export const ContinueView = styled.View`
  width: 330px;
  height: 64px;
  text-align: center;
  align-self: center;
  background: #c3ad60;
  border: 1px solid #9a8340;
  border-radius: 10px;
`;
