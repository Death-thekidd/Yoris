import styled from 'styled-components/native';
import { Constants } from "../../../../constants/db.mock";

export const SettingsContainer = styled.View`
  background-color: #000;
  flex: 1;
`;

export const SettingsWrapper = styled.View`
   display: flex;
   flex-direction: row;
`;

export const SettingsRow = styled.View`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 40px;
   align-items: center;
`;

export const SettingsLayout = styled.View`
  flex-direction: column;
  padding: 20px;
`;

export const SettingsText = styled.Text`
   color: ${Constants.theme.light};
   font-size: 20px;
`;

export const SettingsPrimary = styled.Text`
  color: ${Constants.theme.light};
  font-size: 15px;
  font-weight: 300;
  margin-left: 10px;
`;

export const SettingsSecondary = styled.Text`
    color: ${Constants.theme.light};
    font-size: 10px;
    margin-left: 10px;
`;