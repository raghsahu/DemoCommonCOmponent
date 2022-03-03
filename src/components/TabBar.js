import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';

//Assets
import { IMAGES, COLORS } from '../assets';
//Common Component
import { Text } from '../components';

/**
 * TabBar is component to render app bottom bar
 */

const TabBar = (props) => {

    return (
        <View style={{
            backgroundColor: COLORS.lightWhite,
        }}>
            <View style={styles.container}>
                <View style={styles.itemsContainers}>
                    {props.state.routes.map((route, index) => {
                        return (
                            <TabItem
                                key={index}
                                route={route}
                                index={index}
                                selected={props.state.index === index}
                                navigation={props.navigation} />
                        )
                    })}
                </View>
            </View>
            <SafeAreaView />
        </View>
    )
}

const TabItem = (props) => {

    const onPress = () => {
        const event = props.navigation.emit({
            type: 'tabPress',
            target: props.route.key,
            canPreventDefault: true,
        });

        if (!props.selected && !event.defaultPrevented) {
            props.navigation.navigate(props.route.name);
        }
    };

    console.log(props.route)
    return (
        <TouchableOpacity
            style={styles.tabItem}
            onPress={onPress}
            key={props.index}>
            <View style={[styles.tabItem]}>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        style={[styles.tabIcon, {
                            tintColor: props.selected ? COLORS.orange : COLORS.black
                        }]}
                        source={tabImages[props.index]} />

                        <Text
                            style={[{ alignSelf: 'center' }]}
                            size="14"
                            weight="400"
                            color= {props.selected ? COLORS.orange : COLORS.black}
                            >
                            {tabTitles[props.index]}
                        </Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const tabImages = [IMAGES.ic_tab_home, IMAGES.ic_person]
const tabTitles = ['Home', 'Profile']

const styles = StyleSheet.create({
    container: {
        height: 54,
        flexDirection: 'row',
        backgroundColor: COLORS.lightWhite,
        shadowOpacity: 0.1,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: -3 },
        shadowRadius: 2
    },
    itemsContainers: {
        flex: 1.0,
        backgroundColor: COLORS.lightWhite,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '100%',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center'
    },
    tabIcon: {
        height: 20,
        width: 20,
        alignSelf: 'center'
    }
});

export default TabBar