import React from 'react';
import { Text, View} from 'react-native';

import { styleCard } from './style';

const CardHeader: React.FC = () => {
  return (
    <View style={styleCard.headerCard}>
      <Text style={styleCard.title}>Bulbasaur</Text>
      <Text style={styleCard.id}>#001</Text>
    </View>
  )
}

export default CardHeader;