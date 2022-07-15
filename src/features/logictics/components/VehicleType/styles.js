import styled from "styled-components/native";
import { Constants } from "../../../../../constants/db.mock";

export const PressableContainer = styled.Pressable`
  border-radius: 5;
  border-color: ${Constants.theme.primary};
  border-width: 2;
  width: 48%;
  height: 82px;
  margin-bottom: 5px;
  margin-right: 5px;
  justify-content: center;
`;

export const Contents = styled.View`
  flex-direction: row;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
