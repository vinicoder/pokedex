import styled from 'styled-components/native';
import { transparentize } from 'polished';
import { pokemonTypes, fontFamily } from '../../styles/global';

interface ContainerProps {
  type: string;
}

export const Container = styled.ImageBackground<ContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.type ? pokemonTypes[props.type].colors.background : '#CCC'};
  border-radius: 10px;
  margin: 30px 40px 0 40px;
  padding: 20px;
  box-shadow: 0px 10px 20px
    ${(props) =>
      props.type
        ? transparentize(0.6, pokemonTypes[props.type].colors.background)
        : transparentize(0.6, '#CCC')};
`;

export const Info = styled.View`
  flex: 1;
`;

export const Number = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: ${fontFamily.bold};
  color: rgba(23, 23, 27, 0.6);
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
