import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

//Assets
import { COLORS } from '../assets'

//Common Component
import { Text } from '../components';

//Packages

/**
 * Input is Component to render app text input 
 * @property {Any} extraStyle - style as per parent view
 * @property {string} label - input title header text
 */

const Input = (props) => {

    const [open, setOpen] = useState(false);

    if (props.type == 1) {
        return (
            <View style={props.style}>
                {props.label && <Label title={props.label} />}
                <View style={[styles.inputContainer, props.border]}>
                    <TextInput
                        {...props}
                        style={[styles.input_type_1, props.input]}
                        placeholderTextColor={'rgba(144,144,144,1)'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={props.secureTextEntry && !open}
                    />
                     {props.isShow && 
                     <TouchableOpacity 
                        style={{ justifyContent: 'center', alignSelf: 'center', }}
                        onPress={props.onRight}>
                        <Text
                            style={{ alignSelf: 'flex-end' }}
                            size="14"
                            align="right"
                            weight="bold"
                            color={COLORS.lightGreen}>
                        {'Show'}
                        </Text>
                     </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={props.style}>
                {props.label && <Label title={props.label} />}
                <View style={[styles.grediantView, props.border]}>
                    <TextInput
                        {...props}
                        style={[styles.input, props.input]}
                        placeholderTextColor={COLORS.gray}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={props.secureTextEntry && !open}
                    />
                    {props.isShow && 
                     <TouchableOpacity 
                        style={{ justifyContent: 'center', alignSelf: 'center', }}
                        onPress={props.onRight}>
                        <Text
                            style={{ alignSelf: 'flex-end' }}
                            size="14"
                            align="right"
                            weight="bold"
                            color={COLORS.lightGreen}>
                        {'Show'}
                        </Text>
                     </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
  
}

const Label = (props) => {
    return (
        <Text
            style={{ marginLeft: 1, marginBottom: 4}}
            size="14"
            weight="400"
            color={COLORS.black}>
            {props.title}
        </Text>
    )
}

const styles = StyleSheet.create({
    grediantView: {
        height: 44,
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.lightWhite,
    },
    inputContainer: {
        height: 54,
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.lightWhite,
    },
    input: {
        flex: 1.0,
        fontFamily: 'CircularStd-Book',
        fontWeight: '400',
        fontSize: 12,
        color: COLORS.black,
    },
    input_type_1: {
        flex: 1.0,
        fontFamily: 'CircularStd-Book',
        fontWeight: '400',
        fontSize: 16,
        color: COLORS.black,
    },
});

export default Input