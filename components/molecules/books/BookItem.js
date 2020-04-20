import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card } from 'native-base'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export default BookItem = (props) => {
  const { img, title, author } = props
  return (
    <Card style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  image: {
    height: Layout.window.height / 3.5,
    width: Layout.window.width / 2.5,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  author: {
    fontSize: 14,
    marginHorizontal: 5,
    color: Colors.secondary,
  },
})
