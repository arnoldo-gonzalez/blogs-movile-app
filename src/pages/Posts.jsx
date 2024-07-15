import React from "react";
import { ScrollView, StyleSheet } from 'react-native';
import Footer from "../components/Footer.jsx";
import PostsList from "../components/PostsList.jsx";

export default function Posts({navigation}) {
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <PostsList navigation={navigation} />
        <Footer />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000", 
        alignItems: "center", 
        gap: 20
    }
})
