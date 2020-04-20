import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

import ListBook from '../components/molecules/books/ListBook'
import ViewMore from '../components/molecules/books/ViewMore'
import Colors from '../constants/Colors'
import ListRepresentativeBook from '../components/molecules/books/ListRepresentativeBook'
import Collections from '../components/molecules/collections/Collections'

export default HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ListRepresentativeBook />
      <ViewMore filterName="Sách xem nhiều" />
      <ListBook />
      <ViewMore filterName="Bộ sưu tập" />
      <Collections />
      <ViewMore filterName="Sách Hot" />
      <ListBook />
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
})
