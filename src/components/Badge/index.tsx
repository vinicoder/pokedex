import React from 'react';

import { pokemonTypes } from '../../styles/global';
import { Container, Title } from './styles';

interface BadgeProps {
  type: string;
}

const Badge: React.FC<BadgeProps> = ({ type }: BadgeProps) => {
  const Icon = pokemonTypes[type].icon.default;

  return (
    <Container color={pokemonTypes[type].colors.featured}>
      <Icon width={15} height={15} />
      <Title>{type}</Title>
    </Container>
  );
};

export default Badge;
