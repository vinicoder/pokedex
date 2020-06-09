export const formatNumber = (number: number): string =>
  `#${String(number).padStart(3, '0')}`;

export const formatText = (text: string): string =>
  text.replace('-', ' ').toUpperCase();

export interface PokemonProps {
  name: string;
  id: number;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
}
