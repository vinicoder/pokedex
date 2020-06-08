import { SvgProps } from 'react-native-svg';

interface PokemonTypesProps {
  [name: string]: {
    colors: {
      featured: string;
      background: string;
    };
    icon: {
      default: React.FC<SvgProps>;
    };
  };
}

interface FontProps {
  [name: string]: string;
}

export const fontFamily: FontProps = {
  regular: 'SFProDisplay-Regular',
  medium: 'SFProDisplay-Medium',
  bold: 'SFProDisplay-Bold',
};

export const pokemonTypes: PokemonTypesProps = {
  bug: {
    colors: {
      featured: '#8CB230',
      background: '#8BD674',
    },
    icon: require('../assets/icons/types/Bug.svg'),
  },
  dark: {
    colors: {
      featured: '#58575F',
      background: '#6F6E78',
    },
    icon: require('../assets/icons/types/Dark.svg'),
  },
  dragon: {
    colors: {
      featured: '#0F6AC0',
      background: '#7383B9',
    },
    icon: require('../assets/icons/types/Dragon.svg'),
  },
  electric: {
    colors: {
      featured: '#EED535',
      background: '#F2CB55',
    },
    icon: require('../assets/icons/types/Electric.svg'),
  },
  fairy: {
    colors: {
      featured: '#ED6EC7',
      background: '#EBA8C3',
    },
    icon: require('../assets/icons/types/Fairy.svg'),
  },
  fighting: {
    colors: {
      featured: '#D04164',
      background: '#EB4971',
    },
    icon: require('../assets/icons/types/Fighting.svg'),
  },
  fire: {
    colors: {
      featured: '#FD7D24',
      background: '#FFA756',
    },
    icon: require('../assets/icons/types/Fire.svg'),
  },
  flying: {
    colors: {
      featured: '#748FC9',
      background: '#83A2E3',
    },
    icon: require('../assets/icons/types/Flying.svg'),
  },
  ghost: {
    colors: {
      featured: '#556AAE',
      background: '#8571BE',
    },
    icon: require('../assets/icons/types/Ghost.svg'),
  },
  grass: {
    colors: {
      featured: '#62B957',
      background: '#8BBE8A',
    },
    icon: require('../assets/icons/types/Grass.svg'),
  },
  ground: {
    colors: {
      featured: '#DD7748',
      background: '#F78551',
    },
    icon: require('../assets/icons/types/Ground.svg'),
  },
  ice: {
    colors: {
      featured: '#61CEC0',
      background: '#91D8DF',
    },
    icon: require('../assets/icons/types/Ice.svg'),
  },
  normal: {
    colors: {
      featured: '#9DA0AA',
      background: '#B5B9C4',
    },
    icon: require('../assets/icons/types/Normal.svg'),
  },
  poison: {
    colors: {
      featured: '#A552CC',
      background: '#9F6E97',
    },
    icon: require('../assets/icons/types/Poison.svg'),
  },
  psychic: {
    colors: {
      featured: '#EA5D60',
      background: '#FF6568',
    },
    icon: require('../assets/icons/types/Psychic.svg'),
  },
  rock: {
    colors: {
      featured: '#BAAB82',
      background: '#D4C294',
    },
    icon: require('../assets/icons/types/Rock.svg'),
  },
  steel: {
    colors: {
      featured: '#417D9A',
      background: '#4C91B2',
    },
    icon: require('../assets/icons/types/Steel.svg'),
  },
  water: {
    colors: {
      featured: '#4A90DA',
      background: '#58ABF6',
    },
    icon: require('../assets/icons/types/Water.svg'),
  },
};
