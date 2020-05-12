import React from 'react'
import { StyleSheet, View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

import Layout from '../constants/Layout'
export default class PDFView extends React.Component {
  render() {
    return (
      <PDFReader
        withScroll={true}
        source={{
          uri:
            'http://blueto0th.ddns.net:5000/api/book/read/b27f4eec-d9dd-484f-a8a1-38bf3cbdbde2',
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Layout.window.width,
    height: Layout.window.height,
  },
})
