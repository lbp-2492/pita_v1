import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen'; 
import Signup from '../screens/SignupScreen';
import Forgot from '../screens/ForgotPassword';
import Calendar from '../screens/Calendar';
import VisitHistory from '../screens/History';
import Labs from '../screens/Labs';
import LogSymptoms from '../screens/LogSymptoms';
import Message from '../screens/reactions/signupUn';
import Success from '../screens/reactions/messageSent';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    Signup: {
        screen: Signup, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    Forgot: {
        screen: Forgot,
        navigationOptions: {
            headerShown: false
        }
    },
    Calendar: {
        screen: Calendar
    },
    VisitHistory: {
        screen: VisitHistory
    },
    Labs: {
        screen: Labs
    },
    LogSymptoms: {
        screen: LogSymptoms
    },
    Message: {
        screen: Message 
    },
    Success: {
        screen: Success
    },
};

const LoginStack = createStackNavigator(screens); 

export default createAppContainer(LoginStack); 