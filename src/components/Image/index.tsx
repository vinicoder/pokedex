import React, { useEffect, useState, useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { SvgXml } from 'react-native-svg';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

interface ImageProps {
  pokemon: {
    name: string;
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
    if (image.length > 0) return;
    if (imageFallback) return;

    const imageData = await AsyncStorage.getItem(
      `@Pokemon:${pokemon.name}:image`,
    );

    if (imageData) {
      setImage(imageData);
      return;
    }

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

    const { data } = response;
    await AsyncStorage.setItem(`@Pokemon:${pokemon.name}:image`, data);
    setImage(data);
  }, [pokemon, imageFallback, image]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

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
