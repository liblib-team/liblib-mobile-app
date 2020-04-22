import * as React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

import BottomTabNavigator from './BottomTabNavigator'
import ViewAllBooks from '../components/oganism/listBook/ViewAllBooks'
import BookDetails from '../screens/BookDetails'

const Stack = createStackNavigator()

const optionsHeader = ({ route }) => ({
  title: route.params.title,
})
export default Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Trang chủ">
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="ViewAllBooks"
        component={ViewAllBooks}
        options={optionsHeader}
      />
      <Stack.Screen name="BookDetails" component={BookDetails} options={optionsHeader} />
    </Stack.Navigator>
  )
}
