import { ScrollView, Dimensions } from 'react-native';
import { NativeRouter } from "react-router-native";
import AppBar from "./src/components/AppBar.jsx";

export default function App() {
  return (
    <NativeRouter>
        <ScrollView>
            <AppBar />
        </ScrollView>
    </NativeRouter>
  );
}
