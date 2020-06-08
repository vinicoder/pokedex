import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import api from '../../services/api';

import {
  Header,
  Filters,
  ButtonFilter,
  Title,
  Description,
  FormSearch,
  InputSearch,
} from './styles';

import bgImage from '../../assets/home/bg.png';
import IconGeneration from '../../assets/icons/generation.svg';
import IconSort from '../../assets/icons/sort.svg';
import IconFilter from '../../assets/icons/filter.svg';
import IconSearch from '../../assets/icons/search.svg';

import Item from '../../components/Item';

interface DataProps {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get('pokemon');
        setData(response.data.results);
      } catch (e) {
        console.log(`loadPokemons: ${e}`);
      }
    }

    loadPokemons();
  }, []);

  const ListHeader = () => (
    <Header source={bgImage}>
      <Filters>
        <ButtonFilter>
          <IconGeneration />
        </ButtonFilter>
        <ButtonFilter>
          <IconSort />
        </ButtonFilter>
        <ButtonFilter>
          <IconFilter />
        </ButtonFilter>
      </Filters>
      <Title>Pokédex</Title>
      <Description>
        Search for Pokémon by name or using the National Pokédex number.
      </Description>
      <FormSearch>
        <IconSearch width={20} height={20} />
        <InputSearch placeholder="What Pokémon are you looking for?" />
      </FormSearch>
    </Header>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item url={item.url} />}
      keyExtractor={(item) => item.name}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={ListHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;
