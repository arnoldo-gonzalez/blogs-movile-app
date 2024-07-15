import { Animated, StyleSheet, Text, Easing, View } from "react-native";
import { theme } from "../theme";
import { useEffect, useRef } from "react";

export default function Loader({marginTop}) {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.timing(rotateAnim, {
            toValue: 100,
            duration: 2000,
            useNativeDriver: true,
        });

        const startAnimation = () => {
            animation.start((completion) => {
                if (completion.finished) {
                    rotateAnim.setValue(0)
                    startAnimation()
                }
            });
        };
        startAnimation();
    }, []);

    return (
    <View style={{
        height: 250,
        width: 250,
        marginTop: (typeof(marginTop) === "number") ? marginTop : 50,
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Animated.View style={[styles.container, {
            transform: [
                {
                    rotate:  rotateAnim.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0deg', "360deg"]
                    })
                }
            ]
        }]}>
        </Animated.View>
        <Text style={styles.text}>Loading...</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        marginVertical: "auto",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 200,
        borderRadius: 999999999,
        borderWidth: 10,
        borderTopColor: theme.colors.secondary,
        borderRightColor: theme.colors.secondary,
    },
    text: {
        color: "#fff",
        fontSize: theme.fontSizes.big,
        fontWeight: theme.fontWeight.bold
    }
});