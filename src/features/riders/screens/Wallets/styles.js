import styled from "styled-components/native";
import { Constants } from "../../../../../constants/db.mock";

export const WalletActionBtn = styled.Pressable`
  padding: 0 15px;

  border-radius: 50px;
  border-width: 1;
  border-color: ${Constants.theme.primary};
  justify-content: space-between;
  align-items: center;
  height: 48;

  width: 75%;
  margin-top: 10;
  align-self: center;
  flex-direction: row;
`;
