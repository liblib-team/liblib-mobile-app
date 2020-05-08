import * as React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, FlatList } from 'react-native'

import Colors from '../../../constants/Colors'
import BookReserved from '../../molecules/books/BookReserved'
export default ListBookRevered = (props) => {
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
    <ScrollView>
      <Text style={styles.filter}>Vui lòng lấy sách trước ngày hẹn!</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          vertical
          data={books}
          renderItem={({ item }) => (
            <BookReserved
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  iconSearch: {
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 5,
  },
  filter: {
    fontSize: 16,
    marginHorizontal: 10,
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
})
