import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { SvgXml } from 'react-native-svg';
import axios from 'axios';
import api from '../../services/api';
import { formatNumber } from '../../utils';

import {
  Container,
  Info,
  ImageContainer,
  Image,
  Number,
  Name,
  Badges,
} from './styles';

import bgItem from '../../assets/item/bg.png';
import Badge from '../Badge';

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
  const [image, setImage] = useState<string>('');
  const [imageFallback, setImageFallback] = useState<boolean>(false);

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

  useEffect(() => {
    if (image) return;
    if (!pokemonData.id) return;

    async function loadImage() {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemonData.id}.svg`,
        );
        setImage(response.data);
      } catch (e) {
        setImageFallback(true);
        console.log(`loadImage(): ${pokemonData.id} - ${e}`);
      }
    }

    loadImage();
  }, [pokemonData.id, image]);

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
            {image.length > 0 && (
              <SvgXml xml={image} width={130} height={130} />
            )}
            {imageFallback && (
              <Image source={{ uri: pokemonData.sprites.front_default }} />
            )}
          </ImageContainer>
        </Container>
      )}
    </>
  );
};

export default Item;
