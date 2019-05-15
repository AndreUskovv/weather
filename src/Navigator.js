import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';

const AppNavigator = StackNavigator({
        Map: {
            screen: MapScreen,
            navigationOptions: {
                header: null,
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Map',
        transitionConfig: (currentState: any) => {
            return {
                screenInterpolator: CardStackStyleInterpolator.forHorizontal
            };
        }
    }
);

export default AppNavigator;