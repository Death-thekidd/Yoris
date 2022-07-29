import React, { useState } from 'react';
import { LayoutScrollView } from '../../../components/Layout';
import { TouchableOpacity, Image, View } from 'react-native';
import { UserIcon, SearchIcon } from "react-native-heroicons/outline";
import  Dots  from 'react-native-vector-icons/Entypo';
import Chats from 'react-native-vector-icons/Fontisto';
import { 
 ProfileWrapper,
 ProfileRow,
 ProfileName,
 ProfileHandleRow,
 ProfileHandleImage,
 ProfileUsers,
 ProfileUsersSpan,
 ProfileContent,
 ProfileJetImage,
 ProfileInput,
 ProfileInputBox,
 ProfileInputImage,
 ProfileCircleImage,
 ProfileIconView,
 ProfileIconText,
 ProfileImageView,
 ProfileImagePost
} from '../components/profile.styles';
const scrollElementHeightPercent = 45;


export default function PuddleScreen({ navigation }) {
    const [contentOffset, setContentOffset] = useState({ x: 0, y: 0});
    const [contentSize, setContentSize] = useState(0);
    const [scrollViewHeight, setScrollViewHeight] = useState(0);

    const scrollPerc =  (contentOffset.y / (contentSize - scrollViewHeight)) 
       * (170 - scrollElementHeightPercent);
    return (
      <LayoutScrollView
         style={{
           paddingHorizontal: 25,
         }}
         onScroll={e => {
            setContentOffset(e.nativeEvent.contentOffset);
         }}
         onContentSizeChange={(_, height) => {
            setContentSize(height);
         }}
         onLayout={e => {
            setScrollViewHeight(e.nativeEvent.layout.height);
         }}
       >
       <ProfileWrapper
         style={{
            marginBottom: 20,
         }}
        >
          <ProfileRow>
             <ProfileName>Feed</ProfileName>
          </ProfileRow>
          <ProfileRow>
             <TouchableOpacity
               style={{
                  left: 180,
               }}
               onPress={() => navigation.navigate('profile')}
             >
                <UserIcon
                   color="#4E4E4E"
                   size={20}
                />
             </TouchableOpacity>
          </ProfileRow>
          <ProfileRow>
              <TouchableOpacity
                style={{
                  left: 50,
                }}
              >
               <SearchIcon 
                 color="#4E4E4E"
                 size={20}
               />
            </TouchableOpacity>
         </ProfileRow>
         <ProfileRow>
            <TouchableOpacity
               style={{
                  left: 50,
               }}
             >
               <Image 
                 source={require("../../../../assets/bell.png")}
               />
            </TouchableOpacity>
         </ProfileRow>
       </ProfileWrapper>
       <ProfileWrapper>
       <ProfileHandleRow>
           <ProfileHandleImage 
              source={require("../../../../assets/users2.png")}
            />
      </ProfileHandleRow>
      <ProfileHandleRow>
          <ProfileUsers> 
             User Name <ProfileUsersSpan>@handle</ProfileUsersSpan>
         </ProfileUsers>
         <ProfileContent>
            So I came across {'\n'}
             this awesome brands {'\n'}
             that sells ankara bracelets {'\n'}
             and pendants, they {'\n'}
             looked really awesome!!
         </ProfileContent>
      </ProfileHandleRow>
      <ProfileHandleRow>
         <TouchableOpacity
            style={{
               left: 10,
               top: 10,
            }}
          >
           <Dots 
             name="dots-three-vertical" 
             color="#fff"
             size={15}
           />
         </TouchableOpacity>
      </ProfileHandleRow>
      </ProfileWrapper>

      <ProfileWrapper
         style={{
            marginBottom: 30,
         }}
      >
         <ProfileRow>
           <TouchableOpacity
              style={{
               left: 40,
              }}
            >
             <Image 
                source={require("../../../../assets/like.png")}
              />
            </TouchableOpacity>
         </ProfileRow>
         <ProfileRow>
            <TouchableOpacity
              style={{
               left: 40,
              }}
            >
               <Image 
                  source={require("../../../../assets/love.png")}
               />
            </TouchableOpacity>
         </ProfileRow>
         <ProfileRow>
            <TouchableOpacity
              style={{
               left: 40,
              }}
            >
               <Image 
                 source={require("../../../../assets/new.png")}
               />
            </TouchableOpacity>
         </ProfileRow>
         <ProfileRow>
            <TouchableOpacity
              style={{
                left: 40,
              }}
            >
             <Image 
               source={require("../../../../assets/unlike.png")}
             />
            </TouchableOpacity>
         </ProfileRow>
      </ProfileWrapper>
          <ProfileJetImage source={require("../../../../assets/jet.png")}>
             <ProfileWrapper>
                <ProfileHandleRow>
                   <ProfileHandleImage 
                     source={require("../../../../assets/users.png")}
                   />
               </ProfileHandleRow>
               <ProfileHandleRow>
                  <ProfileUsers>
                     User Name <ProfileUsersSpan>@handle</ProfileUsersSpan>
                  </ProfileUsers>
               </ProfileHandleRow>
               <ProfileHandleRow>
                 <TouchableOpacity>
                   <Dots 
                     style={{
                       top: 10,
                       left: 30,
                     }}
                     name="dots-three-vertical" 
                     color="#fff" 
                     size={15} 
                   />
                 </TouchableOpacity>
               </ProfileHandleRow>
            </ProfileWrapper>
         
              <View
                 style={{
                   position: "absolute",
                   top: `${Number(scrollPerc || 0).toFixed(10)}%`,
                   height: `${scrollElementHeightPercent}%`,
                 }}
              >
              <ProfileInput>
               <TouchableOpacity>
                <ProfileInputBox>
                  <ProfileInputImage 
                    source={require("../../../../assets/extra.png")}
                  />
               </ProfileInputBox>
              </TouchableOpacity>
             </ProfileInput>
            <ProfileInput>
               <TouchableOpacity>
                    <ProfileCircleImage 
                      source={require("../../../../assets/Chat.png")}
                    />
               </TouchableOpacity>
           </ProfileInput>
           </View>

            <ProfileIconView>
             <ProfileWrapper>
               <ProfileRow>
                  <TouchableOpacity>
                    <Image 
                      source={require("../../../../assets/like.png")}
                    />
                  </TouchableOpacity>
               </ProfileRow>
               <ProfileRow>
                  <TouchableOpacity>
                    <Image 
                      source={require("../../../../assets/love.png")}
                    />
                  </TouchableOpacity>
               </ProfileRow>
               <ProfileRow>
                  <TouchableOpacity>
                     <Image 
                       source={require("../../../../assets/new.png")}
                     />
                  </TouchableOpacity>
               </ProfileRow>
               <ProfileRow>
                  <TouchableOpacity>
                     <Image 
                       source={require("../../../../assets/unlike.png")}
                     />
                  </TouchableOpacity>
               </ProfileRow>
             </ProfileWrapper>
             </ProfileIconView>
             <ProfileIconText>
               These guys makes the best {'\n'}
               confectionaries I've seen in a {'\n'}
               while.
             </ProfileIconText>
          </ProfileJetImage>
          
          <ProfileWrapper>
             <ProfileHandleRow>
               <ProfileHandleImage 
                 source={require("../../../../assets/circle.png")}
               />
             </ProfileHandleRow>
             <ProfileHandleRow>
                <ProfileUsers>
                   User Name <ProfileUsersSpan>@handle</ProfileUsersSpan>
                </ProfileUsers>
            </ProfileHandleRow>
            <ProfileHandleRow>
               <TouchableOpacity
                 style={{
                  left: 30,
                  top: 10,
                 }}
               >
                  <Dots 
                    name="dots-three-vertical"
                    color="#fff"
                    size={15}
                  />
               </TouchableOpacity>
            </ProfileHandleRow>
         </ProfileWrapper>
         <ProfileImageView>
           <ProfileImagePost 
              source={require("../../../../assets/gold.png")}
           />
         </ProfileImageView>

             <ProfileWrapper
                style={{
                  left: 20,
                }}
               >
               <ProfileRow>
                  <TouchableOpacity>
                    <Image 
                      source={require("../../../../assets/like.png")}
                    />
                  </TouchableOpacity>
               </ProfileRow>
               <ProfileRow>
                  <TouchableOpacity>
                    <Image 
                      source={require("../../../../assets/love.png")}
                    />
                  </TouchableOpacity>
               </ProfileRow>
               <ProfileRow>
                  <TouchableOpacity>
                     <Image 
                       source={require("../../../../assets/new.png")}
                     />
                  </TouchableOpacity>
               </ProfileRow>
               <ProfileRow>
                  <TouchableOpacity>
                     <Image 
                       source={require("../../../../assets/unlike.png")}
                     />
                  </TouchableOpacity>
               </ProfileRow>
             </ProfileWrapper>
             <ProfileImageView>
               <ProfileIconText>
                  So I came across this awesome {'\n'} 
                  brand that sells ankara bracelets {'\n'} 
                  and pendants, they looked really {'\n'} 
                  awesome!!!
               </ProfileIconText>
             </ProfileImageView>
      </LayoutScrollView>
    );
}