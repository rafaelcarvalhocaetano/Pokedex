import React from 'react';

import { View, Image } from 'react-native';

import { personIconStyle } from './style';

const PersonIcon: React.FC = () => {
  return (
    <View style={personIconStyle.icone}>
      <Image source={require('../../../assets/image/boll.png')} style={personIconStyle.img} />
      <Image source={require('../../../assets/image/fogo.png')} style={personIconStyle.imgPerson} />
    </View>
  )
}

export default PersonIcon;