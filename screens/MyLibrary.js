import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { DatePicker, Card, Icon } from 'native-base'

import Colors from '../constants/Colors'
import ListBookBrowed from '../components/oganism/myLibrary/ListBookBrowed'

export default function MyLibrary() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.date}>
        <Text style={styles.text}>Từ ngày:</Text>
        <DatePicker
          textStyle={{ color: Colors.tintColor }}
          defaultDate={new Date(2018, 4, 4)}
        ></DatePicker>
        <Text style={styles.text}>Đến ngày:</Text>
        <DatePicker
          textStyle={{ color: Colors.tintColor }}
          defaultDate={new Date(2018, 4, 4)}
        ></DatePicker>

        <Icon name="search" style={styles.iconSearch} />
      </Card>
      <ListBookBrowed />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
    backgroundColor: '#fafafa',
  },
  iconSearch: {
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 5,
  },
})
