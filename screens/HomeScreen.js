import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ListBook from '../components/oganism/listBook/ListBook'
import ViewMore from '../components/molecules/books/ViewMore'
import Colors from '../constants/Colors'
import ListRepresentativeBook from '../components/oganism/listBook/ListRepresentativeBook'
import Collections from '../components/molecules/collections/Collections'
import ActivityIndicator from '../components/atoms/ActivityIndicator'

export default HomeScreen = () => {
  const navigator = useNavigation()
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const onGoToViewAll = (filterName) => {
    navigator.navigate('ViewAllBooks', { title: filterName })
  }

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json.movies)
        console.log(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <ListRepresentativeBook />
          <ViewMore filterName="Sách xem nhiều" onGoToViewAll={onGoToViewAll} />
          <ListBook />
          <Text style={styles.filter}>Bộ sưu tập</Text>
          <Collections />
          <ViewMore filterName="Sách Hot" onGoToViewAll={onGoToViewAll} />
          <ListBook />
        </View>
      )}
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
