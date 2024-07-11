import { Image, StyleSheet, Text, View } from "react-native";
import GoToBtn from "../atoms/GoToBtn";
import { theme } from "../theme";

export default function Article ({image, title, body, navigation, to, toText}) {
    return (
    <View shadowColor="#fff" elevation={42} style={styles.article}>
        <View style={styles.art_body}>
            <Text style={styles.art_header}>{title}</Text>
            <Text style={styles.art_text}>{body}</Text>
            <GoToBtn to={to} text={toText} navigation={navigation} />
        </View>
        <Image source={image} resizeMode="cover" style={styles.art_image} />
    </View>
    )
}

const styles = StyleSheet.create({
    article: {
        backgroundColor: theme.colors.gray,
        borderRadius: 10,
    },
    art_header: {
        fontSize: theme.fontSizes.big,
        color: "#fff"
    },
    art_text: {
        fontSize: theme.fontSizes.normal,
        color: "#fff"
    },
    art_body: {
        padding: 20,
        alignItems: "center",
        gap: 15
    },
    art_image: {
        maxHeight: 400,
        maxWidth: "100%",
        borderRadius: 10,
    },
});