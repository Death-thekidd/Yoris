import styled from "styled-components/native";
import { Constants } from "../../../../constants/db.mock";
import { ww, wp } from "../../../../responsive";

export const ProfileWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ProfileBody = styled.View`
  flex-direction: row;
`;

export const ProfileRow = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-self: center;
`;

export const ProfileLayout = styled.View`
  align-self: center;
`;

export const ProfileHandleRow = styled.View`
  padding: ${ww(5)}px;
`;

export const ProfileText = styled.Text`
  color: ${Constants.theme.primary};
  font-size: 20px;
  font-weight: 300;
`;

export const ProfileImageBackground = styled.ImageBackground`
  width: ${ww(420)}px;
  height: ${ww(100)}px;
  top: 25px;
`;

export const ProfileImage = styled.Image`
  width: ${ww(104)}px;
  height: ${ww(104)}px;
  left: 20px;
  z-index: 1;
`;

export const ProfileInput = styled.View`
  display: flex;
`;

export const Icon = styled.View`
  flex-direction: row;
`;

export const ProfileLabel = styled.View`
  background-color: ${Constants.theme.dark};
  height: ${ww(40)}px;
  width: ${ww(40)}px;
  border-radius: 60px;
  z-index: 100;
  top: 30px;
  left: 250px;
  cursor: pointer;
`;

export const ProfileInputBox = styled.View`
  background-color: ${Constants.theme.light};
  height: ${ww(48)}px;
  width: ${ww(48)}px;
  border-radius: 60px;
  z-index: 100;
  transform: scale(1.3);
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  margin-bottom: ${ww(20)}px;
`;

export const ProfileImageBox = styled.Image`
  width: ${ww(20)}px;
  height: ${ww(20)}px;
  top: 10px;
  left: 7px;
`;

export const ProfileInputImage = styled.Image`
  width: ${ww(29)}px;
  height: ${ww(29)}px;
`;

export const ProfileCircleImage = styled.Image`
  height: ${ww(100)}px;
  width: ${ww(100)}px;
  border-radius: 60px;
  z-index: 100;
  margin-top: ${ww(20)}px;
`;

export const ProfileView = styled.View`
  display: flex;
`;

export const ProfileName = styled.Text`
  color: ${Constants.theme.primary};
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileIcon = styled.Image``;

export const ProfileNumber = styled.Text`
  color: ${Constants.theme.primary};
  font-size: 18px;
  font-weight: bold;
  left: 20px;
`;

export const ProfileBottom = styled.View`
  margin-bottom: 30px;
`;

export const ProfileLocationImage = styled.Image`
  top: 25px;
`;

export const ProfileSpan = styled.Text`
  color: #fff;
  left: 40px;
`;

export const ProfileIconView = styled.View`
  margin-top: 450px;
  left: 20px;
  margin-bottom: 20px;
`;

export const ProfileBreak = styled.View`
  width: ${ww(340)}px;
  height: ${ww(0)}px;
  border: 1px solid #faf6f3;
`;

export const ProfileBrand = styled.Text`
  color: ${Constants.theme.primary};
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProfileInset = styled.Text`
  color: ${Constants.theme.primary};
  font-weight: 200;
  font-size: 20px;
`;

export const ProfileLayoutImage = styled.Image`
  width: ${ww(170)}px;
  height: ${ww(194)}px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

export const ProfileActivity = styled.Text`
  color: ${Constants.theme.primary};
  font-size: 36px;
  font-weight: 700;
  left: 30px;
  margin-bottom: 25px;
`;

export const ProfilePost = styled.Text`
  color: ${Constants.theme.light};
  left: 30px;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProfileHandleImage = styled.Image`
  width: ${ww(42)}px;
  height: ${ww(42)}px;
`;

export const ProfileUsers = styled.Text`
  color: ${Constants.theme.light};
  font-size: 18px;
`;

export const ProfileUsersSpan = styled.Text`
  color: ${Constants.theme.dim};
  font-size: 14px;
  opacity: 1.5;
`;

export const ProfileContent = styled.Text`
  color: ${Constants.theme.light};
  width: 30%;
`;

export const ProfilePendants = styled.Text`
  color: ${Constants.theme.light};
`;

export const ProfileFooter = styled.View`
  background: ${Constants.theme.primary};
  width: ${ww(450)}px;
  background-size: cover;
  height: ${ww(43)}px;
`;

export const ProfileComments = styled.Text`
  color: ${Constants.theme.dim};
  font-size: 10px;
  text-align: left;
  font-weight: 700;
`;

export const ProfileCommentsSpan = styled.Text`
  color: ${Constants.theme.dim};
  font-size: 10px;
  font-weight: 100;
`;

export const ProfileJetImage = styled.ImageBackground`
  width: ${ww(427.59)}px;
  height: ${ww(809)}px;
  margin-bottom: 30px;
`;

export const ProfileIconText = styled.Text`
  color: #fff;
  margin-left: 20px;
  font-size: 15px;
`;

export const ProfileImageView = styled.View`
  margin-top: 20px;
`;

export const ProfileImagePost = styled.Image`
  width: ${ww(428)}px;
  height: ${ww(428)}px;
`;
