import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'

import Colors from '../../../constants/Colors'
import BookSaved from '../../molecules/books/BookSaved'
export default ListBookSaved = (props) => {
  const books = [
    {
      id: '1',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/phan-tich-chung-khoan-outline-26.jpg?v=1521167573353',
      title: 'Memory',
      author: 'Alexander',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: '2',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/thuat-doc-tam.png?v=1568685712587',
      title: 'About yourself',
      author: 'Alexander',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: '3',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/buoi-sang-dieu-ky-danh-cho-nha-ban-hang-01.jpg?v=1561185496810',
      title: 'Its',
      author: 'Alexander',
      description: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: '4',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/sach-titan-gia-toc-rockefeller.jpg?v=1586842846807',
      title: 'Sat',
      author: 'Alexander',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: '5',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/sach-titan-gia-toc-rockefeller.jpg?v=1586842846807',
      title: 'Sat',
      author: 'Alexander',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: '6',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/tao-lap-mo-hinh-kinh-doanh.jpg?v=1527215308757',
      title: 'Sat',
      author: 'Alexander',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ]

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          vertical
          data={books}
          renderItem={({ item }) => (
            <BookSaved
              id={item.id}
              img={item.uri}
              title={item.title}
              author={item.author}
              description={item.description}
            />
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
  },
})
