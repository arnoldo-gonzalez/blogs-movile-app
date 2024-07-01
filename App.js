import { ScrollView, Dimensions } from 'react-native';
import { NativeRouter, Routes, Route, Navigate } from "react-router-native";
import AppBar from "./src/components/AppBar.jsx";
import Home from "./src/pages/Home.jsx";
import Posts from "./src/pages/Posts.jsx";
import About from "./src/pages/About.jsx";

export default function App() {
  return (
    <NativeRouter>
        <ScrollView>
            <AppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ScrollView>
    </NativeRouter>
  );
}
