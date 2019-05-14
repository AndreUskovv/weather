import React from 'react';
import {TouchableOpacity, Image} from 'react-native';


const ImageButton = ({source, imageStyle, onButtonPress}) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            <Image source={source} style={imageStyle}/>
        </TouchableOpacity>
    )
};


export {ImageButton};
