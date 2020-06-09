import React from 'react';
import { View } from 'react-native';
import { Svg, Text, Defs, LinearGradient, Stop, G } from 'react-native-svg';
import { fontFamily, pokemonTypes } from './global';

interface TextParams {
  children: string;
  type: string;
}

const SvgText: React.FC<TextParams> = ({
  children,
  type,
  ...rest
}: TextParams) => {
  return (
    <View {...rest}>
      <Svg height="74" width="100%">
        <Defs>
          <LinearGradient id="gradient" x2="0%" y2="100%">
            <Stop stopColor="#FFFFFF" offset={0} />
            <Stop
              stopColor={pokemonTypes[type].colors.background || '#CCC'}
              offset="1"
            />
          </LinearGradient>
        </Defs>
        <G>
          <Text
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={2}
            fontSize="100"
            fontWeight="bold"
            x="50%"
            y="72"
            textAnchor="middle"
            fontFamily={fontFamily.regular}
          >
            {children.toUpperCase()}
          </Text>
        </G>
      </Svg>
    </View>
  );
};

export default SvgText;
