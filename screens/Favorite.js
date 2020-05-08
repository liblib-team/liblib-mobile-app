import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors'
import ListBookSaved from '../components/oganism/favorite/ListBookSaved'

export default function Favorite() {
  return (
    <View>
      <ListBookSaved />
    </View>
  )
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
