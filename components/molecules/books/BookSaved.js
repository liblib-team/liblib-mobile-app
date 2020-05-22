import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Card, Button, Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export default BookSaved = (props) => {
  const navigator = useNavigation()
  const { id, img, title, authors, description } = props
  const onGoToBookDetails = (title, id) => {
    navigator.navigate('BookDetails', { title: title, id: id })
  }

  return (
    <TouchableOpacity onPress={() => onGoToBookDetails(title, id)}>
      <View style={styles.container}>
        <Card style={[styles.inLine, { marginTop: 5 }]}>
          <CustomImage img={img} />
          <View style={styles.inCol}>
            <View>
              <View style={styles.customTitle}>
                <Text style={styles.title} numberOfLines={5}>
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
            <Button
              iconLeft
              small
              style={styles.button}
              onPress={() => navigator.navigate('PDFView', { title: title, id: id })}
            >
              <Text style={styles.textButton}>Đọc sách</Text>
            </Button>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  inLine: {
    flexDirection: 'row',
    width: Layout.window.width - 20,
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-around',
  },
  inCol: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  customTitle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: 'bold',
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  description: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  author: {
    fontSize: 14,
    marginHorizontal: 5,
    color: Colors.secondary_dark,
  },
  button: {
    width: 140,
    justifyContent: 'space-around',
    backgroundColor: Colors.pink,
    marginTop: 10,
    borderRadius: 5,
  },
  textButton: {
    color: Colors.white,
    fontSize: 16,
    alignSelf: 'center',
  },
  review: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  icon: {
    color: Colors.tintColor,
    marginRight: 10,
    fontSize: 16,
  },
  moreInfo: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  textInfo: {
    fontSize: 14,
    paddingBottom: 5,
  },
})
