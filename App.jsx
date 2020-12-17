import React from 'react';
import Home from './src/pages/Home';
import { ScrollView, Dimensions } from 'react-native';


const App = () => {
  return (
    <ScrollView style={{height: Dimensions.get('screen').height}}>
      <Home />
    </ScrollView>
  );
};



export default App;
