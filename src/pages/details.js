import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button, Platform, TouchableOpacity,ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';

// import ActionButton from 'react-native-action-button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {Icons} from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';
import { Right } from 'native-base';
import ImagePicker from "react-native-image-picker";


// import {PermissionsAndroid} from 'react-native';

// async function requestCameraPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera');
//     } else {
//       console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// }

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            educationData : [],
            perHourChecked : false,
            perProjectChecked : false,
            fullTimeChecked : false,
            photo : null,
        }
        console.log(this.props.education);
        if(this.props.education !== undefined){
            console.log(this.props.education);
            let newEductation = this.state.educationData
            // var joined = this.state.educationData.concat(this.props.education);
            // this.setState({ educationData: joined })
            // // this.setState()
            // console.log(this.state.educationData)
        }
        console.log(this.state)
    }

    // state= {
    //     photo: null,
    // };
    handleChoosePhoto = () => {
        // let response = await requestCameraPermission() 

        const options = {
            noData: true
        };
     ImagePicker.launchImageLibrary(options, response => {
         console.log("response",response);
         if (response.uri) {
             this.setState({photo: response});
         }
     });
    };

    getEducationDetails = () =>{
        console.log("In getEducation Details");
        if(this.state.educationData.length === 0) {
            return(<Text>No Data</Text>);
        } else {

        }
    }

    render() {
        // const {photo}=this.state;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                {this.state.photo && (
                <Image
                source={{uri: this.state.photo.uri}}
                style={{width:300, height:300 }}
                />
                )}
                <Button
                title="Choose Photo"
                onPress={this.handleChoosePhoto}
                />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Add a Professional Title</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Example:Web Developer"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>

                <View style={styles.box}>
                    <Text style={styles.question}>Available Skills</Text>
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
                        placeholder="Enter the skills you are good in
                        (seperate with comma(,))"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                <Text style={styles.question}>Education</Text>
                <TouchableOpacity onPress={() => Actions.education()}>
                <Image source={require('../images/round_add_circle_outline_black_18dp.png')}  />
                </TouchableOpacity>
                {/* <Icons name = 'pluscircleo'/> */}
                <View>{this.getEducationDetails()}</View>
        </View>
 <View style={{flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',}}>
                    <Text style={styles.question}>Experience in years</Text>
                    <TextInput
                        style={{
     
                            height: 60,
                            borderWidth: 2,
                            borderColor: '#9E9E9E',
                        

                            marginRight: 40,
                            paddingVertical: 0,
                        paddingHorizontal: 30,
                    
                        }}
                        underlineColorAndroid="transparent"
                        
                        placeholderTextColor="grey"
                        numberOfLines={1}
                        multiline={true}
                    />
                </View>
 <View style={styles.box}>
                <Text style={styles.question}>Employment History</Text>
                {/* <Icon
  name='add_circle'
  type='material-icons'
  color='#f50'
  onPress={() => {console.log('hello');
  Actions.employment(); }} */}
                <TouchableOpacity onPress={() => Actions.employment()}>
                <Image source={require('../images/round_add_circle_outline_black_18dp.png')}  />
                </TouchableOpacity>
   {/* /> */}
   </View>

   <View style={styles.box}>
                <Text style={styles.question}>Is your work type</Text> 
                <View style={{flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',}}>
        
         <CheckBox style={
             { fontSize: 15,
                marginTop:20,
                fontWeight: "300",}
         }
  title='Per Hour'
  checked={this.state.perHourChecked}
  onPress = {() => {
    //  let fullTimeState = this.state.fullTimeChecked 
     this.setState({ perHourChecked : !this.state.perHourChecked})
     
     }}
/>
<CheckBox style={
             { fontSize: 15,
                marginTop:20,
                fontWeight: "300",}
         }
  title='Per Project'
  checked={this.state.perProjectChecked}
  onPress = {() => {
    //  let fullTimeState = this.state.fullTimeChecked 
     this.setState({ perProjectChecked : !this.state.perProjectChecked})
     
     }}
/>
<CheckBox style={
             { fontSize: 15,
                marginTop:20,
                fontWeight: "300",}
         }
  title='Full Time'
  checked={this.state.fullTimeChecked}
         onPress = {() => {
            //  let fullTimeState = this.state.fullTimeChecked 
             this.setState({ fullTimeChecked : !this.state.fullTimeChecked})
             
             }}
/>
        </View> 
</View>
<View style={styles.box}>
                <Text style={styles.question}>Anything you want to display in your profile(.PNG Format)</Text> 
                </View>
                <View style={styles.box}>
                   
                <Text style={styles.question}>Your Upwork Profile Link</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="https://"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                   
                <Text style={styles.question}>Your LinkedIn Profile Link</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="https://"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                   
                   <Text style={styles.question}>Your Angellist Profile Link</Text>
                       <TextInput
                           style={styles.textArea}
                           underlineColorAndroid="transparent"
                           placeholder="https://"
                           placeholderTextColor="grey"
                           numberOfLines={10}
                           multiline={true}
                       />
                   </View>
                   <View style={styles.box}>
                   
                <Text style={styles.question}>Your Facebook Profile Link</Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="https://"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Hobbies(Optional)</Text>
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
                        placeholder="Example:Chess"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Preferred Time Zone</Text>
                    <TextInput
                        style={{
                            
                            height: 60,
                            width:200,
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
                        // placeholder="Example:Chess"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.question}>Availability</Text>
                    <TextInput
                        style={{
                            
                            height: 60,
                            width:200,
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
                        // placeholder="Example:Chess"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
            </View>
            </ScrollView>

        );
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


{/* <Icon
  name='add_circle'
  type='material-icons'
  color='#f50'
  onPress={() => {console.log('hello');
  Actions.education(); }}
   /> */}