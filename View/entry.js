import React, { Component } from 'react';
import {
		AppRegistry,
		StyleSheet,
		Text,
		View
} from 'react-native';

export class Radar extends Component {
	render() {
		return (
				<View style={styles.container}>
					<Text style={styles.font}>Radar</Text>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	font: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});
