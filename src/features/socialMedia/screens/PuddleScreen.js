import React, { useState } from "react";
import { LayoutScrollView } from "../../../components/Layout";
import {
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { UserIcon, SearchIcon } from "react-native-heroicons/outline";
import Dots from "react-native-vector-icons/Entypo";
import Chats from "react-native-vector-icons/Fontisto";
import { ww, wp } from "../../../../responsive";
import {
  ProfileWrapper,
  ProfileBody,
  ProfileRow,
  ProfileLove,
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
  ProfileImagePost,
  Icon,
} from "../components/profile.styles";
const scrollElementHeightPercent = 45;

export default function PuddleScreen({ navigation }) {
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const scrollPerc =
    (contentOffset.y / (contentSize - scrollViewHeight)) *
    (170 - scrollElementHeightPercent);
  return (
    <SafeAreaView style={styles.container}>
      <LayoutScrollView>
        <ProfileWrapper
          style={{
            marginBottom: 20,
          }}
        >
          <ProfileRow>
            <ProfileName>Feed</ProfileName>
          </ProfileRow>
          <Icon>
            <ProfileRow>
              <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <UserIcon color="#4E4E4E" size={20} />
              </TouchableOpacity>
            </ProfileRow>

            <ProfileRow>
              <TouchableOpacity
                onPress={() => navigation.navigate("notification")}
              >
                <Image source={require("../../../../assets/bell.png")} />
              </TouchableOpacity>
            </ProfileRow>

            <ProfileRow>
              <TouchableOpacity
                onPress={() => navigation.navigate("socialMediaSearch")}
              >
                <SearchIcon color="#4E4E4E" size={20} />
              </TouchableOpacity>
            </ProfileRow>
          </Icon>
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
              So I came across this awesome brands that sells ankara bracelets
              and pendants, they looked really awesome!!
            </ProfileContent>
          </ProfileHandleRow>
          <ProfileHandleRow>
            <TouchableOpacity>
              <Dots
                style={{ top: 10, right: 50 }}
                name="dots-three-vertical"
                color="#fff"
                size={15}
              />
            </TouchableOpacity>
          </ProfileHandleRow>
        </ProfileWrapper>

        <ProfileBody
          style={{
            marginBottom: 30,
          }}
        >
          <ProfileLove>
            <TouchableOpacity
              style={{
                left: 40,
              }}
            >
              <Image source={require("../../../../assets/like.png")} />
            </TouchableOpacity>
          </ProfileLove>
          <ProfileLove>
            <TouchableOpacity
              style={{
                left: 40,
              }}
            >
              <Image source={require("../../../../assets/love.png")} />
            </TouchableOpacity>
          </ProfileLove>
          <ProfileRow>
            <TouchableOpacity
              style={{
                left: 30,
              }}
            >
              <Image source={require("../../../../assets/new.png")} />
            </TouchableOpacity>
          </ProfileRow>
          <ProfileRow>
            <TouchableOpacity
              style={{
                left: 20,
              }}
            >
              <Image source={require("../../../../assets/unlike.png")} />
            </TouchableOpacity>
          </ProfileRow>
        </ProfileBody>
        <ProfileJetImage source={require("../../../../assets/jet.png")}>
          <ProfileBody>
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
                    paddingLeft: ww(174),
                  }}
                  name="dots-three-vertical"
                  color="#fff"
                  size={15}
                />
              </TouchableOpacity>
            </ProfileHandleRow>
          </ProfileBody>

          <ProfileIconView>
            <ProfileBody>
              <ProfileLove>
                <TouchableOpacity>
                  <Image source={require("../../../../assets/like.png")} />
                </TouchableOpacity>
              </ProfileLove>
              <ProfileLove>
                <TouchableOpacity>
                  <Image source={require("../../../../assets/love.png")} />
                </TouchableOpacity>
              </ProfileLove>
              <ProfileLove>
                <TouchableOpacity>
                  <Image source={require("../../../../assets/new.png")} />
                </TouchableOpacity>
              </ProfileLove>
              <ProfileLove>
                <TouchableOpacity>
                  <Image source={require("../../../../assets/unlike.png")} />
                </TouchableOpacity>
              </ProfileLove>
            </ProfileBody>
          </ProfileIconView>
          <ProfileIconText>
            These guys makes the best {"\n"}
            confectionaries I've seen in a {"\n"}
            while.
          </ProfileIconText>
        </ProfileJetImage>

        <ProfileBody>
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
                marginLeft: 50,
                top: 10,
              }}
            >
              <Dots
                style={{ paddingLeft: ww(100) }}
                name="dots-three-vertical"
                color="#fff"
                size={15}
              />
            </TouchableOpacity>
          </ProfileHandleRow>
        </ProfileBody>
        <ProfileImageView>
          <ProfileImagePost source={require("../../../../assets/gold.png")} />
        </ProfileImageView>

        <ProfileBody
          style={{
            left: 20,
          }}
        >
          <ProfileLove>
            <TouchableOpacity>
              <Image source={require("../../../../assets/like.png")} />
            </TouchableOpacity>
          </ProfileLove>
          <ProfileLove>
            <TouchableOpacity>
              <Image source={require("../../../../assets/love.png")} />
            </TouchableOpacity>
          </ProfileLove>
          <ProfileLove>
            <TouchableOpacity>
              <Image source={require("../../../../assets/new.png")} />
            </TouchableOpacity>
          </ProfileLove>
          <ProfileLove>
            <TouchableOpacity>
              <Image source={require("../../../../assets/unlike.png")} />
            </TouchableOpacity>
          </ProfileLove>
        </ProfileBody>
        <ProfileImageView>
          <ProfileIconText>
            So I came across this awesome {"\n"}
            brand that sells ankara bracelets {"\n"}
            and pendants, they looked really {"\n"}
            awesome!!!
          </ProfileIconText>
        </ProfileImageView>
      </LayoutScrollView>
      <View style={styles.add}>
        <View style={styles.plus}>
          <ProfileInput>
            <TouchableOpacity>
              <ProfileInputBox>
                <ProfileInputImage
                  source={require("../../../../assets/extra.png")}
                />
              </ProfileInputBox>
            </TouchableOpacity>
          </ProfileInput>
          <TouchableOpacity>
            <ProfileCircleImage
              source={require("../../../../assets/Chat.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: ww(20),
    flex: 1,
  },
  add: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    zIndex: 10,
  },
  plus: {
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#00000001",
  },
});
