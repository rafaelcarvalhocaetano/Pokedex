import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import Logo from '../assets/icons/pokeboll.png';


const Home = () => {

	return (
		<View style={styles.container}>
			<View>
				<Image source={Logo} style={styles.img} />
			</View>


		</View>
	)
}

const larg = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	container: {
		width: larg,
		height: Dimensions.get('screen').height / 2,
		backgroundColor: '#CCC'
	},
	img: {
		position: 'absolute',
		width: 200,
		height: 200,
		right: 0,
		top: 50
	}
});

export default Home;