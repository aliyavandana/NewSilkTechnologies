import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CheckBox } from 'react-native-elements';

export default class Employment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false,
        }
    }
    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.question}>Company Name</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Example:Facebook"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Company Location</Text>
                    <TextInput
                        style={{

                            height: 60,
                            borderWidth: 2,
                            borderColor: '#9E9E9E',
                            backgroundColor: "#FFFFFF",
                            marginLeft: 10,
                            marginRight: 10,
                            paddingVertical: 0,
                            paddingHorizontal: 30,
                            marginTop: 0,


                        }}
                        underlineColorAndroid="transparent"
                        placeholder="City"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />

                    <TextInput
                        style={{

                            height: 60,
                            borderWidth: 2,
                            borderColor: '#9E9E9E',
                            backgroundColor: "#FFFFFF",
                            marginLeft: 10,
                            marginRight: 10,
                            paddingVertical: 0,
                            paddingHorizontal: 30,
                            marginTop: 20,


                        }}
                        underlineColorAndroid="transparent"
                        placeholder="Country"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Role</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Example:QA Engineer"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Period</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{
        textAlign: 'center',
        fontSize: 20,
        // marginLeft: 10,
        fontWeight: "300",
        marginBottom: 10,
    }}>From</Text>
                            <TextInput
                                style={{

                                    height: 60,
                                    width: 150,
                                    borderWidth: 2,
                                    borderColor: '#9E9E9E',
                                    backgroundColor: "#FFFFFF",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    paddingVertical: 0,
                                    paddingHorizontal: 30,

                                }}
                                underlineColorAndroid="transparent"
                                placeholder="Month"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />

                            <TextInput
                                style={{

                                    height: 60,
                                    width: 150,
                                    borderWidth: 2,
                                    borderColor: '#9E9E9E',
                                    backgroundColor: "#FFFFFF",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop:10,
                                    paddingVertical: 0,
                                    paddingHorizontal: 30,

                                }}
                                underlineColorAndroid="transparent"
                                placeholder="Year"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>
                   
                    
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{
        textAlign: 'center',
        fontSize: 20,
        // marginLeft: 10,
        fontWeight: "300",
        marginBottom: 10,
    }}>To</Text>
                            <TextInput
                                style={{

                                    height: 60,
                                    width: 150,
                                    borderWidth: 2,
                                    borderColor: '#9E9E9E',
                                    backgroundColor: "#FFFFFF",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    paddingVertical: 0,
                                    paddingHorizontal: 30,

                                }}
                                underlineColorAndroid="transparent"
                                placeholder="Month"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                            <TextInput
                                style={{

                                    height: 60,
                                    width: 150,
                                    borderWidth: 2,
                                    borderColor: '#9E9E9E',
                                    backgroundColor: "#FFFFFF",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop:10,
                                    paddingVertical: 0,
                                    paddingHorizontal: 30,

                                }}
                                underlineColorAndroid="transparent"
                                placeholder="Year"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>
                    </View>
                    </View>
                    <View style={styles.box}>
                    <CheckBox style={
             { fontSize: 15,
                marginTop:20,
                fontWeight: "300",}
         }
  title='I currently work here'
  checked={this.state.checked}
  onPress = {() => {
    //  let fullTimeState = this.state.fullTimeChecked 
     this.setState({ checked : !this.state.checked})
     
     }}
/>
                    </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Anything you need to say more(optional)</Text>
                    <TextInput
                        style={{

                            height: 150,
                            borderWidth: 2,
                            borderColor: '#9E9E9E',
                            backgroundColor: "#FFFFFF",
                            marginLeft: 10,
                            marginRight: 10,
                            paddingVertical: 0,
                            paddingHorizontal: 30,
                            marginTop: 0,


                        }}
                        underlineColorAndroid="transparent"
                        //     placeholder="Enter the skills you are good in
                        //     (seperate with comma(,))"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            Actions.details();
                            console.log("This is save button");
                        }}>
                        <Text style={styles.buttonText}>Save</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            Actions.details();
                            console.log("This is save button");
                        }}>
                        <Text style={styles.buttonText}>Cancel</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
           


        );
    }
}


const styles = StyleSheet.create({
    container: {

        flexGrow: 1,
    },

    box: {
        marginTop: 40,
    },

    question: {
        textAlign: 'left',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "bold",
        marginBottom: 10,
    },
    textArea: {

        height: 60,
        borderWidth: 2,
        borderColor: '#9E9E9E',
        backgroundColor: "#FFFFFF",
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 0,
        paddingHorizontal: 30,

    },

    button: {
        width: 150,
        backgroundColor: '#005662',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        marginTop: 25,
        marginLeft: 20,
        marginRight: 10,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',

    }

});
