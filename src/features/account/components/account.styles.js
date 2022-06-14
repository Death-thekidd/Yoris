import React from 'react'

import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";





export const AccountBackground = styled.View`

flex: 1;
align-items: center;
justify-content: center;
background: #000000

`;

export const DatePickerStyle = styled.View`
width: "100%",
marginTop: 10,
borderColor: "#ccc",
borderRadius: 3,
borderWidth: 0,
alignItems: "center",
backgroundColor: "#fff",
padding: 5,

`




export const Cover = styled.Image`

  width: 140px;
  height: 100px;
  bottom:80px


`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:#000000;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,

})`
  padding: ${(props) => props.theme.space[1]};
height: 48px
width: 300px
bottom: -30px
`;

export const AuthInput = styled(TextInput)`
background-color: #4E4E4E
  width: 300px;
  boxShadow: 0px 4px 4px rgba(0,0,0,25)
  height: 48px
  border-radius:5px
  bottom: 40px
`;

export const Title = styled(Text)`
  font-size: 30px;
  color:#C3AD60
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;







// export default function loginscreen() {
//   return (
//     <View style={styles.container}>


//       <View>
//         <Image style={styles.img} source={require('../../../../assets/YorisIcon1.png')} />
//       </View>


//       <View style={styles.inputView}>
//         <TextInput style={styles.inputText}
//           placeholder='Email'
//           placeholderTextColor={'#ffff'} />
//       </View>

//       <View style={styles.inputView}>
//         <TextInput style={styles.inputText}
//           placeholder='Password'
//           placeholderTextColor={'#ffff'} />
//       </View>

//       <TouchableOpacity>
//         <Text style={styles.forget}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>Login </Text>
//       </TouchableOpacity>


//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>Signup</Text>
//       </TouchableOpacity>

//     </View>

//   )
// }

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#000000',
//    color: '#ffffff',
//    alignItems: 'center',
//    justifyContent: 'center',
//
//  },
//
//  img: {
//    width: 150,
//    height: 150
//  },
//  inputext: {
//    height: 50,
//    fontSize: 20,
//    color: "white",
//  },
//  inputView: {
//    width: "80%",
//    borderRadius: 25,
//    height: 50,
//    marginBottom: 13,
//    justifyContent: "center",
//    padding: 20,
//    backgroundColor: '#4E4E4E',
//
//  },
//  loginBtn: {
//    width: "80%",
//    backgroundColor: "#C3AD60",
//    borderRadius: 25,
//    height: 50,
//    alignItems: "center",
//    justifyContent: "center",
//    marginTop: 13,
//    marginBottom: 15,
//  },
//
//  loginText: {
//    color: "white",
//    fontSize: 20,
//    fontWeight: "bold"
//  },
//
//  forget: {
//    backgroundColor: '#C3AD60',
//    color: '#ffffff',
//
//
//  },
//
//
//});
// export const AnimationWrapper = styled.View`
//   width: 100%;
//   height: 40%;
//   position: absolute;
//   top: 30px;
//   padding: ${(props) => props.theme.space[2]};
// `;


// okasy so any values that we are not giong to use immdiately we have to store this value
// so we not just naming variables because we have to but because we have to store used values so that would not be
// lost
// so we have to name the variable in memory to hold this data 



