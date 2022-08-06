import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text } from 'react-native';
import { LayoutScrollView } from '../../../components/Layout';
import { 
   RegisterContainer,
   RegisterHeader,
   RegisterSection,
   ImageLogo,
   RegisterInput,
   RegisterPrimary,
   RegisterDate,
   RegisterDrop,
   RegisterLine,
   RegisterBtn,
   RegisterSecondary,
   RegisterLink
} from '../components/account.styles';
import CustomDatePicker from '../datePicker/datepicker';
import Selector from '../selector/selector';
import Header from '../../../components/Header';
import { useTogglePasswordVisibility } from './../toggle/index';



const itemCategory = ["Industry"];
export default function RegisterUsers({ navigation }) {
   const { goBack, navigate } = useNavigation();
   const [text, setText] = useState("");
   const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
   const isValidObjField = (obj) => {
      return Object.values(obj).every(value => value.trim())
   }

   const updateError = (error, stateUpdater) => {
      stateUpdater(error);
      setTimeout(() => {
        stateUpdater('')
      }, 2500);
  }

  const isValidEmail = (value) => {
     const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     if (value.match(regEx)) return true;
       else {
        return false;
      }
  }

   const [ userInfo, setUserInfo] = useState({
      fullName: '',
      email: '',
      password: '',
      userName: '',
      createHandle: '',
      inputReferalCode: '',
   })
   const [error, setError] = useState('');
   const {fullName, email, password, userName, createHandle, inputReferalCode} = userInfo;
   const handleOnChangeText = (value, fieldName) => {
      setUserInfo({...userInfo, [fieldName]: value})
   };

   const isValidForm = () => {
      // we will accept only if all of the fields have value
      if(!isValidObjField(userInfo)) return updateError('Require all fields!', setError);
      //  if valid name with 3 or more characters 
      if(!fullName.trim() || fullName.length < 3) return updateError('Invalid full Name!', setError);
      // only valid email id is allowed 
      if(!isValidEmail(email)) return updateError('Invalid email!', setError);
      // password must have  8 or more characters 
      if(!password.trim() || password.length < 8) return updateError('Password is less than 8 characters!', setError);
      // if valid username with 3 or more characters
      if(!userName.trim() || userName.length < 3) return updateError('Invalid username!', setError);
      // if valid handleInput with 3 or more characters
      if(!createHandle.trim() || createHandle.length < 3) return updateError('Invalid handle!', setError);
      // referalCode must have 8 or more characters
      if(!inputReferalCode.trim() || inputReferalCode.length < 3) return updateError('Invalid referal code', setError);

      return true;
   } 
   
   const submitForm = () => {
       if(isValidForm())  {
         // submit form 
         console.log(userInfo);
       }
   }
  return (
   <LayoutScrollView>
    <RegisterContainer>
      <RegisterHeader>
       <Header
          iconLeft={require("../../../../assets/backIcon.png")}
          onLeftIconPress={() => goBack()}
         />
      </RegisterHeader>
       <RegisterSection>
          <ImageLogo source={require("../../../../assets/Yoris.png")} />
          {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center'}}>{error}</Text>: null }
          <RegisterInput
             type="text"
             autoCapitalize="none"
             value={fullName}
             onChangeText={(value) => handleOnChangeText(value, 'fullName')}
             placeholder={"Full Name"}
             placeholderTextColor={"#fff"}
             setText={setText}
          />
          <RegisterInput 
             type="text"
             autoCapitalize="none"
             value={email}
             onChangeText={(value) => handleOnChangeText(value, 'email')}
             placeholder={"Email"}
             placeholderTextColor={"#fff"}
             setText={setText}
           />
           <RegisterInput
              type="text"
              name="password"
              autoCapitalize="none"
              value={password}
              onChangeText={(value) => handleOnChangeText(value, 'password')}
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={handlePasswordVisibility}
              enablesReturnKeyAutomatically
              placeholder={"Create Password"}
              placeholderTextColor={"#fff"}
              setText={setText}
            />
            <RegisterPrimary>Date of birth:</RegisterPrimary>
           <RegisterDate>
            <CustomDatePicker 
               textStyle={{
                  backgroundColor: '#4E4E4E',
                  width: 300,
                  height: 48,
                  color: '#FFF',
                  borderRadius: 30,
                  padding: 10,
               }}
               onDateChange={(value) => console.log('Date changed: ' + value)}
               type="date"
            />
         </RegisterDate>
         <RegisterDrop>
            <Selector 
               data={itemCategory}
               buttonStyle={{
                width: 300,
                height: 48,
                borderRadius: 30,
               }}
               dropdownIconPosition={"right"}
               defaultButtonText="Industry"
               buttonTextStyle={{
                 fontSize: 20,
               }}
            />
         </RegisterDrop>
         <RegisterLine></RegisterLine>
         <RegisterInput
           type="text"
           autoCapitalize="none"
           value={userName}
           onChangeText={(value) => handleOnChangeText(value, 'userName')}
           placeholder={"User Name"}
           placeholderTextColor={"#fff"}
           setText={setText}
         />
          <RegisterInput 
           type="text"
           autoCapitalize="none"
           value={createHandle}
           onChangeText={(value) => handleOnChangeText(value, 'createHandle')}
           placeholder={"Create Handle"}
           placeholderTextColor={"#fff"}
           setText={setText}
         />
         <RegisterInput 
            type="text"
            autoCapitalize="none"
            value={inputReferalCode}
            onChangeText={(value) => handleOnChangeText(value, 'inputReferalCode')}
            placeholder={"Input referal code"}
            placeholderTextColor={"#fff"}
            setText={setText}
         />
         <RegisterBtn onPress={() => navigation.navigate('signIn')}>Create Account</RegisterBtn>
         <RegisterSecondary>Already have an account?</RegisterSecondary>
         <RegisterLink onPress={submitForm}>SIGN IN</RegisterLink>
       </RegisterSection>
    </RegisterContainer>
   </LayoutScrollView>
  );
};