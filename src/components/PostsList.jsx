import { Dimensions, FlatList, StyleSheet, ScrollView, View } from "react-native";
import usePosts from "../hooks/usePosts";
import Loader from "../molecules/Loader";
import Post from "./Post";

export default function PostsList() {
    const {data, error, loading} = usePosts();

    return (
        <ScrollView style={{ minHeight: Dimensions.get("window").height * 0.62 }}>
            {loading 
            ? <Loader />
            : (
            <FlatList 
                scrollEnabled={false}
                data={data} 
                keyExtractor={(item) => item.id} 
                contentContainerStyle={styles.list}
                renderItem={({item}) => <Post post={item} />}
            />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        alignItems: "center",
        maxWidth: Dimensions.get("window").width * 0.8,
        gap: 50
    }
})