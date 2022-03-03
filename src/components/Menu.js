import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, Modal, Button, } from 'react-native'
//COMMON COMPONENT
import {Text} from '../components';
//ASSETS
import {COLORS, IMAGES} from '../assets';

function Menu(props) {

    const menus = [
        { title: 'Home', image: IMAGES.ic_tab_home, navigate: 'Home' },
        { title: 'Profile', image: IMAGES.ic_person, navigate: 'Profile' }
     
    ]

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 24, }}>
                <Image source={IMAGES.ic_person}
                    style={{ backgroundColor: COLORS.gray, height: 50, width: 50, borderRadius: 90, }} />
                <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                    <Text color={COLORS.white}
                        weight='500'
                        size='20'>Demo Design</Text>
                    <Text color={COLORS.white}
                        weight='400'
                        size='14'>+91 1236547890</Text>
                </View>
                <TouchableOpacity onPress={props.onClose}
                    style={{ justifyContent: 'center', right: 14, alignItems: 'center', position: 'absolute' }}>
                    <Image source={IMAGES.cross} style={{ height: 18, width: 18 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                <View style={styles.topRoundedView}>
                </View>
                <ScrollView style={{ position: 'absolute', width: '100%', }} >

                    <View style={{ flex: 1, marginTop: 35, marginHorizontal: 24 }}>

                        {menus.map((data, index) => {
                            return (
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                             props.onPressItem(data.navigate)
                                          
                                         }}
                                        style={{ flexDirection: 'row', marginTop: 20, }}>
                                        <Image source={data.image}
                                            style={{ height: 18, width: 18, marginRight: 18 }} />
                                        <Text color='rgba(0, 0, 0, 0.8)'
                                            size='16'>{data.title}</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: 0.3, marginTop: 20, backgroundColor: 'rgba(0,0,0,0.3)', }} />
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        marginLeft: -1,
        backgroundColor: COLORS.green
    },
    common: {
        flexDirection: 'row',
        marginTop: 42
    },
    topRoundedView: {
        backgroundColor: COLORS.background_color,
        flex: 1,
        marginTop: 32,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    }
})

export default Menu