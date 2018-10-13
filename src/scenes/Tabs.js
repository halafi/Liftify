// @flow strict
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';

type Props = {
  // focused: boolean,
  horizontal: boolean,
  tintColor: string,
};

const Tabs = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }: Props) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Profile') {
          iconName = 'ios-pie';
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
  },
);

export default Tabs;
