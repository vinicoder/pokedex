import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  Info,
  ImageContainer,
  Image,
  Number,
  Name,
  Badges,
  Badge,
  BadgeTitle,
} from './styles';

import IconGrass from '../../assets/icons/type-grass.svg';

interface Props {
  name: string;
}

interface DataProps {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
}

const Item: React.FC<Props> = ({ name }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataProps>({} as DataProps);

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Container>
          <Info>
            <Number>#001</Number>
            <Name>{name}</Name>
            <Badges>
              <Badge>
                <IconGrass />
                <BadgeTitle>Grass</BadgeTitle>
              </Badge>
            </Badges>
          </Info>
          <ImageContainer>
            <Image source={{ uri: data.sprites.front_default }} />
          </ImageContainer>
        </Container>
      )}
    </>
  );
};

export default Item;
