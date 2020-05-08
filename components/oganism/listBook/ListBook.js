import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import BookItem from '../../molecules/books/BookItem'
import Colors from '../../../constants/Colors'
import {
  queryPopularBook,
  queryHotBooks,
  queryRelevanceBooks,
} from '../../../redux-saga/actions/book.actions'
import { LIST_BOOK_TITLE } from '../../../constants/Type'

class ListBook extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const title = this.props.filterName
    const { id } = this.props
    if (title === LIST_BOOK_TITLE.TOP_VIEW_BOOKS) {
      this.props.queryPopularBook()
    }
    if (title === LIST_BOOK_TITLE.TOP_HOT_BOOKS) {
      this.props.queryHotBooks()
    } else {
      this.props.queryRelevanceBooks(id)
    }
  }

  render() {
    let books = []
    const title = this.props.filterName
    if (title === LIST_BOOK_TITLE.TOP_VIEW_BOOKS) {
      books = this.props.popularBooks
    } else if (title === LIST_BOOK_TITLE.TOP_HOT_BOOKS) {
      books = this.props.hotBooks
    } else {
      books = this.props.relevanceBooks
    }

    return (
      <View>
        <SafeAreaView style={styles.container}>
          {books.length > 0 && (
            <FlatList
              horizontal
              data={books}
              renderItem={({ item }) => (
                <BookItem
                  id={item.id}
                  img={item.image}
                  title={item.title}
                  authors={item.authors.map((author) => author.name).join(', ')}
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
  },
})

const mapStateToProps = (state) => ({
  popularBooks: state.popularBooks,
  hotBooks: state.hotBooks,
  relevanceBooks: state.relevanceBooks,
})

const mapDispatchToProps = {
  queryPopularBook,
  queryHotBooks,
  queryRelevanceBooks,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBook)
