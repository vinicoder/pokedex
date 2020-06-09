import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatNumber } from '../../utils';

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

import { PokemonContext } from '../../context/PokemonContext';

interface Props {
  url: string;
}

const Item: React.FC<Props> = ({ url }: Props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const { pokemonData, loadPokemon } = useContext(PokemonContext);

  useEffect(() => {
    if (!url) return;

    const callback = () => setLoading(false);
    loadPokemon({ url, callback });
  }, [url, loadPokemon]);

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
