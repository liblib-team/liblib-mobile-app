import * as React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'native-base'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'
import { useNavigation } from '@react-navigation/native'

export default BookItem = (props) => {
  const { id, img, title, author } = props
  const navigator = useNavigation()

  const onGoToBookDetails = (title) => {
    navigator.navigate('BookDetails', { title: title })
  }

  return (
    <TouchableOpacity onPress={() => onGoToBookDetails(title)}>
      <Card style={styles.container}>
        <CustomImage img={img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    justifyContent: 'center',
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
