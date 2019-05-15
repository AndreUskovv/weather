import {StyleSheet} from 'react-native';
import {normalize} from "../utilities";
import {colors} from "../config";

const mainStyles = StyleSheet.create({
    buttonEnabled: {
        width: normalize(170),
        height: normalize(50),
        backgroundColor: colors.enabled,
        borderRadius: normalize(25),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDisabled: {
        width: normalize(180),
        height: normalize(50),
        backgroundColor: colors.disabled,
        borderRadius: normalize(25),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: colors.white,
        fontSize: normalize(15)
    },
    footer: {
        backgroundColor: colors.white,
        paddingHorizontal: normalize(5)
    }
});

export default mainStyles;