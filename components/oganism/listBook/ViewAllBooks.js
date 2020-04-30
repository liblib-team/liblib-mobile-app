import React, { useEffect, Component } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import BookItem from '../../molecules/books/BookItem'
import Colors from '../../../constants/Colors'
import { queryTopViewBook } from '../../../redux-saga/actions/book.actions'

const LIST_BOOK_TITLE = {
  TOP_VIEW_BOOKS: 'Sách xem nhiều',
}

class ViewAllBooks extends Component {
  constructor(props) {
    super(props)
    const { title } = this.props.route.params
    this.state = {
      books: title === LIST_BOOK_TITLE.TOP_VIEW_BOOKS ? this.props.topViewBooks : [],
    }
  }

  componentDidMount() {
    const { title } = this.props.route.params
    if (title === LIST_BOOK_TITLE.TOP_VIEW_BOOKS) {
      this.props.queryTopViewBook()
      this.setState({ books: this.props.topViewBooks })
    } else {
      this.setState({ books: [] })
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.route.params.title !== nextProps.route.params.title) {
      return true
    }
    return false
  }

  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          {this.props.topViewBooks.length > 0 && (
            <FlatList
              numColumns={2}
              data={this.state.books}
              renderItem={({ item }) => (
                <BookItem img={item.uri} title={item.title} author={item.author} />
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
  },
})

const mapStateToProps = (state) => ({
  topViewBooks: state.topViewBooks,
})

const mapDispatchToProps = {
  queryTopViewBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllBooks)
