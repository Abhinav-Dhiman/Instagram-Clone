/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import SignUpForm from '../../components/SignUpForm';
import {LinearGradient} from 'expo-linear-gradient';

const SignUpScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      <View style={{flex: 1}}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}>
          <StatusBar hidden={false} barStyle="dark-content" />

          <View style={styles.iconWrapper}>
            <Ionicons name="logo-instagram" size={100} />
            {/*
            <Image
              style={styles.logo1}
              source={require("../../../assets/instaText.png")}
            /> */}
          </View>
          <SignUpForm />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  iconWrapper: {
    marginHorizontal: 100,
    marginTop: 100,
    marginBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logo1: {
    height: 100,
    width: 220,
  },
});
export default SignUpScreen;
