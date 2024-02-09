import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, ICONS, SIZES} from '../resources';
import {Home, Menu} from '../screens';
import ProfileScreen from '../screens/Profile';
import Hometemp from '../screens/homeScreen/Hometemp';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.HOME_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.ACCOUNT_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 35,
                  width: 35,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.MENU_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
