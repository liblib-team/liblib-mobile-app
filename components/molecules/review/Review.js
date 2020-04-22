import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Card, Thumbnail } from 'native-base'
import { Rating } from 'react-native-ratings'

import Colors from '../../../constants/Colors'

export default Review = (props) => {
  const { rating, comment } = props
  return (
    <Card style={styles.container}>
      <View style={styles.inLine}>
        <Thumbnail
          style={styles.image}
          source={{
            uri:
              'https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png',
          }}
        />
        <View style={styles.inCol}>
          <Text style={styles.nameperson}>Thuy tomoe</Text>
          <Rating startingValue={rating} imageSize={15} readonly />
        </View>
      </View>
      <View>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </Card>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  inLine: {
    flexDirection: 'row',
  },
  inCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  comment: {
    fontSize: 13,
    color: Colors.secondary_dark,
    marginLeft: 50,
  },
  nameperson: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
})
