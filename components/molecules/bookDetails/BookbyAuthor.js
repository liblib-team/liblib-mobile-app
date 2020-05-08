import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'native-base'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export default BookbyAuthor = (props) => {
  const { title, authors, img, description } = props
  return (
    <View style={styles.container}>
      <Card style={styles.inLine}>
        <View style={styles.img}>
          <CustomImage img={img} style={styles.imgCustom} />
        </View>

        <View style={styles.inCol}>
          <View>
            <View style={styles.customTitle}>
              <Text style={styles.title} numberOfLines={3} ellipsizeMode="head">
                {title}
              </Text>
            </View>
            <Text style={styles.author}>{authors}</Text>
          </View>
          <View style={styles.customTitle}>
            <Text style={styles.description} numberOfLines={5} ellipsizeMode="head">
              {description}
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
    borderRadius: 5,
  },
  inCol: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: Layout.window.width * 0.4 + 25,
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
    borderRadius: 10,
    bottom: 10,
    flex: 1,
    marginLeft: 10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: Colors.secondary,
    shadowOffset: { width: -10, height: -10 },
    elevation: 5,
  },
})
