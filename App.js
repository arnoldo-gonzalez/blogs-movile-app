import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Text } from "react-native";

import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import Posts from "./src/pages/Posts.jsx";
import { theme } from "./src/theme.js";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: theme.colors.primary
            },
            drawerContentStyle: {
                backgroundColor: theme.colors.primary
            },
            drawerActiveTintColor: "#fff",
            drawerActiveBackgroundColor: theme.colors.secondary,
            drawerInactiveTintColor: "#fff",
            drawerIcon: (...props) => (<Text>{console.log(props), "Hola"}</Text>)
        }}>
            <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Home' }} />
            <Drawer.Screen name="Post" component={Posts} options={{ drawerLabel: 'Posts' }} />
            <Drawer.Screen name="About" component={About} options={{ drawerLabel: 'About' }} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
