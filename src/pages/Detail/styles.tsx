import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import SvgText from '../../styles/svgText';
import { pokemonTypes, fontFamily } from '../../styles/global';

interface ContainerProps {
  type?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${(props) =>
    props.type ? pokemonTypes[props.type].colors.background : '#CCC'};
`;

export const Header = styled.View`
  padding: 40px;
`;

export const TextBackground = styled(SvgText)`
  width: ${`${Dimensions.get('window').width}px`};
  position: absolute;
  top: 40px;
  left: 0;
  opacity: 0.3;
`;

export const Navigation = styled.View``;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const Number = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${fontFamily.bold};
  color: rgba(23, 23, 27, 0.6);
`;

export const Name = styled.Text`
  color: #fff;
  font-family: ${fontFamily.bold};
  font-size: 32px;
  line-height: 38px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const Badges = styled.View`
  flex-direction: row;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  padding: 40px;
`;

export const ContentTitle = styled.Text<ContainerProps>`
  color: ${(props) =>
    props.type ? pokemonTypes[props.type].colors.featured : '#CCC'};
  font-size: 18px;
  line-height: 20px;
  font-family: ${fontFamily.bold};
  margin-bottom: 20px;
`;

export const ContentStats = styled.View`
  margin-bottom: 40px;
`;

export const Stat = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

export const StatName = styled.Text`
  flex: 1;
  font-family: ${fontFamily.regular};
  font-size: 12px;
  line-height: 16px;
  color: #17171b;
`;

export const StatValue = styled.Text`
  font-family: ${fontFamily.bold};
  font-size: 16px;
  line-height: 19px;
  color: #747476;
`;

export const Slot = styled.View<ContainerProps>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  background-color: ${(props) =>
    props.type ? pokemonTypes[props.type].colors.featured : '#CCC'};
`;
