import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'

import Colors from '../../../constants/Colors'
import BookBrowed from '../../molecules/books/BookBrowed'
export default ListBookBrowed = (props) => {
  const books = [
    {
      id: '1',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/phan-tich-chung-khoan-outline-26.jpg?v=1521167573353',
      name: 'Memory',
      browTime: '22/12/1999',
      returnTime: '22/12/1999',
      timeRemaining: '100',
      status: 'Không xác định',
    },
    {
      id: '2',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/thuat-doc-tam.png?v=1568685712587',
      name: 'About yourself',
      browTime: '22/12/1999',
      returnTime: '22/12/1999',
      timeRemaining: '3',
      status: 'Đã mất',
    },
    {
      id: '3',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/buoi-sang-dieu-ky-danh-cho-nha-ban-hang-01.jpg?v=1561185496810',
      name: 'Its',
      browTime: '22/12/1999',
      returnTime: '22/12/1999',
      timeRemaining: '0',
      status: 'Quá hạn',
    },
    {
      id: '4',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/sach-titan-gia-toc-rockefeller.jpg?v=1586842846807',
      name: 'Sat',
      browTime: '22/12/1999',
      returnTime: '22/12/1999',
      timeRemaining: '10',
      status: 'Còn hạn',
    },
  ]
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          vertical
          data={books}
          renderItem={({ item }) => (
            <BookBrowed
              id={item.id}
              img={item.uri}
              name={item.name}
              borowTime={item.browTime}
              returnTime={item.returnTime}
              timeRemaining={item.timeRemaining}
              status={item.status}
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
