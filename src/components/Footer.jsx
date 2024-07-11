import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { theme } from "../theme";
import { AntDesign, Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function Footer() {
    const btnClasses = ({pressed}) => {
        return pressed ? ([styles.btn, styles.active]) : styles.btn
    }

    return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.italic]}>App made by Arnoldo Gonzalez</Text>
        <Pressable style={btnClasses} onPress={() => Linking.openURL("https://github.com/arnoldo-gonzalez")}>
            <AntDesign name="github" size={24} color="white" />
            <Text style={styles.text}>My Github</Text>
        </Pressable>
        <Pressable style={btnClasses} onPress={() => Linking.openURL("https://github.com/arnoldo-gonzalez/blogs-movile-app")}>
            <Feather name="code" size={24} color="white" />
            <Text style={styles.text}>Source Code</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 20,
        width: Dimensions.get("window").width,
        backgroundColor: theme.colors.primary,
        padding: 20
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        borderColor: theme.colors.middiumBlue,
        borderWidth: 3,
        borderRadius: 10
    },
    active: {
        backgroundColor: theme.colors.middiumBlue
    },
    text: {
        color: "#fff",
        fontSize: theme.fontSizes.normal,
    },
    italic: {
        fontStyle: "italic"
    }
})