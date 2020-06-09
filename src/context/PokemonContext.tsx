import React, { createContext, useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { PokemonProps } from '../utils';
import api from '../services/api';

interface loadParams {
  url: string;
  callback(): void;
}

interface PokemonContextData {
  pokemonData: PokemonProps;
  loadPokemon(data: loadParams): Promise<void>;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

interface PokemonProviderData {
  children: Element;
  name: string;
}

export const PokemonProvider: React.FC<PokemonProviderData> = ({
  children,
  name,
}: PokemonProviderData) => {
  const [pokemonData, setPokemonData] = useState<PokemonProps>(
    {} as PokemonProps,
  );

  const setData = useCallback(async () => {
    await AsyncStorage.getItem(`@Pokemon:${name}`, (_, result) => {
      if (result) {
        const data = JSON.parse(result);
        setPokemonData(data);
      }
    });
  }, [name]);

  const loadPokemon = useCallback(
    async ({ url, callback }: loadParams) => {
      await setData();

      if (pokemonData.id) return;

      const { data } = await api.get(url);
      await AsyncStorage.setItem(
        `@Pokemon:${name}`,
        JSON.stringify(data),
        async () => {
          await setData();
          callback();
        },
      );
    },
    [setData, name, pokemonData],
  );

  return (
    <PokemonContext.Provider value={{ pokemonData, loadPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
