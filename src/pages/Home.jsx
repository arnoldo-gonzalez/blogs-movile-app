import React from "react";
import { ScrollView, Text, StyleSheet, ImageBackground, Dimensions, View, TouchableOpacity } from 'react-native';
import bgImage from "../assets/bg_home_image.jpg";
import { theme } from "../theme.js";

export default function Home() {
    return (
    <ScrollView contentContainerStyle={{backgroundColor: "#000", alignItems: "center", gap: 20}}>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
            <View style={{alignItems: "center"}}>
                <Text style={styles.text_header}>Welcome to my blog</Text>
                <View style={{padding: 5, paddingHorizontal: 20}}>
                    <Text style={styles.text_paragraph}>
                        Programing the <Text style={styles.text_bold}>future</Text> with us!. Line by line, post by post we want to fix all the bugs there are in the world 
                    </Text>
                </View>
            </View>
        </ImageBackground>
        <View>
            <View style={styles.article}>
                <View style={styles.art_body}>
                    <Text style={styles.art_header}>What are us?</Text>
                    <Text style={styles.art_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat!</Text>
                    <TouchableOpacity onPress={() => console.log("hola")}>
                        <Text style={[styles.art_text, styles.bold_text]}>Learn more about us here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    bold_text: {fontWeight: theme.fontWeight.bold},
    image: {
        height: Dimensions.get("window").height * 0.95,
        width: Dimensions.get("window").width,
        alignItems: "center",
        paddingTop: 150
    },
    text_header: {
        fontSize: theme.fontSizes.super_big,
        fontWeight: theme.fontWeight.ultra_bold,
        color: "#fff",
        padding: 10
    },
    text_paragraph: {
        fontSize: theme.fontSizes.big,
        fontWeight: theme.fontWeight.bold,
        color: "#fff"
    },
    text_bold: {
        flex: 0,
        fontSize: theme.fontSizes.big,
        color: theme.colors.primary,
        overflow: "hidden",
        padding: 1000,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    article: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: 20,
        borderRadius: 10
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
        alignItems: "center",
        gap: 5
    }
});