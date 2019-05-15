import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';


const ImageButton = ({source, imageStyle, onButtonPress}) => {
    return (
        <TouchableOpacity onPress={onButtonPress} activeOpacity={0.7}>
            <Image source={source} style={imageStyle}/>
        </TouchableOpacity>
    )
};

const TextButton = ({name, textStyle, wrapperStyle, onButtonPress, disabled}) => {
    return (
        <TouchableOpacity onPress={onButtonPress} activeOpacity={0.7} disabled={disabled}>
            <View style={wrapperStyle}>
                <Text style={textStyle}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
};


export {ImageButton, TextButton};
