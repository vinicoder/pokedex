import styled from 'styled-components/native';
import { fontFamily } from '../../styles/global';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.color || '#CCC'};
  border-radius: 3px;
  padding: 5px;
  margin-right: 5px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  font-family: ${fontFamily.regular};
  text-transform: capitalize;
  margin-left: 5px;
`;
