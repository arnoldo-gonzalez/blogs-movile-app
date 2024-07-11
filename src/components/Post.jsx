import { Dimensions, StyleSheet, Text, View } from "react-native"
import { theme } from "../theme"

export default function Post({post}) {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{post.title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "rgb()",
        width: Dimensions.get("window").width * 0.8,
    },
    text: {
        color: "#fff",
        fontSize: theme.fontSizes.big,
    }
})