import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native' ;

export type StackNavigationDetails = {
    Home: undefined;
    CityDetails: {country_name: String, country_detatils: Array<JSON>};
}


type HomeNavigationProp = StackNavigationProp<StackNavigationDetails, 'Home'>
export  interface homeProps {
    navigation: HomeNavigationProp;
}

type CityDetailsRouteProp = RouteProp<StackNavigationDetails,'CityDetails'>
type CityNavigationProp = StackNavigationProp<StackNavigationDetails, 'CityDetails'>
export interface cityScreenProps {
    navigation: CityNavigationProp;
    route: CityDetailsRouteProp;
}
