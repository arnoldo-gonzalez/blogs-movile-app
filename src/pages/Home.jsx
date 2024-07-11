import React from "react";
import { ScrollView, Text, StyleSheet, ImageBackground, Dimensions, View, Image } from 'react-native';
import bgImage from "../assets/bg_home_image.jpg";
import heroImage from "../assets/home_hero_image.jpg";
import art1Image from "../assets/home_art1_image.jpg";
import art2Image from "../assets/home_art2_image.jpg";
import art3Image from "../assets/home_art3_image.jpg";
import { theme } from "../theme.js";
import Footer from "../components/Footer.jsx";
import Article from "../components/Article.jsx";

export default function Home({navigation}) {
    return (
    <ScrollView contentContainerStyle={{backgroundColor: "#000", alignItems: "center", gap: 20}}>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
            <View style={{alignItems: "center", gap: 20}}>
                <Text style={styles.text_header}>Welcome to my blog</Text>
                <View style={{padding: 5, paddingHorizontal: 20}}>
                    <Text style={styles.text_paragraph}>
                        Programing the <Text style={styles.text_bold}>future</Text> with us!. Line by line, post by post we want to fix all the bugs there are in the world 
                    </Text>
                </View>
                <Image source={heroImage} resizeMode="cover" style={styles.hero_image} />
            </View>
        </ImageBackground>
        <View style={styles.articles_container}>
            {/* Articulo 1, sobre nosotros */}
            <Article 
                title="What are us?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat!"
                image={art1Image}
                navigation={navigation}
                to="About"
                toText="Learn more about us here!"
            />

            {/* Articulo 2, que ofrecemos */}
            <Article 
                title="What do you found?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eveniet exercitationem atque consequatur reprehenderit facere laboriosam reiciendis non fugiat quae corrupti deserunt voluptatibus, enim, nesciunt commodi assumenda, quam inventore excepturi."
                image={art2Image}
                navigation={navigation}
                to="Posts"
                toText="See our post here!"
            />

            {/* Articulo 3, como contactarnos */}
            <Article 
                title="Who stay with me?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat!"
                image={art3Image}
                navigation={navigation}
                to="Contact"
                toText="Contact us here!"
            />
        </View>
        <Footer />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    bold_text: {fontWeight: theme.fontWeight.bold},
    hero_image: {
        maxHeight: 300,
        maxWidth: 300,
        borderRadius: 99999999999999
    },
    image: {
        height: Dimensions.get("window").height * 0.95,
        width: Dimensions.get("window").width,
        alignItems: "center",
        gap: 20,
        paddingTop: 90
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
    articles_container: {
        padding: 20,
        gap: 45,
    },
});