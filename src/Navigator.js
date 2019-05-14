import {TabNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';

const AppNavigator = TabNavigator({
        Map: {
            screen: MapScreen
        },
        Search: {
            screen: SearchScreen
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'transparent',
            }
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        transitionConfig: (currentState: any) => {
            return {
                screenInterpolator: CardStackStyleInterpolator.forHorizontal
            };
        }
    }
);

export default AppNavigator;