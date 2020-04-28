import React from 'react'
import { StyleSheet, Text, ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect, useDispatch } from 'react-redux'

import ListBook from '../components/oganism/listBook/ListBook'
import ViewMore from '../components/molecules/books/ViewMore'
import Colors from '../constants/Colors'
import ListRepresentativeBook from '../components/oganism/listBook/ListRepresentativeBook'
import Collections from '../components/molecules/collections/Collections'
import { queryLogin } from '../actions/login'

const HomeScreen = (props) => {
  const navigator = useNavigation()
  const onGoToViewAll = (filterName) => {
    navigator.navigate('ViewAllBooks', { title: filterName })
  }

  const onSubmit = () => {
    props.queryLogin({})
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
      <Button onPress={onSubmit} title="Click"></Button>
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

const mapDispatchToProps = {
  queryLogin,
}

export default connect(null, mapDispatchToProps)(HomeScreen)
