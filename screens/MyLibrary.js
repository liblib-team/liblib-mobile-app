import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Tab, Tabs } from 'native-base'

import ListBookBorrowed from '../components/oganism/myLibrary/ListBookBorrowed'
import Colors from '../constants/Colors'
import ListBookRevered from '../components/oganism/myLibrary/ListBookReserved'
import MainLayout from '../components/oganism/main-layout/MainLayout'

export default function MyLibrary() {
  return (
    <MainLayout>
      <Tabs>
        <Tab
          heading="Sách đã đặt"
          tabStyle={{ backgroundColor: Colors.tintColor }}
          activeTabStyle={{ backgroundColor: Colors.tintColor }}
        >
          <ListBookRevered />
        </Tab>
        <Tab
          heading="Sách đã mượn"
          tabStyle={{ backgroundColor: Colors.tintColor }}
          activeTabStyle={{ backgroundColor: Colors.tintColor }}
        >
          <ListBookBorrowed />
        </Tab>
      </Tabs>
    </MainLayout>
  )
}

const styles = StyleSheet.create({})
