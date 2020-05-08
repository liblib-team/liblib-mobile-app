import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Tab, Tabs } from 'native-base'

import ListBookBrowed from '../components/oganism/myLibrary/ListBookBrowed'
import Colors from '../constants/Colors'

export default function MyLibrary() {
  return (
    <Tabs>
      <Tab
        heading="Sách đã đặt"
        tabStyle={{ backgroundColor: Colors.tintColor }}
        activeTabStyle={{ backgroundColor: Colors.tintColor }}
      >
        <Text>Sách đã đặt</Text>
      </Tab>
      <Tab
        heading="Sách đã mượn"
        tabStyle={{ backgroundColor: Colors.tintColor }}
        activeTabStyle={{ backgroundColor: Colors.tintColor }}
      >
        <ListBookBrowed />
      </Tab>
    </Tabs>
  )
}

const styles = StyleSheet.create({})
