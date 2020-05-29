import * as React from 'react'
import { AsyncStorage } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors'
import ListBookSaved from '../components/oganism/favorite/ListBookSaved'

class Favorite extends React.Component {
  render() {
    return (
      <View>
        <ListBookSaved />
      </View>
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
