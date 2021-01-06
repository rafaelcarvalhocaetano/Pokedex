import React from 'react';
import { Text, View } from 'react-native';
import TagTitle from '../tag-title';
import { styleCard } from './style';

const Card: React.FC = () => {

  return (
    <View style={styleCard.card}>
      <Text style={styleCard.title}>Bulbasaur</Text>
      <View>
        <TagTitle title={'Grass'}/>
        <TagTitle title={'Poison'}/>
      </View>       
    </View>
  )
}

export default Card;