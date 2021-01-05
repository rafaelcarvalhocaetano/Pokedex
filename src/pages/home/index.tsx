import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '../../components/card';
import api from '../../services/api';

// import { Container } from './styles';

const Home: React.FC = () => {

  const [pokedex, setPokedex] = useState<any>()

  useEffect(() => {
    api.get('/berry').then(async(x: any) => {
      const valor = await x.data.results;
      setPokedex(valor) 
    })
  }, [pokedex])

  return (
    <View >
    {
      pokedex.map((x: any) => console.log(' LOG ', x.name))
    }
    </View>
  )
}

export default Home;