import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View Style={styles.container}>
                <Image style={{ width: 100, height: 100 , marginLeft: 100, marginRight: 70}}
                    source={require('../images/silk-2.png')} />

            <View style={styles.logonsilk}>   
                <Text style={styles.logoText}>Welcome to </Text>
                <Text style={styles.silk}>Silk Technologies</Text>
            </View>     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 'auto',
    },
    logonsilk: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
        marginBottom: 50
    },
    logoText: {
        
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    silk: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight:'500',
        fontSize:20,
    }
});