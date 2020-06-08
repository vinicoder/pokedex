import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import { formatNumber } from '../../utils';

import {
  Container,
  Info,
  ImageContainer,
  Number,
  Name,
  Badges,
} from './styles';

import bgItem from '../../assets/item/bg.png';
import Badge from '../Badge';

import Image from '../Image';

interface Props {
  url: string;
}

interface PokemonProps {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const Item: React.FC<Props> = ({ url }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<PokemonProps>(
    {} as PokemonProps,
  );

  useEffect(() => {
    if (pokemonData.id) return;

    async function loadPokemon() {
      try {
        const response = await api.get(url);
        setPokemonData(response.data);
      } catch (e) {
        console.log(`loadPokemon(): ${e}`);
      }

      setLoading(false);
    }

    loadPokemon();
  }, [url, pokemonData]);

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Container source={bgItem} type={pokemonData.types[0].type.name}>
          <Info>
            <Number>{formatNumber(pokemonData.id)}</Number>
            <Name>{pokemonData.name}</Name>
            <Badges>
              {pokemonData.types.map((badge) => (
                <Badge key={badge.type.name} type={badge.type.name} />
              ))}
            </Badges>
          </Info>
          <ImageContainer>
            <Image pokemon={pokemonData} width={130} height={130} />
          </ImageContainer>
        </Container>
      )}
    </>
  );
};

export default Item;
