
import { Dimensions, StyleSheet } from 'react-native';

const larg = Dimensions.get('screen').width;

export const style = StyleSheet.create({
  logo: {
    width: larg,
    height: larg
  },
  like: {
    width: 40,
    height: 40
  },
  viewLiked: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});