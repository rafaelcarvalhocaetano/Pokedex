import { StyleSheet } from 'react-native';

import { Colors } from '../../../assets/styles/colors';

export const styleCard = StyleSheet.create({
  card: {
    marginTop: 30,
    width: 155,
    height: 110,
    backgroundColor: Colors.green,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  description: {
    flex: 1,
    marginTop: 8,
    justifyContent: 'space-around',
  }
});