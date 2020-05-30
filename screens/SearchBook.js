import React from 'react'
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native'
import SearchHeader from '../components/molecules/searchHeader/SearchHeader'
import { connect } from 'react-redux'

import { querySearchBooks } from '../redux-saga/actions/search-books.actions'
import Colors from '../constants/Colors'

class SearchBook extends React.Component {
  constructor(props) {
    super(props)
  }
  onSearchBooks = async (key) => {
     this.props.querySearchBooks(key)
  }
  component
  render() {
    let books = this.props.listBooksBySearch
    return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <SearchHeader autoFocus={true} isVisibaleBackButton={true} onSearchBooks={this.onSearchBooks}></SearchHeader>
      <SafeAreaView style={styles.container}>
          {books.length > 0 ? (
            <FlatList
              numColumns={2}
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
          ) : (
            <View>
              <Text style={styles.text}>
                Không tìm thấy sách với từ khóa bạn nhập! Thử lại với từ khóa khác!
              </Text>
            </View>
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
    marginTop: 10
  },
  text: {
    fontSize: 16,
    color: Colors.secondary_dark,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,

  }
})

const mapStateToProps = (state) => ({
  listBooksBySearch: state.listBooksBySearch,
})

const mapDispatchToProps = {
  querySearchBooks,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook)
