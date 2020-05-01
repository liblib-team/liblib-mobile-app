import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Card } from 'native-base'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'
import { useNavigation } from '@react-navigation/native'

export default BookItem = (props) => {
  const { id, img, title, authors } = props
  const navigator = useNavigation()

  const onGoToBookDetails = (title) => {
    navigator.navigate('BookDetails', { title: title })
  }

  return (
    <TouchableOpacity onPress={() => onGoToBookDetails(title)}>
      <Card style={styles.container}>
        <CustomImage img={img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{authors}</Text>
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
