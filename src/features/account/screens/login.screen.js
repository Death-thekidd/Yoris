
import React, { useState } from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';

import {


    Cover,
    AccountBackground,
    AccountContainer,
    AuthButton,
    AuthInput,
    ErrorContainer,
    Title,
} from '../components/account.styles'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component';


export default function LoginScreen({ navigation }) {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { onLogin, error, isLoading } = useState(true);
    return (

        <AccountBackground>
            <Cover source={require('../../../../assets/Yoris.png')} />

            <AuthInput
                label='Email'
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                mode='outlined'

                onChangeText={(u) => setEmail(u)}

            />
            <Spacer size="xl">

                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
            </Spacer>

            {error && (
                <ErrorContainer size="large">
                    <Text variant="error">{error}</Text>
                </ErrorContainer>
            )}

            <Spacer size="large">
                {!isLoading ? (
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => console.log(email, password)}
                    >
                        Login
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

        </AccountBackground >
    )
}