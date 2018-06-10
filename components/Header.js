// Header.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
	render() {
		return(
			<View style={styles.header}>
				<Text style={styles.header_text}>MemoryGame</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 23,
    paddingBottom: 12,
    backgroundColor: '#000000'		
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#FFFFFF',
		textAlign: 'center'
	}
});