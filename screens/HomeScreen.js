import React from 'react'
import { StyleSheet, Text, ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ListBook from '../components/oganism/listBook/ListBook'
import ViewMore from '../components/molecules/books/ViewMore'
import Colors from '../constants/Colors'
import ListRepresentativeBook from '../components/oganism/listBook/ListRepresentativeBook'
import Collections from '../components/molecules/collections/Collections'
import MainLayout from '../components/oganism/main-layout/MainLayout'

const HomeScreen = ({ navigation, props }) => {
  const onGoToViewAll = (filterName, id) => {
    navigation.navigate('ViewAllBooks', { title: filterName, id: id })
  }

  return (
    <MainLayout>
      <ScrollView style={styles.container}>
      <ListRepresentativeBook />
      <ViewMore filterName="Sách xem nhiều" onGoToViewAll={onGoToViewAll} />
      <ListBook filterName="Sách xem nhiều" />
      <Text style={styles.filter}>Bộ sưu tập</Text>
      <Collections onGoToViewAll={onGoToViewAll} />
      <ViewMore filterName="Sách Hot" onGoToViewAll={onGoToViewAll} />
      <ListBook filterName="Sách Hot" />
      </ScrollView>
    </MainLayout>
    
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

export default HomeScreen
