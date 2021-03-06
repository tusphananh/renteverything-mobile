/* eslint-disable react-native/no-inline-styles */
import {
  faBoxesStacked,
  faClockRotateLeft,
  faLocationDot,
  faMessage,
  faSatelliteDish,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import CustomTabBar from '../CustomTabBar/CustomTabBar';
import {primaryColor} from '../globalStyles';
import Activities from './Activities/Activities';
import styles from './DashBoardStyles';
import Items from './Items/Items';
import Message from './Message/Message';
import NearBy from './NearBy/NearBy';
import Search from './Search/Search';

const Tab = createBottomTabNavigator();

const DashBoard: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        // Hide title
        tabBar={props => <CustomTabBar props={props} />}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
          },
          headerShown: false,
          tabBarActiveTintColor: primaryColor,
          tabBarAllowFontScaling: true,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon size={size} color={color} icon={faLocationDot} />
            ),
          }}
          name="NearBy"
          component={NearBy}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                size={size}
                color={color}
                icon={faClockRotateLeft}
              />
            ),
          }}
          name="Activities"
          component={Activities}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                size={size}
                color={color}
                icon={faSatelliteDish}
              />
            ),
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon size={size} color={color} icon={faMessage} />
            ),
          }}
          name="Messages"
          component={Message}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                size={size}
                color={color}
                icon={faBoxesStacked}
              />
            ),
          }}
          name="Items"
          component={Items}
        />
      </Tab.Navigator>
    </View>
  );
};

export default DashBoard;
