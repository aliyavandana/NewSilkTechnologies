import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';



export default class Signup extends Component {

    goBack() {

        Actions.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <Form type="Sign Up" />
                <View style={styles.signupTextcont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
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