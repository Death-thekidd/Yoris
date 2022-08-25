import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LayoutScrollView } from "../../../components/Layout";
import { useDispatch } from "react-redux";
import { login } from "./../../../actions/auth";
import { Pressable, Text } from "react-native";
import {
  RegisterHeader,
  RegisterBackIcon,
  RegisterSection,
  RegisterInput,
  RegisterPassword,
  RegisterUser,
  RegisterLink,
} from "../components/account.styles";
import Header from "../../../components/Header";
import { WelcomeContainer } from "../components/welcome.styles";
import { useTogglePasswordVisibility } from "./../toggle/index";

export default function SignIn({ navigation }) {
  // const [email_, setEmail] = useState(email);
  // const [password_, setPassword] = useState(password);
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();
  const [text, setText] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const isValidObjField = (obj) => {
    return Object.values(obj).every((value) => value.trim());
  };

  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater("");
    }, 2500);
  };

  const isValidEmail = (value) => {
    const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (value.match(regEx)) return true;
    else {
      return false;
    }
  };

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    // we will accept if all the fields have value
    if (!isValidObjField(userInfo))
      return updateError("Require all fields", setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError("Password is less than 8 characters!", setError);

    return true;
  };

  const onLogin = () => {
    if (isValidForm()) {
      // submit form
    }
    let user = {
      email: userInfo.email,
      password: userInfo.password,
    };

    dispatch(login(user))
      .then((response) => {
        if (response.status == "success") {
          navigation.replace("Tabs");
        }
      })
      .catch((error) => {
        navigation.replace("signIn");
      });
  };

  return (
    <LayoutScrollView>
      <WelcomeContainer>
        <RegisterHeader>
          <Header
            iconLeft={require("../../../../assets/backIcon.png")}
            onLeftIconPress={() => goBack()}
            onRightIconPress={() => navigate("logisticsMain")}
          />
        </RegisterHeader>
        <RegisterBackIcon source={require("../../../../assets/Yoris.png")} />
        <RegisterSection>
          {error ? (
            <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
              {error}
            </Text>
          ) : null}
          <RegisterInput
            type="text"
            autoCapitalize="none"
            value={email}
            onChangeText={(value) => {
              handleOnChangeText(value, "email");
              setEmail(value);
            }}
            placeholder={"Email"}
            placeholderTextColor={"#fff"}
            setText={setText}
          />
          <RegisterInput
            type="text"
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(value) => {
              handleOnChangeText(value, "password");
              setPassword(value);
            }}
            textContentType="newPassword"
            secureTextEntry={handlePasswordVisibility}
            enablesReturnKeyAutomatically
            placeholder={"Password"}
            placeholderTextColor={"#fff"}
            setText={setText}
          />
          <Pressable onPress={() => navigation.navigate("forgotPassword")}>
            <RegisterPassword>Forgotten Password?</RegisterPassword>
          </Pressable>
          <RegisterUser onPress={onLogin}>SIGN IN</RegisterUser>
          <RegisterLink>SIGN UP</RegisterLink>
        </RegisterSection>
      </WelcomeContainer>
    </LayoutScrollView>
  );
}
