import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import TabBarIcon from '../components/atoms/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import Favorite from '../screens/Favorite'
import Profile from '../screens/Profile'
import MyLibrary from '../screens/MyLibrary'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
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
        component={Profile}
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
    case 'Home':
      return 'Trang chủ'
    case 'MyLibrary':
      return 'Sách đã mượn'
    case 'Favorite':
      return 'Sách đã lưu'
    case 'Profile':
      return 'Thông tin cá nhân'
  }
}
