import React, { useRef } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, Animated } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { theme } from "../theme.js";
import Constants from 'expo-constants';

export default function Nav({slideIn}) {
    return (
    <Animated.View style={[styles.container, {transform: [{translateX: slideIn}] }]}>
        <Text>Hola broo</Text>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: Constants.statusBarHeight + 10 + 30 + 10,
        left: 0,
        height: Dimensions.get("window").height + Constants.statusBarHeight,
        alignItems: "center",
        paddingVertical: 15,
        width: Dimensions.get("window").width * 0.8,
        rowGap: 10,
        backgroundColor: theme.colors.primary
    },
});
