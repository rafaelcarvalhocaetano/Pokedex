import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/styles/colors';

// const larg = Dimensions.get('screen').width;

export const styleCard = StyleSheet.create({
  card: {
    marginTop: 30,
    width: 155,
    height: 110,
    backgroundColor: Colors.green,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});