import * as React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

import BottomTabNavigator from './BottomTabNavigator'
import ViewAllBooks from '../components/oganism/listBook/ViewAllBooks'
import BookDetails from '../screens/BookDetails'
import Author from '../screens/Author'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import ChangePassword from '../screens/ChangePassword'
import Collections from '../components/molecules/collections/Collections'
import PDFView from '../screens/PDFView'
import SearchBook from '../screens/SearchBook'

const Stack = createStackNavigator()

const optionsHeader = ({ route }) => ({
  title: route.params.title,
})
export default Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Trang chủ">
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen
        name="ViewAllBooks"
        component={ViewAllBooks}
        options={optionsHeader}
      />
      <Stack.Screen name="BookDetails" component={BookDetails} options={optionsHeader} />
      <Stack.Screen name="Author" component={Author} options={optionsHeader} />
      <Stack.Screen name="SignIn" component={SignIn} options={optionsHeader} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Collections" component={Collections} />
      <Stack.Screen name="PDFView" component={PDFView} options={optionsHeader} />
      <Stack.Screen name='SearchBook' component={SearchBook} options={{headerShown: false,  animationEnabled: false,}} />
    </Stack.Navigator>
  )
}
