import React, { Component } from 'react';
// import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Actions } from "react-native-router-flux";



import Login from './pages/login';
import Signup from './pages/signup';
import Start from './pages/start';
import JobStack from './pages/stack';
import Details from './pages/details';
import Education from './pages/education';
import Employment from './pages/employment';
import Client from './pages/client';

// export default class Routes extends Component {
//     // componentWillMount = () => {
//     //     BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
//     // };
//     render() {
//         return (
//             // <Root>
//             <Router>
//                 <Scene key="root">  {/* hideNavBar={true} */}
//                     <Scene initial key="login" component={Login} title="Login" />
//                     <Scene  key="start" component={Start} title="Start" />
//                     <Scene key="signup" component={Signup} title="Signup" />
//                     {/* <Scene key="home" component={Home} />  */}
//                 </Scene>
//             </Router>
//         //   </Root>
//         )
//     }
// }        


const Routes = () => {
    return (
        <Router>
            <Scene key="root">

                <Scene key="start"
                    component={Start}
                    title="Start"
                    
                />

                <Scene key="login"
                    component={Login}

                />
                <Scene
                    key="signup"
                    component={Signup}

                />
                <Scene
                    key="stack"
                    component={JobStack}

                />

                <Scene
                    key="details"
                    title="Create Profile"
                    component={Details}
                    initial
                   

                />

                <Scene key="education"
                 title="Education Details"
                    component={Education}
                />

                <Scene key="employment"
                 title="Employment Details"
                    component={Employment}
                   
                />
            
            <Scene key="client"
             title="Create Job"
                    component={Client}
                    
                   
                />
                </Scene>
        </Router>
    );
}

export default Routes;