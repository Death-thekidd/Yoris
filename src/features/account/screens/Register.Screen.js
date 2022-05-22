import React, { useState } from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native'
import { Icon } from '../../../../assets/Layer.png'

import {


  Cover,
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
  DatePickerStyle,

} from '../components/account.styles'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component';
import DatePicker from "react-native-datepicker";
import moment from "moment";

export default function RegisterScreen({ navigation }) {
  const yourDate = new Date();
  const NewDate = moment(yourDate, "DD-MM-YYYY");
  const [fromdate, setfromdate] = useState(NewDate);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useState(false);
  return (

    <AccountBackground>



      <AuthInput
        label="Full name "
        value={name}
        textContentType="name"
        autoCapitalize="none"
        onChangeText={(u) => setName(u)}
      />

      <Spacer size="large">
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
      </Spacer>

      <Spacer size="large">
        <AuthInput
          label="Phone Number"
          value={phone}
          textContentType="phone"
          keyboardType="phone-number"
          autoCapitalize="none"
          onChangeText={(u) => setPhone(u)}
        />
      </Spacer>

      <Spacer size="large">
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
      </Spacer>
      <Spacer size="large">
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
      </Spacer>



      <DatePicker
        style={styles.datePickerStyle}
        date={fromdate} // Initial date from state
        mode="date" // The enum of date, datetime and time
        placeholder="select date"
        format="DD-MM-YYYY"
        // iconComponent={ }
        minDate={new Date(Date.now())}
        maxDate={new Date(Date.now() + 24 * 60 * 60 * 1000 * 7 * 4 * 3)}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            //display: 'none',
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,



          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0,

          },
        }}
        onDateChange={(date) => {
          setfromdate(date);
        }}
      />



      {error && (
        <ErrorContainer size="large">
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      <Spacer size="large">
        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => console.log(name, email, password, repeatedPassword, fromdate)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </Spacer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>

    </AccountBackground>


  )
}
const styles = StyleSheet.create({

  datePickerStyle: {
    width: 300,
    height: 48,
    borderColor: "#ccc",
    borderRadius: 5,
    borderWidth: 0,
    alignItems: "center",
    backgroundColor: "#4E4E4E",
    position: 'absolute',
    top: 390

  },



})