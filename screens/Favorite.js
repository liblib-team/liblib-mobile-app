import * as React from 'react'
import { StyleSheet} from 'react-native'

import Colors from '../constants/Colors'
import ListBookSaved from '../components/oganism/favorite/ListBookSaved'
import MainLayout from '../components/oganism/main-layout/MainLayout'

class Favorite extends React.Component {
  render() {
    return (
      <MainLayout>       
        <ListBookSaved />
      </MainLayout>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
})

export default Favorite
