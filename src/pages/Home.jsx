import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { theme } from "../theme.js";

export default function Home() {
    return (
    <View style={styles.container}>
        <Text>Hola mundo</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 1000000
    },
});
