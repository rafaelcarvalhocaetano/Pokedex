import React from 'react';
import { Image, View, StyleSheet, Dimensions, Text, TextInput } from 'react-native';

import Logo from '../assets/icons/pokeboll.png';


const Home = () => {

	return (
		<View style={styles.container}>
			<View>
				<Image source={Logo} style={styles.img} />
			</View>

			<View>
				<Text>What Pokemon are you looking for?</Text>
			</View>

			<View>
				<TextInput />
			</View>


		</View>
	)
}

const larg = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	container: {
		width: larg,
		height: height,
		backgroundColor: '#FFFFFF',
	},
	img: {
		position: 'absolute',
		width: 200,
		height: 200,
		right: 0,
		top: 0
	}
});

export default Home;