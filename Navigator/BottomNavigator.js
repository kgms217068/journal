import HashTag from '../Screen/HashTag';
import Settings from '../Screen/Settings';
import Search from '../Screen/Search';
import Galary from '../Screen/Galary';
import MainScreen from '../Screen/MainScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

function BottomNavigator(){
  return(
    <Tab.Navigator initialRouteName="Main">
    <Tab.Screen
      name="Main"
      component={MainScreen}
      options={{
        title: '메인',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="HashTag"
      component={HashTag}
      options={{
        title: '해시태그',
        tabBarIcon: ({color, size}) => (
          <Icon name="notifications" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Galary"
      component={Galary}
      options={{
        title: '사진',
        tabBarIcon: ({color, size}) => (
          <Icon name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        title: '검색',
        tabBarIcon: ({color, size}) => (
          <Icon name="message" color={color} size={size} />
        ),
      }}
    />
     <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        title: '설정',
        tabBarIcon: ({color, size}) => (
          <Icon name="message" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default BottomNavigator;