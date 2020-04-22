import * as React from 'react'
import { StyleSheet, Text, ScrollView, Button } from 'react-native'

import ListBook from '../components/oganism/listBook/ListBook'
import ViewMore from '../components/molecules/books/ViewMore'
import Colors from '../constants/Colors'
import ListRepresentativeBook from '../components/oganism/listBook/ListRepresentativeBook'
import Collections from '../components/molecules/collections/Collections'

export default HomeScreen = ({ navigation: { navigate } }) => {
  const onGoToViewAll = (filterName) => {
    navigate('ViewAllBooks', { title: filterName })
  }

  return (
    <ScrollView style={styles.container}>
      <ListRepresentativeBook />
      <ViewMore filterName="Sách xem nhiều" onGoToViewAll={onGoToViewAll} />
      <ListBook />
      <Text style={styles.filter}>Bộ sưu tập</Text>
      <Collections />
      <ViewMore filterName="Sách Hot" onGoToViewAll={onGoToViewAll} />
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
  filter: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
