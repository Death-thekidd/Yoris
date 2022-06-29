import styled from "styled-components/native";
import { Constants } from "../../../../../constants/db.mock";

export const Constainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px 0 0;
`;

export const StyledMultiButton = styled.Pressable`
  flex-direction: row;
  background-color: ${Constants.theme.primary};
  width: 360px;
  height: 64px;
  border-radius: 10px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
