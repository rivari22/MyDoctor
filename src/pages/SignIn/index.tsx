import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components';
import {ILSplash} from '../../assets';
import {CustomButton} from '../../components/atoms';

const Container = styled(View)`
  flex: 1;
  padding: 40px;
`;

const Title = styled(Text)`
  color: black;
  margin: 40px 0;
  font-size: 21px;
  font-family: 'Nunito-SemiBold';
  width: 163px;
`;

const NameInputText = styled(Text)`
  font-family: 'Nunito-Reguler';
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 6px;
  color: #7d8797;
`;

const InputText = styled(TextInput)`
  border-radius: 10px;
  border: 1px solid #d4d3d3;
  color: black;
`;

const TextHelper = styled(Text)`
  font-family: 'Nunito-Reguler';
  font-size: 12px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #7d8797;
  margin-top: 10px;
`;

const TextCreateAcc = styled(Text)`
  font-family: 'Nunito-SemiBold';
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: underline;
  color: #7d8797;
  margin-top: 30px;
`;

const SignIn = () => {
  return (
    <Container>
      <ILSplash />
      <Title>Masuk dan mulai berkonsultasi</Title>
      <View style={{marginBottom: 24}}>
        <NameInputText>Email Address</NameInputText>
        <InputText />
      </View>
      <View style={{marginBottom: 50}}>
        <NameInputText>Password</NameInputText>
        <InputText />
        <TextHelper>Forgot my password</TextHelper>
      </View>
      <View>
        <CustomButton
          onPress={() => alert('hello ini sign in btn')}
          title="Sign in"
          type="null"
        />
        <TouchableOpacity>
          <TextCreateAcc>Create New Account</TextCreateAcc>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SignIn;
