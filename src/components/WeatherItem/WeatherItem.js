import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, View, Text} from 'native-base';
import {normalize} from "../../utilities";
import {colors, week} from "../../config";


const WeatherItem = ({dt, day, temp}) => {
    const getDay = () => {
        return week[new Date(day * 1000).getDay()];
    };

    return (
        <Card style={styles.card}>
            <CardItem style={styles.item}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.text}>
                        {dt.replace(' ', '\n')}
                    </Text>
                    <Text style={styles.text}>
                        {getDay()}
                    </Text>
                    <Text style={styles.text}>
                        {temp > 0 ? `+ ${temp}` : temp}&deg;
                    </Text>
                </View>
            </CardItem>
        </Card>
    )
};

export default WeatherItem;


const styles = StyleSheet.create({
    card: {
        width: normalize(320),
        height: normalize(70),
        borderRadius: normalize(5),
        backgroundColor: colors.lightblue,
        marginBottom: normalize(15)
    },
    item: {
        backgroundColor: colors.lightblue,
        paddingRight: normalize(40),
    },
    contentWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: normalize(15),
        color: colors.white
    }
});