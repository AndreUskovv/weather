import {Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const normalize = size => {
    // based on android scale(as on design)
    const scale = width / 360;
    return PixelRatio.roundToNearestPixel(size * scale);
};

export const capitalize = value => {
   return value[0].toUpperCase() + value.slice(1);
};

