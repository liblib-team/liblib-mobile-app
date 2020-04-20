import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'native-base'

import Colors from '../../../constants/Colors'

export default function ViewMore(props) {
  const { filterName } = props
  return (
    <View style={styles.inLine}>
      <Text style={styles.filter}>{filterName}</Text>
      <View style={[styles.inLine, styles.right]}>
        <Text style={styles.viewMore}>Xem thêm</Text>
        <Icon style={styles.viewMore} name="arrow-right" type="FontAwesome5" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inLine: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  filter: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  right: {
    position: 'absolute',
    right: 0,
    marginHorizontal: 10,
  },
  viewMore: {
    color: Colors.tintColor,
    fontSize: 16,
    marginLeft: 8,
  },
})
