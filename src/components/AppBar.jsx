import React, { useRef } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, Animated, Easing } from 'react-native';
import Constants from 'expo-constants';
import { theme } from "../theme.js";
import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import Nav from "../molecules/Nav.jsx";

export default function AppBar(){
    const [isOpen, setIsOpen] = React.useState(false);
    const slideIn = useRef(new Animated.Value(-1 * Dimensions.get("window").width * 0.8)).current;

    const slideInAnimation = () => {
        Animated.timing(slideIn, {
            toValue: 0,
            duration: 900,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();
    }

    const slideOutAnimation = () => {
        Animated.timing(slideIn, {
            toValue: -1 * Dimensions.get("window").width * 0.8,
            duration: 900,
            useNativeDriver: true,
            easing: Easing.quad
        }).start();
    }

    const onPressHandler = () => {
        if (isOpen) slideOutAnimation();
        else slideInAnimation();

        setIsOpen(!isOpen);
    }

    return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Pressable style={styles.button} onPress={onPressHandler}>
                {!isOpen
                    ? (<Entypo name="menu" size={29} color="#fff" />)
                    : (<FontAwesome6 name="xmark" size={29} color="#fff" />)
                }
            </Pressable>
            <Text style={styles.text}>My First App</Text>
            <Nav slideIn={slideIn} />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: Dimensions.get("window").height + Constants.statusBarHeight,
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        backgroundColor: theme.colors.primary
    },
    text: {
        color: "#fff",
        fontSize: theme.fontSizes.normal
    },
    button: {
        justifyContent: "center",
        height: 35,
        width: 35,
        padding: 5
    }
});

