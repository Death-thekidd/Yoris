import styled from "styled-components/native";
import { Constants } from "../../../../../constants/db.mock";
export const StyledMultiItemView = styled.Pressable`
  flex-direction: row;
  background: ${Constants.theme.primary};
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 7px;
`;
export const ContentsView = styled.View`
  width: 90%;
  margin-bottom: 5px;
`;
export const Address = styled.Text`
  font-weight: 500;
  margin: 5px 0px;
`;
export const MultiTitle = styled.Text``;
export const BottomInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
