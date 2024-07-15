import { Dimensions, FlatList, StyleSheet, ScrollView, Text, RefreshControl } from "react-native";
import usePosts from "../hooks/usePosts";
import Loader from "../molecules/Loader";
import Post from "./Post";
import { theme } from "../theme";
import { useCallback, useState } from "react";

export default function PostsList({navigation}) {
    const [reloading, setReloading] = useState(false);
    const {data, error, loading, reload} = usePosts(setReloading);

    const onRefresh = () => {
        setReloading(true);
        console.log("hola")
        reload();
      };

    return (
        <ScrollView 
            style={{ minHeight: Dimensions.get("window").height * 0.62 }}
            refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={reloading} />}
        >
            {loading 
            ? <Loader />
            : error 
            ? (
            <Text style={styles.title}>
                Ocurrio un error obteniendo los post, por favor, deslice hacia abajo para recargar
            </Text>
            ) : (
            <>
            <Text style={styles.title}>Posts</Text>
            <FlatList 
                scrollEnabled={false}
                data={data} 
                keyExtractor={(item) => item.id} 
                contentContainerStyle={styles.list}
                renderItem={({item}) => <Post post={item} navigation={navigation} />}
                
                refreshing={reloading}
                onRefresh={onRefresh}
            />
            </>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        alignItems: "center",
        maxWidth: Dimensions.get("window").width * 0.8,
        gap: 50
    },
    title: {
        color: "#fff",
        textAlign: "center",
        fontSize: theme.fontSizes.super_big,
        fontWeight: theme.fontWeight.ultra_bold,
        marginVertical: 30
    }
})