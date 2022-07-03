import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { Constants } from "../../../../constants/db.mock";

export const DetailsWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const DetailsRow = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

export const ImageBackground = styled.Image`
  width: 26.19px;
  position: relative;
  height: 20px;
`;

export const DetailsPrimary = styled.Text`
  color: ${Constants.theme.primary};
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  font-family: "Roboto";
`;

export const ImageCancel = styled.Image`
  width: 20.07px;
  position: relative;
  height: 20px;
`;

export const DetailsSecondary = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  top: 20px;
  text-align: left;
  left: 60px;
  font-family: "Roboto";
`;

export const DetailsTertiary = styled.Text`
  color: ${Constants.theme.primary};
  top: 40px;
  font-size: 15px;
  text-align: left;
  left: 60px;
  font-famiy: "Roboto";
`;

export const DetailsHover = styled.View`
  position: relative;
  width: 260px;
  height: 96px;
  top: 55px;
  left: 60px;
  background: ${Constants.theme.primary};
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const ImageDetails = styled.Image`
  top: 20px;
  width: 20px;
  height: 20px;
  left: 60px;
`;

export const DetailsParagraph = styled.Text`
  color: ${Constants.theme.dark};
  font-size: 18px;
  font-weight: 400;
  left: 50px;
  top: 15px;
`;

export const DetailsLocation = styled.Text`
  color: ${Constants.theme.primary};
  top: 60px;
  font-size: 15px;
  text-align: left;
  left: 60px;
  font-famiy: "Roboto";
`;

export const DetailsCycle = styled.View`
  position: relative;
  width: 260px;
  height: 80px;
  top: 80px;
  margin-bottom: 30px;
  left: 60px;
  border: 1px solid ${Constants.theme.primary};
  border-radius: 10px;
`;

export const DetailsDrop = styled.Text`
  color: ${Constants.theme.primary};
  top: 60px;
  font-size: 15px;
  text-align: left;
  left: 60px;
  font-famiy: "Roboto";
`;

export const DetailsAddress = styled.Text`
  color: #fff;
  text-align: left;
  font-weight: 300;
  font-size: 15px;
  top: 20px;
  left: 10px;
  font-family: "Roboto";
`;

export const DetailsType = styled.Text`
  color: ${Constants.theme.primary};
  top: 60px;
  font-size: 15px;
  text-align: left;
  left: 60px;
  margin-bottom: 10px;
  font-famiy: "Roboto";
`;

export const DetailsCopy = styled.Text`
  color: ${Constants.theme.dark};
  font-size: 18px;
  font-weight: 400;
  left: 20px;
  top: 15px;
`;

export const ImageBike = styled.Image`
  top: 20px;
  left: 20px;
`;

export const DetailsBtn = styled(Button).attrs({ color: colors.brand.primary })`
  width: 260px;
  height: 65px;
  top: 60px;
  border: 1px solid ${Constants.theme.primary};
  align-items: center;
  color: ${Constants.theme.primary};
  left: 60px;
  font-weight: 400;
  padding: 6px;
  font-size: 18px;
  margin-bottom: 100px;
  border-radius: 10px;
  text-transform: uppercase;
`;
