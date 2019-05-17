import React, { Component } from 'react';
import { Button, View, StyleSheet, Image, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Start extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.logontext}>
                    <Image style={{ width: 180, height: 180, marginLeft: 120, marginRight: 90 }}
                        source={require('../images/silk-2.png')} />

                    <View style={styles.logonsilk}>
                        <Text style={styles.silk}>Silk Technologies</Text>
                    </View>
                </View>
                <View style={styles.textnbutton}>


                    <View style={styles.buttonContainer}>
                        <Text style={styles.Text}>Want to find Work? </Text>
                        <Button style={styles.Button} title="Freelancer_Login"
                            onPress={() => this.props.navigation.navigate('Details')}
                        />
                    </View>
                </View>
                <View style={styles.textnbutton}>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.Text}>Have Work to offer?</Text>
                        <Button style={styles.Button} title="Client_Login" />
                    </View>
                </View>

            </View>

        );
        //     <TouchableOpacity style={styles.Button} onPress={this.handlePressButton}>
        //     <Text style={styles.ButtonText}>{this.props.type}</Text>

        // </TouchableOpacity>
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00838f',
    },

    logonsilk: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
        marginTop: 15
    },

    silk: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '500',
        fontSize: 30,
    },
    logontext: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //   margin: 'auto',
    },

    buttonContainer: {
        flex: 1,
        fontSize: 16,
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00838f',
        marginTop: 0,
        width: "90%"


    },

    Button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        width: "200%",




    },



    textnbutton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        marginTop: 5

    },

    Text: {
        fontSize: 25,
        marginTop: -5,

        color: 'rgba(255, 255, 255, 0.7)',
    }


});
