import React, {Component} from 'react';
import { View } from 'react-native';
import { Footer, FooterTab } from "native-base";
import MapView, { Marker } from 'react-native-maps';
import {TextButton} from "../components/Button";
import {fetchLocation, fetchWeather} from "../api";
import {initialRegion} from "../config";
import mainStyles from './../styles';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: null,
            region: null,
            location: null,
            temp: null
        };
    }

    mapPressed = event => {
        if(this.marker)
            this.marker.hideCallout();

        this.setState({
            coordinates: {
                latitude: event.nativeEvent.coordinate.longitude,
                longitude: event.nativeEvent.coordinate.latitude
            }
        }, () => this.getLocation())
    };

    getLocation = async () => {
        const {coordinates} = this.state;

        const data = await fetchLocation(coordinates);

        if (data) {
            const location = data.plus_code.compound_code.split(',');
            const index = location[0].indexOf(' '),
                city = location[0].slice(index),
                country = location[2];

            const updateCity = city[city.length - 1] === "'" ? city.slice(0, -1) : city;

            this.setState({
                location: updateCity + ',' + country
            }, () => this.getWeather())
        }
    };

    getWeather = async () => {
        const {location} = this.state;

        const
            city = location.split(',')[0],
            weather = await fetchWeather(city, 1);

        if(weather && !weather.message) {
            const {temp} = weather.main;

            this.setState({
                temp: temp > 0 ? `+${temp}°` : `${temp}°`
            })
        }
    };

    render() {
        const {coordinates, location, temp} = this.state;
        const {navigation} = this.props;

        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={initialRegion}
                    showsUserLocation
                    onLongPress={this.mapPressed}
                >
                    {coordinates &&
                    <Marker
                        coordinate={{
                            latitude: coordinates.longitude,
                            longitude: coordinates.latitude
                        }}
                        pinColor="red"
                        title={location}
                        description={temp}
                        ref={ref => { this.marker = ref; }}
                        onCalloutPress={() => navigation.navigate('Search', {location: location})}
                    />}
                </MapView>

                <Footer>
                    <FooterTab style={mainStyles.footer}>
                        <TextButton name="MAP"
                                    disabled
                                    textStyle={mainStyles.buttonText}
                                    wrapperStyle={mainStyles.buttonDisabled}/>
                        <TextButton name="SEARCH"
                                    disabled={false}
                                    textStyle={mainStyles.buttonText}
                                    wrapperStyle={mainStyles.buttonEnabled}
                                    onButtonPress={() => navigation.navigate('Search')}/>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}
