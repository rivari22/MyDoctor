import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSplash} from '../../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ILSplash style={styles.logo} />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 86,
    height: 75,
    marginBottom: 20,
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    color: 'black',
  },
});
