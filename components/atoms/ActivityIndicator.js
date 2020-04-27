import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import Colors from '../../constants/Colors'

export default function App() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.tintColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})
