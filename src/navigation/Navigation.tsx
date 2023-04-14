import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native'
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Register from '../screens/register/Register';
import { Ionicons } from '@expo/vector-icons';
import { CustomTabBarButton } from './components/CustomTabBarButton';



const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }} 
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => ( <Ionicons name="home-outline" size={30} color={color} />)
        }}
      />

      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({focused, color}) => ( <Ionicons name="person-add-outline" size={35} color={color} />),
          tabBarButton: (props) => ( <CustomTabBarButton {...props} />),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused, color}) => ( <Ionicons name="search" size={30} color={color} />)
        }}  
      />
    </Tab.Navigator>
  );
}