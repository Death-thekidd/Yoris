import React from 'react';
import { LayoutScrollView } from '../../../components/Layout';
import { 
  SettingsContainer,
  SettingsWrapper,
  SettingsRow,
  SettingsText,
  SettingsLayout,
  SettingsPrimary,
  SettingsSecondary
} from '../components/settings.styles';
import {  SearchIcon } from "react-native-heroicons/outline";
import { TouchableOpacity, View, Image } from 'react-native';
import Home from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Privacy from 'react-native-vector-icons/MaterialIcons';
import Security from 'react-native-vector-icons/MaterialIcons';

export default function SettingsScreen({ navigation }) {
    return (
    <LayoutScrollView>
      <SettingsContainer>
        <SettingsWrapper>
            <SettingsRow>
               <TouchableOpacity>
                 <Home 
                    name="home"
                    color="#C3AD60"
                    size={25}
                 />
               </TouchableOpacity>
            </SettingsRow>
            <SettingsRow>
              <SettingsText>Settings</SettingsText>
            </SettingsRow>
            <SettingsRow>
              <TouchableOpacity>
                <SearchIcon 
                  color="#C3AD60"
                  size={25}
               />
              </TouchableOpacity>
            </SettingsRow>
        </SettingsWrapper>
        <SettingsWrapper>
          <SettingsLayout>
              <TouchableOpacity
                style={{
                  left: 20,
                  top: 40,
                }}
               onPress={() => navigation.navigate('audience')}
              >
                 <User
                   name="user"
                   size={25}
                   color="#4E4E4E"
                 />
              </TouchableOpacity>
          </SettingsLayout>
          <SettingsLayout>
              <SettingsPrimary>Your Account</SettingsPrimary>
              <SettingsSecondary>
                See the information about your account {'\n'}
                download account data {'\n'}
                account deactivation
              </SettingsSecondary>
          </SettingsLayout>
        </SettingsWrapper>

        <SettingsWrapper>
          <SettingsLayout>
             <TouchableOpacity
                style={{
                  top: 20,
                  left: 20,
                }}
                onPress={() => navigation.navigate('notification')}
             >
               <Image 
                 source={require("../../../../assets/bell.png")}
               />
             </TouchableOpacity>
          </SettingsLayout>
          <SettingsLayout>
              <SettingsPrimary>Notifications</SettingsPrimary>
              <SettingsSecondary>
                 Select the kind of notifications you get, {'\n'}
                 interests and recommendation
              </SettingsSecondary>
          </SettingsLayout>
        </SettingsWrapper>
        <SettingsWrapper>
          <SettingsLayout>
            <TouchableOpacity
              style={{
                top: 20,
                left: 20,
              }}
            >
              <Security 
                name="security"
                color="#4E4E4E"
                size={25}
              />
            </TouchableOpacity>
          </SettingsLayout>
          <SettingsLayout>
           <SettingsPrimary>Security</SettingsPrimary>
           <SettingsSecondary>
              Manage your account's security {'\n'}
              and keep track of usage
           </SettingsSecondary>
          </SettingsLayout>
        </SettingsWrapper>

        <SettingsWrapper>
           <SettingsLayout>
              <TouchableOpacity
                 style={{
                  top: 20,
                  left: 20,
                 }}
              >
                 <Privacy 
                   name="privacy-tip"
                   color="#4E4E4E"
                   size={25}
                 />
              </TouchableOpacity>
           </SettingsLayout>
           <SettingsLayout>
             <SettingsPrimary>Privacy</SettingsPrimary>
             <SettingsSecondary>
               Manage what information you see {'\n'}
               and share
             </SettingsSecondary>
           </SettingsLayout>
        </SettingsWrapper>
        <View
          style={{
            alignItems: 'center',
            right: 40,
            fontSize: 15,
          }}
         >
           <SettingsPrimary
              style={{
                marginBottom: 20,
              }}
           >
             Address book
           </SettingsPrimary>
           <SettingsPrimary
               style={{
                marginBottom: 20,
                right: 25,
               }}
           >
              Country
            </SettingsPrimary>
           <SettingsPrimary
              style={{
                marginBottom: 20,
                right: 20,
              }}
           >
              Language
            </SettingsPrimary>
           <SettingsPrimary 
              style={{ 
                marginBottom: 20, 
                left: 20,
               }}>
              Terms and conditions
            </SettingsPrimary>
        </View>
     </SettingsContainer>
    </LayoutScrollView>
    ); 
}