import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            firstname: '',
            lastname: '',
            phonenumber: '',
        };
    }

    handlePressButton = () => {
        console.log(this.state);
        if (this.props.type == "Login") {
            fetch('http://192.168.1.181:3000/loginCredentials/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    if (responseJson.status == "Success") {
                        Actions.stack();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log(this.state);
            fetch('http://192.168.1.181:3000/signupCredentials/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    username: this.state.username,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    phonenumber: this.state.phonenumber,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.status == "Success") {
                        Actions.details();
                    }

                })
                .catch((error) => {
                    console.error(error);
                });
            // Actions.details();
        }
    }

    render() {
        // console.log(this.props);
        // console.log(this.state)
        return (
            <ScrollView showsVerticalScrollIndicator={false} Style={styles.container}>
                <Logo />
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#000000"
                    selectionColor="#000000"
                    keyboardType="email-address"
                    onChangeText={(text) => this.setState({ email: text })}
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    returnKeyType="go"
                    secureTextEntry={true}
                    placeholderTextColor="#000000"
                    onChangeText={(text) => this.setState({ password: text })}
                    ref={(input) => this.password = input}

                />
                {this.props.type === "Sign Up" ? (
                    <View Style={styles.container}>
                        <TextInput id='UserName' style={styles.inputBox}
                            placeholder="User Name"
                            placeholderTextColor="#000000"
                            selectionColor="#000000"
                            keyboardType="default"
                            ref={(input) => this.UserName = input}
                            onChangeText={(text) => this.setState({ username: text })}
                            onSubmitEditing={() => this.FirstName.focus()}
                        />

                        <TextInput id='FirstName' style={styles.inputBox}
                            placeholder="First Name"
                            placeholderTextColor="#000000"
                            selectionColor="#000000"
                            keyboardType="default"
                            ref={(input) => this.FirstName = input}
                            onChangeText={(text) => this.setState({ firstname: text })}
                            onSubmitEditing={() => this.LastName.focus()}
                        />
                        <TextInput id='LastName' style={styles.inputBox}
                            placeholder="Last Name"
                            placeholderTextColor="#000000"
                            selectionColor="#000000"
                            keyboardType="default"
                            ref={(input) => this.LastName = input}
                            onChangeText={(text) => this.setState({ lastname: text })}
                            onSubmitEditing={() => this.PhoneNumber.focus()}
                        />

                        <TextInput id='PhoneNumber' style={styles.inputBox}
                            placeholder="Phone Number"
                            placeholderTextColor="#000000"
                            selectionColor="#000000"
                            keyboardType="number-pad"

                            onChangeText={(text) => this.setState({ phonenumber: text })}
                            ref={(input) => this.PhoneNumber = input}

                        />


                    </View>
                ) : null}

                <TouchableOpacity style={styles.button} onPress={this.handlePressButton}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>

                </TouchableOpacity>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {

        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        height: 50, borderColor: 'gray', borderWidth: 2,
        marginVertical: 10,
        marginTop: 20,
    },


    button: {
        width: 300,
        backgroundColor: '#005662',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        marginTop: 25

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',

    }



});