import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, View, Text} from 'native-base';
import {normalize} from "../../utilities";
import {colors} from "../../config";


const WeatherItem = ({day, temp}) => {
    return (
        <Card style={styles.card}>
            <CardItem style={styles.item}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.text}>
                        {day}
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
        width: normalize(250),
        height: normalize(50),
        borderRadius: normalize(5),
        backgroundColor: colors.lightblue
    },
    item: {
        backgroundColor: colors.lightblue,
        paddingRight: normalize(40)
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