import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { 
 SettingsContainer, 
 SettingsPrimary, 
 SettingsSecondary,
 SettingsWrapper,
 SettingsLayout
} from '../components/settings.styles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';


export default function FactorScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const { goBack, navigate } = useNavigation();

    return (
      <SettingsContainer>
        <View
          style={{
            right: 100,
          }}
        >
          <Header 
            iconLeft={require("../../../../assets/backIcon.png")}
            onLeftIconPress={() => goBack()}
          />
        </View>
        <View
          style={{
            left: 60,
            top: 40,
          }}
         >
            <SettingsPrimary>Two factor authentication</SettingsPrimary>
            <SettingsSecondary>
                Set up two factor authentication for {'\n'}
                your account.
            </SettingsSecondary>
        </View>
        <View
           style={{
            left: 60,
            top: 70,
            marginBottom: 100,
           }}
        >
         <SettingsPrimary>Connected accounts</SettingsPrimary>
         <SettingsSecondary>
            Manage third party accounts connected {'\n'}
            to puddle.
          </SettingsSecondary>
        </View>

        <SettingsWrapper>
          <SettingsLayout>
             <SettingsPrimary
                style={{
                    left: 30,
                    top: 10,
                    fontSize: 15,
                }}
              >
                Password reset protection
            </SettingsPrimary>
          </SettingsLayout>
          <SettingsLayout>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#1DB704" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              />
          </View>
          </SettingsLayout>
        </SettingsWrapper>
      </SettingsContainer>
    );
}