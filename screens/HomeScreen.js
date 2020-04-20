import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

import ListBook from '../components/books/ListBook'
import ViewMore from '../components/books/ViewMore'
import Colors from '../constants/Colors'
import ListRepresentativeBook from '../components/books/ListRepresentativeBook'
import Collections from '../components/collections/Collections'

export default HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ListRepresentativeBook />
      <ViewMore filterName="Sách xem nhiều" />
      <ListBook />
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
