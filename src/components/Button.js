import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

//Common Component
import { Text } from '../components';

//ASSETS
import { COLORS } from '../assets';

/**
 * Button is Component to render app buttons
 * @property {Any} style - style as per parent view
 * @property {string} title - button title
 * @property {number} size - icon size
 * @property {type} type - 1 or 2
 */

const Button = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            {...props}
            style={props.type == 1 ? [styles.border, props.style]  : [styles.shadow, props.style]}>
            <View
                style={[styles.container, { height: props.height ? props.height : 48 }]}>
                <View style={{ flexDirection: 'row' }}>
                    {props.left &&
                        <Image
                            style={[styles.image, { marginRight: props.height ? 5 : 15, height: props.size, width: props.size }]}
                            source={props.left}
                            resizeMode='contain' />
                    }
                    {props.type == 1 ? <LabelGreen title={props.title} /> : <Label title={props.title} />}
                    {props.right &&
                        <Image
                            style={[styles.image, { marginLeft: props.height ? 5 : 15, height: props.size, width: props.size }]}
                            source={props.right}
                            resizeMode='contain' />
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Label = (props) => {
    return (
        <Text
            style={[{ alignSelf: 'center' }]}
            size="16"
            weight="bold"
            color={COLORS.white}>
            {props.title}
        </Text>
    )
}

const LabelGreen = (props) => {
    return (
        <Text
            style={[{ alignSelf: 'center' }]}
            size="16"
            weight="bold"
            color={COLORS.green}>
            {props.title}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 24,
        justifyContent: 'center',
        height: 48,
    },
    shadow: {
        shadowColor: COLORS.green,
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        backgroundColor: COLORS.green,
        borderRadius: 24,
    },
    border: {
        borderColor: COLORS.green,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 24,
    },
    image: {
        height: 15,
        width: 15,
        alignSelf: 'center',
    },
});

export default Button