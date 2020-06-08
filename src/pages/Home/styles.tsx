import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import { fontFamily } from '../../styles/global';

export const Header = styled.ImageBackground.attrs({
  imageStyle: { width: 414, height: 414, marginTop: -207 },
  resizeMode: 'center',
})`
  background-color: #fff;
  padding-bottom: 20px;
  padding-top: ${`${
    StatusBar.currentHeight ? 40 + StatusBar.currentHeight : 40
  }px`};
`;

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 35px;
  margin-top: 40px;
`;

export const ButtonFilter = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
  activeOpacity: 0.6,
})`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  line-height: 38px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: ${fontFamily.bold};
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  margin-bottom: 25px;
  font-family: ${fontFamily.regular};
`;

export const FormSearch = styled.View`
  background: #f2f2f2;
  border-radius: 10px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 0 25px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#747476',
})`
  flex: 1;
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  margin-left: 10px;
  font-family: ${fontFamily.regular};
`;
