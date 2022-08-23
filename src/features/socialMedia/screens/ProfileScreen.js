import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { 
    ProfileWrapper,
    ProfileBody,
    ProfileRow,
    ProfileLayout,
    ProfileText,
    ProfileImageBackground,
    ProfileImage,
    ProfileInput,
    ProfileLabel,
    ProfileImageBox,
    ProfileView,
    ProfileName,
    ProfileIcon,
    ProfileNumber,
    ProfileLocationImage,
    ProfileSpan,
    ProfileBreak,
    ProfileBottom,
    ProfileBrand,
    ProfileInset,
    ProfileLayoutImage,
    ProfileActivity,
    ProfilePost,
    ProfileHandleRow,
    ProfileHandleImage,
    ProfileUsers,
    ProfileUsersSpan,
    ProfileContent,
    ProfilePendants,
    ProfileFooter,
    ProfileComments,
    ProfileCommentsSpan
} from '../components/profile.styles';
import { LayoutScrollView } from '../../../components/Layout';
import Header from '../../../components/Header';
import MenuScreen from '../Drawer/MenuScreen';
import { Text, TouchableOpacity } from 'react-native';

export default () => {
  const { goBack,  navigate } = useNavigation();
    return (
     <LayoutScrollView
        style={{
          paddingHorizontal: 25,
        }}
      >
        <ProfileWrapper>
          <ProfileRow>
             <Header 
              iconLeft={require("../../../../assets/backIcon.png")}
              onLeftIconPress={() => goBack()}
             />
          </ProfileRow>
          <ProfileRow>
            <ProfileText>Your Profile</ProfileText>
          </ProfileRow>
          <ProfileRow>
            <MenuScreen />
          </ProfileRow>
        </ProfileWrapper> 
           <ProfileImageBackground source={require("../../../../assets/profile2.png")}>
              <ProfileInput type="checkbox" id="navi-toggle">
                <ProfileLabel>
                  <ProfileImageBox source={require("../../../../assets/bag.png")} />
                </ProfileLabel>
              </ProfileInput>
           </ProfileImageBackground>
           <ProfileImage source={require("../../../../assets/profile1.png")} />
          <ProfileView>
             <ProfileWrapper>
              <ProfileRow>
                 <ProfileName>John  Doe</ProfileName>
              </ProfileRow>
               <ProfileRow>
                  <Text
                    style={{
                      width: 90,
                      height: 24,
                      color: "#000",
                      fontSize: 15,
                      backgroundColor: "#fff",
                      borderRadius: 15,
                      left: 23,
                    }}
                   >
                     rEfeRAlc0d3
                  </Text>
               </ProfileRow>
               <ProfileRow>
                  <ProfileIcon 
                    style={{
                      left: 18,
                    }}
                    source={require("../../../../assets/double.png")}  
                  />
                </ProfileRow>
                <ProfileRow>
                   <ProfileIcon
                      style={{
                        left: 10,
                      }}
                     source={require("../../../../assets/icon2.png")} 
                     />
                </ProfileRow>
             </ProfileWrapper>
          </ProfileView>
          <ProfileView>
            <Text
              style={{
                color: "#C4C4C4",
                fontSize: 18,
              }}
             >
               @Jhnn_Doe
            </Text>
          </ProfileView>
           <ProfileWrapper>
               <ProfileRow>
                  <Text style={{
                    color: "#C4C4C4",
                    fontSize: 16,
                    top: 20,
                  }}
                  >
                   Here to support {'\n'} 
                    as many {'\n'} 
                   indigenous brands {'\n'}  
                   as I possibly can
                  </Text>
               </ProfileRow>
               <ProfileRow>
                   <ProfileNumber>
                      1000
                   </ProfileNumber>
                   <Text 
                      style={{ 
                        color: "#C4C4C4", 
                        left: 10,
                      }}>
                      Followers
                    </Text>
               </ProfileRow>
            </ProfileWrapper>
            <ProfileBottom>
            <ProfileWrapper>
                <ProfileRow>
                  <ProfileView>
                    <ProfileLocationImage source={require("../../../../assets/location.png")} /> 
                    <ProfileSpan>Lungu Street</ProfileSpan>
                  </ProfileView>
                </ProfileRow>
                <ProfileRow>
                <ProfileNumber>
                      1000
                   </ProfileNumber>
                   <Text 
                      style={{ 
                        color: "#C4C4C4", 
                        left: 10,
                      }}>
                      Following
                    </Text>
                </ProfileRow>
            </ProfileWrapper>
          </ProfileBottom>
            <ProfileBreak></ProfileBreak>
            <ProfileBrand>
              Brands <ProfileInset>you follow:</ProfileInset>
            </ProfileBrand>
          <ProfileBody>
            <ProfileLayout>
              <TouchableOpacity>
                <ProfileLayoutImage source={require("../../../../assets/law.png")} />
               </TouchableOpacity>
            </ProfileLayout>
            <ProfileLayout>
              <TouchableOpacity>
                <ProfileLayoutImage 
                  source={require("../../../../assets/woman.png")} 
                 />
               </TouchableOpacity>
            </ProfileLayout>
          </ProfileBody>
          <ProfileBody>
            <ProfileLayout>
              <TouchableOpacity>
                <ProfileLayoutImage source={require("../../../../assets/republic.png")} />
               </TouchableOpacity>
            </ProfileLayout>
            <ProfileLayout>
              <TouchableOpacity>
                <ProfileLayoutImage 
                  source={require("../../../../assets/kicks.png")} 
                 />
               </TouchableOpacity>
            </ProfileLayout>
          </ProfileBody>
          <TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  marginBottom: 20,
                }}
              >
                Show all
              </Text>
          </TouchableOpacity>
          <ProfileView>
            <ProfileActivity>Activity</ProfileActivity>
            <ProfilePost>My Posts</ProfilePost>
          </ProfileView>
          <ProfileWrapper
             style={{
               marginBottom: 20,
             }}
           >
            <ProfileHandleRow>
                <ProfileHandleImage
                  source={require("../../../../assets/circle.png")} 
                />
            </ProfileHandleRow>
            <ProfileHandleRow>
                <ProfileUsers>
                  User Name <ProfileUsersSpan>@handle</ProfileUsersSpan>
                </ProfileUsers>
                <ProfilePendants>
                  So I came across this awesome {'\n'} 
                  brand that sells ankara bracelets {'\n'} 
                  and pendants, they looked really {'\n'} 
                  awesome!!!
                </ProfilePendants>
            </ProfileHandleRow>
          </ProfileWrapper>
          <ProfileBody
            style={{
              marginBottom: 40,
            }}
          >
             <ProfileHandleRow>
               <ProfileHandleImage 
                 source={require("../../../../assets/circle.png")} 
               />
             </ProfileHandleRow>
             <ProfileHandleRow>
               <ProfileUsers>
                  User Name <ProfileUsersSpan>@handle</ProfileUsersSpan>
                </ProfileUsers>
                <ProfilePendants>
                   My Dog just dropped the sickest {'\n'}
                   mixtape mehn, ya'll need to hear {'\n'}
                   it!!! It's titled 'Barks and {'\n'}
                   Nibbles'... Dope joint.
                </ProfilePendants>
             </ProfileHandleRow>
          </ProfileBody>
          <ProfileFooter>
            <ProfileBody>
               <ProfileRow>
                  <ProfileComments>
                     User4567 <ProfileCommentsSpan>liked your comments</ProfileCommentsSpan>
                  </ProfileComments>
               </ProfileRow>
               <ProfileRow>
               <ProfileComments>
                     User3230 <ProfileCommentsSpan>shared y</ProfileCommentsSpan>
                  </ProfileComments>
               </ProfileRow>
            </ProfileBody>
          </ProfileFooter>
     </LayoutScrollView>
    );
}