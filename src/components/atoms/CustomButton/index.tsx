import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

interface IButton {
  type: String;
  title: String;
  onPress: Function;
}

const Container = styled(TouchableOpacity)`
  height: 45px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${(props) => (props.type ? 'white' : '#0BCAD4')};
`;

const TextCustom = styled(Text)`
  text-align: center;
  color: ${(props) => (props.type ? 'black' : 'white')};
  font-size: 18px;
`;

const CustomButton = ({type, title, onPress}: IButton) => {
  return (
    <Container onPress={onPress} type={type === 'secondary' ? true : false}>
      <TextCustom type={type === 'secondary' ? true : false}>
        {title}
      </TextCustom>
    </Container>
  );
};

export default CustomButton;