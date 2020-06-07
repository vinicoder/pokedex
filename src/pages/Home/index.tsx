import React from 'react';

import { SafeAreaView, FlatList } from 'react-native';
import {
  Container,
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

const tempData = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
];

const Home: React.FC = () => (
  <Container source={bgImage}>
    <SafeAreaView>
      <Header>
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
          <IconSearch />
          <InputSearch placeholder="What Pokémon are you looking for?" />
        </FormSearch>
      </Header>
    </SafeAreaView>
    <FlatList
      data={tempData}
      renderItem={({ item }) => <Item name={item.name} />}
      keyExtractor={(item) => item.name}
    />
  </Container>
);

export default Home;
