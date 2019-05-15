import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Header, Content, Item, Input, FooterTab, Footer} from 'native-base';
import {ImageButton, TextButton} from "../components/Button";
import WeatherItem from "../components/WeatherItem";
import {Images, colors} from "../config";
import {normalize, capitalize} from "../utilities";
import {fetchWeatherForFiveDays} from "../api";
import mainStyles from "../styles";


class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            weather: null
        }
    }

    componentDidMount(): void {
        const location = this.props.navigation.getParam("location");
        if (location) {
            const city = location.split(',')[0];
            this.setState({searchText: city},
                () => this.getWeather(city));
        }
    }

    handleSearch = () => this.getWeather(capitalize(this.state.searchText));

    getWeather = async city => {
        const value = await fetchWeatherForFiveDays(city);

        this.setState({weather: value});
    };

    render() {
        const {searchText, weather} = this.state;
        const {navigation} = this.props;

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

                <Content contentContainerStyle={styles.content}
                         showsVerticalScrollIndicator={false}>
                    {(weather && weather.list) ?
                        weather.list.map((item, key) =>
                            <WeatherItem
                                key={key}
                                dt={item.dt_txt}
                                day={item.dt}
                                temp={item.main.temp}/>
                        ) :
                        <Text>If you want know the weather in this place {'\n'} please change the nearest city</Text>
                    }
                </Content>

                <Footer>
                    <FooterTab style={mainStyles.footer}>
                        <TextButton name="MAP"
                                    disabled={false}
                                    textStyle={mainStyles.buttonText}
                                    wrapperStyle={mainStyles.buttonEnabled}
                                    onButtonPress={() => navigation.goBack()}/>
                        <TextButton name="SEARCH"
                                    disabled
                                    textStyle={mainStyles.buttonText}
                                    wrapperStyle={mainStyles.buttonDisabled}/>
                    </FooterTab>
                </Footer>
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