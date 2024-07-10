import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import Posts from "./src/pages/Posts.jsx";
import { theme } from "./src/theme.js";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: theme.colors.primary,
            },
            drawerContentStyle: {
                padding: 0,
                margin: 0,
                gap: 0,
                backgroundColor: theme.colors.primary,
            },
            drawerActiveTintColor: "#fff",
            drawerActiveBackgroundColor: theme.colors.secondary,
            drawerInactiveTintColor: "#fff"
        }}>
            <Drawer.Screen name="Home" component={Home} options={{ 
                drawerLabel: 'Home',
                drawerIcon: (props) => (<Entypo name="home" size={props.size} color={props.color} />)
            }}/>
            <Drawer.Screen name="Post" component={Posts} options={{ 
                drawerLabel: 'Posts',
                drawerIcon: (props) => (<MaterialIcons name="article" size={props.size} color={props.color} />)
            }} />
            <Drawer.Screen name="About" component={About} options={{ 
                drawerLabel: 'About',
                drawerIcon: (props) => (<FontAwesome6 name="people-roof" size={props.size - 1} color={props.color} />)
            }} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
