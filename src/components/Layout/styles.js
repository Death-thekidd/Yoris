import styled from "styled-components/native";
import { Constants } from "../../../constants/db.mock";

const Layout = styled.View`
  flex: 1;
  background-color: ${Constants.theme.dark};
`;

export const StyledScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${Constants.theme.dark};
  padding: 0 25px;
`;

export const StyledText = styled.Text`
  color: #fff;
`;

export const StyledView = styled.View`
  margin: 20px 0;
`;

export const PressableSection = styled.Pressable`
  margin: 20px 0;
`;

export default Layout;
