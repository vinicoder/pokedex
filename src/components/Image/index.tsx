import React, { useEffect, useState } from 'react';
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

const Image: React.FC<ImageProps> = ({
  pokemon,
  width,
  height,
}: ImageProps) => {
  const [image, setImage] = useState<string>('');
  const [imageFallback, setImageFallback] = useState<boolean>(false);

  useEffect(() => {
    async function loadImage() {
      try {
        const imageData = await AsyncStorage.getItem(`pokemon-${pokemon.id}`);
        if (imageData) {
          setImage(imageData);
          return;
        }

        const response = await axios.get(
          `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg`,
        );
        setImage(response.data);
      } catch (e) {
        setImageFallback(true);
        console.log(`loadImage(): ${pokemon.id} - ${e}`);
      }
    }

    loadImage();
  }, [pokemon]);

  useEffect(() => {
    if (image.length <= 0) return;

    const storeImage = async () => {
      try {
        await AsyncStorage.setItem(`pokemon-${pokemon.id}`, image);
      } catch (e) {
        console.log(`storeImage(): ${pokemon.id} - ${e}`);
      }
    };

    storeImage();
  }, [image, pokemon]);

  return (
    <>
      {image.length > 0 && <SvgXml xml={image} width={width} height={height} />}
      {imageFallback && (
        <ImageBackground
          resizeMode="cover"
          width={width}
          height={height}
          source={{ uri: pokemon.sprites.front_default }}
        />
      )}
    </>
  );
};

export default Image;
