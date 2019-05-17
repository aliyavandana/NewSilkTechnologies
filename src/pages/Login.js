import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';


import Form from '../components/Form';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

	Signup() {
		Actions.Signup()
	}
	render() {
		console.log("I am in Login Component");
		return (
			<View style={styles.container}>
				<Form type="Login" />
				<View style={styles.signupTextcont}>
					<Text style={styles.signupText}>Don't have an account yet? </Text>
					<TouchableOpacity onPress={this.Signup}><Text style={styles.signupButton}>Sign Up</Text></TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00838f',
	},
	signupTextcont: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingVertical: 16,
		flexDirection: 'row'
	},
	signupText: {
		color: 'rgba(255,255,255,0.7)',
		fontSize: 16
	},
	signupButton: {
		color: 'rgba(255,255,255,0.7)',
		fontSize: 16,
		fontWeight: '500'
	}
});