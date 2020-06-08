import styled from 'styled-components/native';
import { colorTypes } from '../../styles';

interface ContainerProps {
  type: string;
}

export const Container = styled.ImageBackground<ContainerProps>`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.type ? colorTypes[props.type].background : '#CCC'};
  border-radius: 10px;
  padding: 20px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Number = styled.Text``;

export const Name = styled.Text``;

export const Badges = styled.View``;

export const Badge = styled.View``;

export const BadgeTitle = styled.Text``;

export const ImageContainer = styled.View`
  width: 130px;
  height: 130px;
  margin-top: -45px;
`;

export const Image = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  justifyContent: 'center',
})`
  flex: 1;
`;
