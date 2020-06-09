import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { formatNumber, PokemonProps } from '../../utils';

import {
  Container,
  Info,
  ImageContainer,
  Number,
  Name,
  Badges,
} from './styles';

import Badge from '../Badge';
import Image from '../Image';

interface Props {
  url: string;
}

const Item: React.FC<Props> = ({ url }: Props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<PokemonProps>(
    {} as PokemonProps,
  );

  const loadPokemon = useCallback(async () => {
    try {
      const response = await api.get(url);
      setPokemonData(response.data);
    } catch (e) {
      console.log(`loadPokemon(): ${e}`);
    }

    setLoading(false);
  }, [url]);

  useEffect(() => {
    if (pokemonData.id) return;

    loadPokemon();
  }, [pokemonData]);

  const handleToDetail = () =>
    navigation.navigate('detail', { pokemon: pokemonData });

  return (
    <>
      {loading ? (
        <Container>
          <ActivityIndicator />
        </Container>
      ) : (
        <TouchableOpacity onPress={handleToDetail} activeOpacity={0.7}>
          <Container type={pokemonData.types[0].type.name}>
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
        </TouchableOpacity>
      )}
    </>
  );
};

export default Item;
