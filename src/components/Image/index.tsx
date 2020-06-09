import React, { useEffect, useState, useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { SvgXml } from 'react-native-svg';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

interface ImageProps {
  pokemon: {
    id: number;
    sprites: {
      front_default: string;
    };
  };
  width: number;
  height: number;
}

const Image: React.SFC<ImageProps> = ({
  pokemon,
  width,
  height,
}: ImageProps) => {
  const [image, setImage] = useState<string>('');
  const [imageFallback, setImageFallback] = useState<boolean>(false);

  const loadImage = useCallback(async () => {
    const imageData = await AsyncStorage.getItem(`pokemon-${pokemon.id}`);
    if (imageData) {
      setImage(imageData);
      return;
    }

    if (imageFallback) return;

    const response = await axios
      .get(
        `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg`,
      )
      .catch(() => {
        setImageFallback(true);
      });

    if (!response) {
      return;
    }

    setImage(response.data);
  }, [pokemon]);

  useEffect(() => {
    loadImage();

    return () => setImageFallback(true);
  }, []);

  const storeImage = useCallback(async () => {
    try {
      await AsyncStorage.setItem(`pokemon-${pokemon.id}`, image);
    } catch (e) {
      console.log(`storeImage(): ${pokemon.id} - ${e}`);
    }
  }, [image, pokemon]);

  useEffect(() => {
    if (image.length <= 0) return;
    storeImage();
  }, [image]);

  return (
    <>
      {image.length > 0 && <SvgXml xml={image} width={width} height={height} />}
      {imageFallback && (
        <ImageBackground
          resizeMode="cover"
          style={{
            width,
            height,
          }}
          source={{ uri: pokemon.sprites.front_default }}
        />
      )}
    </>
  );
};

export default Image;
