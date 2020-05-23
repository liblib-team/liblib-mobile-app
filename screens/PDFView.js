import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

import Layout from '../constants/Layout'
import Colors from '../constants/Colors';
export default class PDFView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveError: false,
    }
  }
  componentDidMount() {
    const id = this.props.route.params.id;
    fetch('http://blueto0th.ddns.net:5000/api/book/read/' + id)
      .then(res => {
        if (res.status !== 200) {
          this.setState({ haveError: true });
        }
      })
      .catch(() => this.setState({ haveError: true }));
  }
  render() {
    const id = this.props.route.params.id
    const { haveError } = this.state;
    return !haveError ? (
        <PDFReader
        withScroll={true}
        source={{
          uri: 'http://blueto0th.ddns.net:5000/api/book/read/' + id,
        }}
      />
      ) : (
          <Text style={styles.filter}>Sách này hiện tại chưa có bản pdf! Vui lòng đến thư viện để mượn sách!</Text>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: Colors.white
  },
  pdf: {
    flex: 1,
    width: Layout.window.width,
    height: Layout.window.height,
  },
  filter: {
    fontSize: 16,
    marginHorizontal: 10,
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
})
