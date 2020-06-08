import styled from 'styled-components/native';
import { pokemonTypes, fontFamily } from '../../styles/global';

interface ContainerProps {
  type: string;
}

export const Container = styled.ImageBackground<ContainerProps>`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.type ? pokemonTypes[props.type].colors.background : '#CCC'};
  border-radius: 10px;
  padding: 20px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Number = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: ${fontFamily.bold};
`;

export const Name = styled.Text`
  color: #fff;
  font-family: ${fontFamily.bold};
  font-size: 26px;
  line-height: 31px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const Badges = styled.View`
  flex-direction: row;
`;

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
