import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import CityDetails from './components/CityDetails';
import {StackNavigationDetails} from './type';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator<StackNavigationDetails>()
const navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleStyle:{alignSelf:'flex-start'} }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CityDetails" component={CityDetails} options={{headerTitle: 'City Details'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default navigation;