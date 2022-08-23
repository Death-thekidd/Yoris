import React, { useState } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';
import { 
  SettingsContainer,
  SettingsWrapper,
  SettingsLayout,
  SettingsPrimary,
  SettingsSecondary
 } from '../components/settings.styles';
 import { useNavigation } from '@react-navigation/native';
 import Header from '../../../components/Header';
 import Menu from 'react-native-vector-icons/AntDesign';
 import Tools from 'react-native-vector-icons/AntDesign';


export default function NotificationScreen({navigation}) {
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
        <SettingsWrapper>
          <SettingsLayout>
            <TouchableOpacity
              style={{
                left: 20,
                top: 20,
              }}
            >
                <Menu 
                  name="menufold"
                  color="#4E4E4E"
                  size={25}
                />
            </TouchableOpacity>
          </SettingsLayout>
          <SettingsLayout>
             <SettingsPrimary>Filters</SettingsPrimary>
             <SettingsSecondary>
                Choose the notifications you'd like to see {'\n'}
                and those you don't 
             </SettingsSecondary>
          </SettingsLayout>
        </SettingsWrapper>

        <SettingsWrapper>
          <SettingsLayout>
             <TouchableOpacity
               style={{
                left: 20,
                top: 10,
               }}
              onPress={() => navigation.navigate('factor')}
             >
               <Tools
                 name="tool"
                 color="#4E4E4E"
                 size={25}
                />
             </TouchableOpacity>
          </SettingsLayout>
          <SettingsLayout>
            <SettingsPrimary>Preferences</SettingsPrimary>
            <SettingsSecondary>
                Select your preferences by notification type
            </SettingsSecondary>
          </SettingsLayout>
        </SettingsWrapper>
        <SettingsWrapper>
          <SettingsLayout>
             <SettingsPrimary
                style={{
                    left: 60,
                    top: 10,
                }}
              >
                Preferences
            </SettingsPrimary>
          </SettingsLayout>
          <SettingsLayout>
          <View
            style={{
              left: 60,
            }}
          >
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