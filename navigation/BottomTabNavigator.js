import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import TabBarIcon from '../components/atoms/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import Favorite from '../screens/Favorite'
import Profile from '../screens/Profile'
import MyLibrary from '../screens/MyLibrary'
import store from '../store'
import SignIn from '../screens/SignIn'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Tủ sách"
        component={MyLibrary}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Yêu thích"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart" />,
        }}
      />
      <BottomTab.Screen
        name="Cá nhân"
        component={store.getState().auth.username ? Profile : SignIn}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Trang chủ':
      return 'Trang chủ'
    case 'Tủ sách':
      return 'Sách đã mượn'
    case 'Yêu thích':
      return 'Sách đã lưu'
    case 'Cá nhân':
      return 'Thông tin cá nhân'
  }
}
