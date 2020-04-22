import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'native-base'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export default BookbyAuthor = (props) => {
  const { title, author, img } = props
  return (
    <View style={styles.container}>
      <Card style={styles.inLine}>
        <View style={styles.img}>
          <CustomImage img={img} />
        </View>

        <View style={styles.inCol}>
          <View>
            <View style={styles.customTitle}>
              <Text style={styles.title} numberOfLines={3} ellipsizeMode="head">
                {title}
              </Text>
            </View>
            <Text style={styles.author}>{author}</Text>
          </View>
          <View style={styles.customTitle}>
            <Text style={styles.description} numberOfLines={5} ellipsizeMode="head">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
    width: Layout.window.width - 40,
    alignSelf: 'center',
  },
  inLine: {
    flexDirection: 'row',
    height: 200,
    marginLeft: 10,
  },
  inCol: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: Layout.window.width * 0.4 + 20,
    marginRight: 10,
  },
  customTitle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    marginHorizontal: 5,
    color: Colors.secondary_dark,
  },
  description: {
    color: Colors.secondary_dark,
  },
  img: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
})
