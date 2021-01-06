import React from 'react';
import { Text, View } from 'react-native';
import { tagContainer } from './style';

export type Props = {
  title: string;
}

const TagTitle: React.FC<Props> = ({ title }: Props) => {
  return(
    <View style={tagContainer.tag}>
      <Text style={tagContainer.title}>{title}</Text>
    </View>
  )
}

export default TagTitle;