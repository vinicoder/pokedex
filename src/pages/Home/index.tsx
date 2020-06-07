import React from 'react';

import { SafeAreaView } from 'react-native';
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
  </Container>
);

export default Home;
