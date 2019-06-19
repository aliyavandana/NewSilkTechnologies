import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput,ScrollView} from 'react-native';
export default class Client extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                 <View style={styles.box}>
                    <Text style={styles.question}>Title of the Job</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Example:To Build a Website"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Description of the work</Text>
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
                        marginTop:0,

                    
                        }}
                        underlineColorAndroid="transparent"
                        placeholder="Example:"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Duration</Text>
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
                        
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
               
                <View style={styles.box}>
                    <Text style={styles.question}>Required Skills</Text>
                    <TextInput
                        style={{
                            
                            height: 100,
                            borderWidth: 2,
                            borderColor: '#9E9E9E',
                            backgroundColor: "#FFFFFF",
                            marginLeft: 10,
                            marginRight: 10,
                            paddingVertical: 0,
                        paddingHorizontal: 30,
                        marginTop:0,

                    
                        }}
                        underlineColorAndroid="transparent"
                        placeholder="Example:To Build a Website"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Work Type</Text>
                    <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                         <Text style={{fontSize: 20,
            marginLeft: 10,
            fontWeight: "300",
            marginBottom:10,}}>Hour</Text>
                         <Text style={{fontSize: 20,
            marginLeft: 10,
            fontWeight: "300",
            marginBottom:10,}}>Project</Text>   
                        </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Local/OffShore</Text>
                   
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Anything more you want to display about the job(.PNG Format)</Text>
                   
                </View>
            </View>
            </ScrollView>
            )
        }
    }
    const styles = StyleSheet.create({
        container: {
    
            flexGrow: 1,
            // justifyContent: 'center',
            // alignItems: 'center',  
        },
        box:{
            marginTop:40,
         },
     
    
        question: {
            textAlign: 'left',
            fontSize: 20,
            marginLeft: 10,
            fontWeight: "bold",
            marginBottom:10,
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
    
        }
    });