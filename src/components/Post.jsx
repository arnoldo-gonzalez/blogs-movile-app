import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from "react-native"
import { theme } from "../theme"
import { useRef } from "react"
import PostImage from "../atoms/PostImage";

export default function Post({post, navigation}) {
    const imageIdRef = useRef("unknown");

    const onPostPress = () => {

    }

    return (
    <TouchableHighlight onPress={onPostPress}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {post.title.length > 45 
                    ? post.title.substring(0, 43) + "..." 
                    : post.title
                }
            </Text>
            <Text style={styles.attribution}>
                Every image is from Pixabay, using the api.
            </Text>
            <PostImage imageIdRef={imageIdRef} resizeMode="cover" style={styles.post_image} />
        </View>
    </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.gray,
        height: Dimensions.get("window").height * 0.5,
        width: Dimensions.get("window").width * 0.8,
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: theme.fontSizes.big,
        paddingBottom: 50,
        zIndex: 10
    },
    attribution: {
        fontSize: theme.fontSizes.small,
        color: "#ddd",
        maxWidth: 150,
        textAlign: "center"
    },
    post_image: {
        position: "absolute",
        opacity: 0.3,
        top: 0,
        borderRadius: 10,
        height: Dimensions.get("window").height * 0.5,
        width: Dimensions.get("window").width * 0.8,
    }
})