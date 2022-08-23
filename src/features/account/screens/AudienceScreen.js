import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    SettingsContainer,
    SettingsPrimary, 
    SettingsSecondary
} from "../components/settings.styles";
import Header from '../../../components/Header';
import { LayoutScrollView } from '../../../components/Layout';

export default function AudienceScreen() {
    const { goBack, navigate } = useNavigation();
    return (
    <LayoutScrollView>
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
             marginLeft: 60,
           }}
        >
        <SettingsPrimary>Audience</SettingsPrimary>
        <SettingsSecondary
           style={{
            marginBottom: 20,
           }}
        >
            Manage what information people see from  {'\n'}
            you
        </SettingsSecondary>
        
        <SettingsPrimary>Your posts</SettingsPrimary>
        <SettingsSecondary
          style={{
            marginBottom: 20,
          }}
        >
            Manage the information associated with {'\n'}
            your post
        </SettingsSecondary>
         <SettingsPrimary>Content you see</SettingsPrimary>
         <SettingsSecondary
           style={{
            marginBottom: 20,
           }}
         >
            Set your viewing preferences on such as {'\n'}
            topics and industries
         </SettingsSecondary>

        <SettingsPrimary>Mute and block</SettingsPrimary>
        <SettingsSecondary
           style={{
            marginBottom: 20,
           }}
        >
            Manage accounts and words you've muted {'\n'}
            and blocked
        </SettingsSecondary>
        <SettingsPrimary>Direct messages</SettingsPrimary>
        <SettingsSecondary
           style={{
            marginBottom: 20,
           }}
        >
            Choose who can send you direct  {'\n'}
            messages
        </SettingsSecondary>

        <SettingsPrimary>Ads</SettingsPrimary>
        <SettingsSecondary
           style={{
            marginBottom: 20,
           }}
        >
           Manage your ads preferences
        </SettingsSecondary>
        <SettingsPrimary
           style={{
             marginBottom: 20,
           }}
        >
              Contact settings
            </SettingsPrimary>
            <SettingsPrimary>Privacy</SettingsPrimary>
        </View>
      </SettingsContainer>
    </LayoutScrollView>
    );
}