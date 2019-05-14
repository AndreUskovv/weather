import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input} from 'native-base';
import {ImageButton} from "../components/Button";
import WeatherItem from "../components/WeatherItem";
import {Images, week, colors} from "../config";
import {normalize, capitalize} from "../utilities";
import {fetchWeather} from "../api";


class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            weather: null,
            day: null
        }
    }

    componentDidMount(): void {
        const location = this.props.navigation.getParam("location");
        if(location) {
            const city = capitalize(location.split(',')[0]);
            this.setState({searchText: city},
                () => this.getWeather(city));
        }
    }

    handleSearch = () => this.getWeather(this.state.searchText);

    getWeather = async city => {
        const value = await fetchWeather(city, 7);
        const day = new Date(value.dt * 1000).getDay();
        this.setState({weather: value, day})
    };

    render() {
        const {searchText, weather, day} = this.state;

        return (
            <Container>
                <Header searchBar style={styles.header}>
                    <Item>
                        <Input
                            placeholder="Type city name..."
                            value={searchText}
                            style={styles.searchInput}
                            //onBlur={this.handleSearch}
                            onChangeText={text => this.setState({searchText: text})}/>

                        <ImageButton
                            source={Images.search}
                            imageStyle={styles.imageStyle}
                            onButtonPress={this.handleSearch}
                        />
                    </Item>
                </Header>

                <Content contentContainerStyle={styles.content}>
                    {weather && !weather.message && <WeatherItem day={week[day]} temp={weather.main.temp}/>}
                </Content>
            </Container>
        );
    }
}

export default SearchScreen;


const styles = StyleSheet.create({
    header: {
        elevation: 0,
        backgroundColor: colors.white
    },
    imageStyle: {
        width: normalize(55),
        height: normalize(40)
    },
    searchInput: {
        width: normalize(300),
        height: normalize(40),
        paddingVertical: normalize(2),
        marginRight: normalize(10),
        borderColor: colors.border,
        borderWidth: normalize(2)
    },
    content: {
        alignItems: 'center',
        paddingVertical: normalize(20)
    }
});