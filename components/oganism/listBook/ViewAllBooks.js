import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import BookItem from '../../molecules/books/BookItem'
import Colors from '../../../constants/Colors'
import { queryPopularBook, queryHotBooks } from '../../../redux-saga/actions/book.actions'
import { LIST_BOOK_TITLE } from '../../../constants/Type'

class ViewAllBooks extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { title } = this.props.route.params
    if (title === LIST_BOOK_TITLE.TOP_VIEW_BOOKS) {
      this.props.queryPopularBook()
    }
    if (title === LIST_BOOK_TITLE.TOP_HOT_BOOKS) {
      this.props.queryHotBooks()
      console.log('true')
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.route.params.title !== nextProps.route.params.title) {
      return true
    }

    if (this.props.popularBooks !== nextProps.popularBooks) {
      return true
    }
    return false
  }

  render() {
    let books = []
    const { title } = this.props.route.params
    if (title === LIST_BOOK_TITLE.TOP_VIEW_BOOKS) {
      books = this.props.popularBooks
    } else if (title === LIST_BOOK_TITLE.TOP_HOT_BOOKS) {
      books = this.props.hotBooks
    }
    return (
      <View>
        <SafeAreaView style={styles.container}>
          {books.length > 0 && (
            <FlatList
              numColumns={2}
              data={books}
              renderItem={({ item }) => (
                <BookItem
                  img={item.image}
                  title={item.title}
                  authors={item.authors.map((author) => author.name + ', ')}
                />
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
  popularBooks: state.popularBooks,
  hotBooks: state.hotBooks,
})

const mapDispatchToProps = {
  queryPopularBook,
  queryHotBooks,
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllBooks)
