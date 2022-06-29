import styled from "styled-components/native";
import { Constants } from "../../../constants/db.mock";

const theme = Constants.theme;

export default styled.Pressable`
  border-width: 1px;
  border-color: ${theme.primary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  /* // paddingVertical: 20; */
  height: 48px;
`;
