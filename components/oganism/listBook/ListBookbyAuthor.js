import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'

import BookbyAuthor from '../../molecules/bookDetails/BookbyAuthor'
import Colors from '../../../constants/Colors'
import { queryBooksSameAuthors } from '../../../redux-saga/actions/book.actions'
import { connect } from 'react-redux'

class ListBookbyAuthor extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { id } = this.props
    this.props.queryBooksSameAuthors(id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.queryBooksSameAuthors(this.props.id)
    }
  }
  render() {
    const books = this.props.booksSameAuthors
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            horizontal
            data={books}
            renderItem={({ item }) => (
              <BookbyAuthor
                id={item.id}
                img={item.image}
                author={item.author}
                title={item.title}
                authors={item.authors.map((author) => author.name).join(', ')}
                description={item.description}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginRight: 10
  },
})

const mapStateToProps = (state) => ({
  booksSameAuthors: state.booksSameAuthors,
})

const mapDispatchToProps = {
  queryBooksSameAuthors,
}
export default connect(mapStateToProps, mapDispatchToProps)(ListBookbyAuthor)
