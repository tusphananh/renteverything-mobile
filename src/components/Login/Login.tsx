/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LogoIcon from '../../assets/icons/logo.svg';
import NextIcon from '../../assets/icons/next-btn.svg';
import {useAuthContext} from '../../contexts/authContext';
import {isPasswordValid} from '../../utils/inputValidator';
import Background from '../Background/Background';
import globalStyles, {placeHolderColor} from '../globalStyles';
import styles from './LoginStyles';
interface error {
  isError: boolean;
  message: string;
}

const initialErrors: error = {
  isError: false,
  message: '',
};

const Login: FC<{
  navigation: any;
}> = ({navigation}) => {
  const {authState, authLogin} = useAuthContext();
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<error>(initialErrors);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const login = async () => {
    if (isPasswordValid(password)) {
      if (authState.errors && authState.errors.length > 0) {
        console.log(authState.errors);
        setError({
          isError: true,
          message: authState.errors![0].message,
        });
      } else {
        setError(initialErrors);
      }

      await authLogin(phoneNumber, password);
    } else {
      setError({
        isError: true,
        message:
          'Password must be at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character',
      });
    }
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      setError(initialErrors);
    }

    if (
      !authState.isAuthenticated &&
      authState.errors &&
      authState.errors.length > 0
    ) {
      setError({
        isError: true,
        message: authState.errors![0].message,
      });
    }
  }, [authState]);

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.flex1}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <LogoIcon width={80} height={80} />
            <Text style={[globalStyles.h1, globalStyles.bold]}>Welcome !</Text>
            <Text style={globalStyles.subtitle}>
              Sign in to start
              <Text style={globalStyles.bold}>RentEverything</Text>
            </Text>
            <View
              style={[
                globalStyles.divider,
                {
                  width: '30%',
                },
              ]}
            />
            <TextInput
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              placeholder="Phone"
              keyboardType="phone-pad"
              placeholderTextColor={placeHolderColor}
              style={[globalStyles.textInput, {textAlign: 'center'}]}
            />
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              placeholderTextColor={placeHolderColor}
              style={[globalStyles.textInput, {textAlign: 'center'}]}
              secureTextEntry={true}
            />
            {error.isError && (
              <Text style={globalStyles.error}>{error.message}</Text>
            )}
            <Text
              onPress={() => {
                navigation.navigate('Register');
              }}
              style={globalStyles.subtitle}>
              Don't have an account{' '}
              <Text style={globalStyles.bold}>Register now</Text>
            </Text>

            <TouchableOpacity
              onPress={() => {
                login();
              }}>
              <NextIcon style={{marginTop: 20}} width={116} />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default Login;
