import { StyleSheet } from 'react-native';


export const styleCard = StyleSheet.create({
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 18
  },
  id: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    opacity: 0.2,
  }  
});