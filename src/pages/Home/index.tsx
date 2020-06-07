import React from 'react';

import { SafeAreaView } from 'react-native';
import {
  Container,
  Header,
  Filters,
  ButtonFilter,
  ButtonFilterIcon,
  Title,
  Description,
  FormSearch,
  InputSearch,
} from './styles';

import bgImage from '../../assets/home/bg.png';
import IconFilterGeneration from '../../assets/icons/generation.svg';
import IconFilterSort from '../../assets/icons/sort.svg';
import IconFilterFilter from '../../assets/icons/filter.svg';

const Home: React.FC = () => (
  <Container source={bgImage}>
    <SafeAreaView>
      <Header>
        <Filters>
          <ButtonFilter>
            <IconFilterGeneration />
          </ButtonFilter>
          <ButtonFilter>
            <IconFilterSort />
          </ButtonFilter>
          <ButtonFilter>
            <IconFilterFilter />
          </ButtonFilter>
        </Filters>
        <Title>Pokédex</Title>
        <Description>
          Search for Pokémon by name or using the National Pokédex number.
        </Description>
        <FormSearch>
          <InputSearch placeholder="What Pokémon are you looking for?" />
        </FormSearch>
      </Header>
    </SafeAreaView>
  </Container>
);

export default Home;
