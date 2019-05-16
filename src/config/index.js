import {width, height} from "../utilities";

const googleApiKey = 'AIzaSyD6KJbQKqutB-f7O10VErz6yrn9_inhA5k';

const weatherApiKey = 'bc7ccc4e5edcff6f0d569f6018fa371c';

const initialRegion = {
    latitude: 47.101328,
    longitude: 37.639709,
    latitudeDelta: 1.4866,
    longitudeDelta: 1.4866 * width / height,
};

const Images = {
    search: require('./../assets/search.png')
};

const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const colors = {
    blue: 'blue',
    white: '#fff',
    border: '#eaeaea',
    lightblue: "#85CAFF",
    disabled: "#63AEEE",
    enabled: "#2699FB"

};

export {googleApiKey, weatherApiKey, initialRegion, Images, week, colors};