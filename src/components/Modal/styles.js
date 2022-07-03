import styled from "styled-components/native";
import { Constants } from "../../../constants/db.mock";

export const ModalView = styled.View`
  margin: 20px;
  background-color: ${Constants.theme.dark};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const ModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
