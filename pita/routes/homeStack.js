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

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home
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
};

const HomeStack = createStackNavigator(screens); 

export default createAppContainer(HomeStack); 