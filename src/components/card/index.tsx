import React from 'react';
import { View } from 'react-native';

import CardHeader from '../card-header';
import PersonIcon from '../person-icon';
import TagTitle from '../tag-title';

import { styleCard } from './style';

const Card: React.FC = () => {
  return (
    <View style={styleCard.card}>
      <CardHeader />
      <View style={styleCard.description}>
        <TagTitle title={'Grass'} />
        <TagTitle title={'Poison'}/>
      </View>
      <PersonIcon />
    </View>
  )
}

export default Card;