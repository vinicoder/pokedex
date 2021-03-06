import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import api from '../../services/api';

import { Header, Title, Description, Loading } from './styles';

import bgImage from '../../assets/home/bg.png';

import Item from '../../components/Item';

import { PokemonProvider } from '../../context/PokemonContext';

interface DataProps {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataProps[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const limit = 20;

  async function loadPokemons() {
    try {
      setLoading(true);
      const response = await api.get('pokemon', {
        params: { offset, limit },
      });
      const { results, next } = response.data;

      const newData = [...data, ...results];

      setData(newData);

      if (!next) return;

      setOffset(Number(offset) + limit);
    } catch (e) {
      console.log(`loadPokemons: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  async function refreshList() {
    setRefreshing(true);
    setOffset(0);

    await loadPokemons();

    setRefreshing(false);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  const Loader = () => {
    if (!loading) return null;

    return (
      <Loading>
        <ActivityIndicator color="#EA5D60" />
      </Loading>
    );
  };

  const ListHeader = () => (
    <Header source={bgImage}>
      <Title>Pokédex</Title>
      <Description>
        Search for Pokémon by name or using the National Pokédex number.
      </Description>
    </Header>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <PokemonProvider name={item.name}>
          <Item url={item.url} />
        </PokemonProvider>
      )}
      keyExtractor={(item) => item.name}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={ListHeader}
      showsVerticalScrollIndicator={false}
      onEndReached={loadPokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={Loader}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refreshList}
          tintColor="#EA5D60"
        />
      }
    />
  );
};

export default Home;
