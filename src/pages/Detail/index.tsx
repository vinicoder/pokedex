import React from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { pokemonTypes } from '../../styles/global';
import { PokemonProps, formatNumber, formatText } from '../../utils';

import {
  Container,
  Header,
  TextBackground,
  Navigation,
  HeaderContent,
  Info,
  Number,
  Name,
  Badges,
  Content,
  ContentWrapper,
  ContentTitle,
  ContentStats,
  Stat,
  StatName,
  StatValue,
  Slot,
} from './styles';

import IconReturn from '../../assets/icons/arrow-left.svg';

import Image from '../../components/Image';
import Badge from '../../components/Badge';

interface DetailParams {
  route: {
    params: {
      pokemon: PokemonProps;
    };
  };
}

interface SlotsParams {
  total: number;
  type: string;
}

const Slots: React.FC<SlotsParams> = ({ total, type }: SlotsParams) => {
  const elements = [];
  for (let i = 0; i < total; i++) {
    const Icon = pokemonTypes[type].icon.default;
    elements.push(
      <Slot type={type} key={i}>
        <Icon width={10} height={10} />
      </Slot>,
    );
  }
  return <>{elements}</>;
};

const Detail: React.FC<DetailParams> = ({ route }: DetailParams) => {
  const navigation = useNavigation();
  const { pokemon } = route.params;

  const handleReturn = () => navigation.goBack();

  return (
    <Container type={pokemon.types[0].type.name}>
      <SafeAreaView>
        <Header>
          <TextBackground type={pokemon.types[0].type.name}>
            {pokemon.name}
          </TextBackground>
          <Navigation>
            <TouchableOpacity
              onPress={handleReturn}
              activeOpacity={0.7}
              hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
            >
              <IconReturn width={25} height={25} />
            </TouchableOpacity>
          </Navigation>
          <HeaderContent>
            <Image pokemon={pokemon} width={130} height={130} />
            <Info>
              <Number>{formatNumber(pokemon.id)}</Number>
              <Name>{pokemon.name}</Name>
              <Badges>
                {pokemon.types.map((badge) => (
                  <Badge key={badge.type.name} type={badge.type.name} />
                ))}
              </Badges>
            </Info>
          </HeaderContent>
        </Header>
      </SafeAreaView>
      <Content>
        <ContentWrapper>
          <ContentTitle type={pokemon.types[0].type.name}>
            Pokédex Data
          </ContentTitle>
          <ContentStats>
            <Stat>
              <StatName>HEIGHT</StatName>
              <StatValue>{pokemon.height}</StatValue>
            </Stat>
            <Stat>
              <StatName>WEIGHT</StatName>
              <StatValue>{pokemon.weight}</StatValue>
            </Stat>
          </ContentStats>
          <ContentTitle type={pokemon.types[0].type.name}>
            Abilities
          </ContentTitle>
          <ContentStats>
            {pokemon.abilities.map((ability) => (
              <Stat key={ability.ability.name}>
                <StatName>
                  {`${formatText(ability.ability.name)} ${
                    ability.is_hidden ? '(hidden ability)' : ''
                  }`}
                </StatName>
                <Slots total={ability.slot} type={pokemon.types[0].type.name} />
              </Stat>
            ))}
          </ContentStats>
          <ContentTitle type={pokemon.types[0].type.name}>
            Base Stats
          </ContentTitle>
          <ContentStats>
            {pokemon.stats.map((stat) => (
              <Stat key={stat.stat.name}>
                <StatName>{formatText(stat.stat.name)}</StatName>
                <StatValue>{stat.base_stat}</StatValue>
              </Stat>
            ))}
          </ContentStats>
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default Detail;
