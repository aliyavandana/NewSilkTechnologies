import React, { Component } from 'react';
import { View, StyleSheet, Text,  TextInput, TouchableOpacity,ScrollView,Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degree : '',
            institute : "",
            branch : "",
            fromYear : "",
            toYear : "",
        }
    }
     render() {
       
        return (
          //    <View style={styles.container}>
                  <ScrollView style={styles.container}>
                  <View style={styles.box}>
                    <Text style={styles.question}>Degree</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        // placeholder="Example:"
                        
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={(text) => this.setState({ degree: text })}

                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Institute</Text>
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
                        marginTop:0,

                    
                        }}
                        underlineColorAndroid="transparent"
                        placeholder="Example:JNTU Hyderabad"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={(text) => this.setState({ institute: text })}

                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Area of study (Optional)</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Example:Mining Engineering"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={(text) => this.setState({ branch: text })}

                    />
                </View>    
                <View style={styles.box}>
                    <Text style={styles.question}>Years attended (Optional)</Text>
                    <View style={{flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',}}>
                    <TextInput
                        style={{
     
                         height: 60,
                         width:150,
                         borderWidth: 2,
                         borderColor: '#9E9E9E',
                         backgroundColor: "#FFFFFF",
                         marginLeft: 10,
                         marginRight: 10,
                         paddingVertical: 0,
                     paddingHorizontal: 30,
                 
                     }}
                        underlineColorAndroid="transparent"
                        placeholder="From"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={(text) => this.setState({ fromYear: text })}
d
                    />
                     <TextInput
                        style={{
     
                         height: 60,
                         width:150,
                         borderWidth: 2,
                         borderColor: '#9E9E9E',
                         backgroundColor: "#FFFFFF",
                         marginLeft: 10,
                         marginRight: 10,
                         paddingVertical: 0,
                     paddingHorizontal: 30,
                 
                     }}
                        underlineColorAndroid="transparent"
                        placeholder="To"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                    </View> 
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
                        marginTop:0,

                    
                        }}
                        underlineColorAndroid="transparent"
                    //     placeholder="Enter the skills you are good in
                    //     (seperate with comma(,))"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',}}>
                <TouchableOpacity style={styles.button}
                 onPress={() => {Actions.details({
                    education : this.state,
                });
                    console.log("This is save button");
                    console.log(this.state);
                }}>
                         <Text style={styles.buttonText}>Save</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                 onPress={() => {Actions.details();
                    console.log("This is cancel button");
                }}>
                         <Text style={styles.buttonText}>Cancel</Text>

                </TouchableOpacity>
                </View>
</ScrollView>
// </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {

        flexGrow: 1,
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

    },

    button: {
     width: 150,
     backgroundColor: '#005662',
     borderRadius: 25,
     marginVertical: 10,
     paddingVertical: 12,
     marginTop:25,
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
