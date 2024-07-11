import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";

export default function GoToBtn({navigation , to, text}) {
    return (
        <TouchableOpacity style={styles.more_info_btn} onPress={() => navigation.navigate(to)}>
            <Text style={[styles.btn_text, styles.bold_text]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bold_text: {fontWeight: theme.fontWeight.bold},
    more_info_btn: {
        backgroundColor: theme.colors.middiumBlue,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    btn_text: {
        fontSize: theme.fontSizes.normal,
        color: "#fff"
    }
});