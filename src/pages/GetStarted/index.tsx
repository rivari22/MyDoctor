import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILBGGetStarted, ILSplash} from '../../assets';
import {CustomButton, Gap} from '../../components/atoms';

const GetStarted = (props: any) => {
  const navigateToSignIn = () => {
    props.navigation.navigate('SignIn');
  };

  return (
    <ImageBackground source={ILBGGetStarted} style={styles.container}>
      <View>
        <ILSplash />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <CustomButton
          title="Get Started"
          onPress={() => alert('hello')}
          type="null"
        />
        <Gap height={16} />
        <CustomButton
          type="secondary"
          title="Sign in"
          onPress={navigateToSignIn}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 91,
    fontSize: 28,
    // fontWeight: '600',
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
