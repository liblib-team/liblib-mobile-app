import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'

import BookItem from '../../molecules/books/BookItem'
import Colors from '../../../constants/Colors'

export default ViewAllBooks = ({ navigation, route }) => {
  const books = [
    {
      id: '1',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/phan-tich-chung-khoan-outline-26.jpg?v=1521167573353',
      title: 'Memory',
      author: 'Alexander',
    },
    {
      id: '2',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/thuat-doc-tam.png?v=1568685712587',
      title: 'About yourself',
      author: 'Alexander',
    },
    {
      id: '3',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/buoi-sang-dieu-ky-danh-cho-nha-ban-hang-01.jpg?v=1561185496810',
      title: 'Its',
      author: 'Alexander',
    },
    {
      id: '4',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/sach-titan-gia-toc-rockefeller.jpg?v=1586842846807',
      title: 'Sat',
      author: 'Alexander',
    },
    {
      id: '5',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/sach-titan-gia-toc-rockefeller.jpg?v=1586842846807',
      title: 'Sat',
      author: 'Alexander',
    },
    {
      id: '6',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/tao-lap-mo-hinh-kinh-doanh.jpg?v=1527215308757',
      title: 'Sat',
      author: 'Alexander',
    },
  ]

  const [value, onChangeText] = React.useState(route.params.title)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: value === '' ? 'No title' : value,
    })
  }, [navigation, value])

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={books}
          renderItem={({ item }) => (
            <BookItem img={item.uri} title={item.title} author={item.author} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
  },
})