import { Dimensions, StyleSheet } from 'react-native';

// const larg = Dimensions.get('screen').width;

export const tagContainer = StyleSheet.create({
  tag: {
    width: 49,
    height: 16,
    backgroundColor: '#FFFFFF38',
    paddingHorizontal: 8,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 8,
    lineHeight: 28,
    textAlign: 'center',
  }
  
});