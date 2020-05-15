import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import { AsyncStorage } from 'react-native'
import Colors from '../../../constants/Colors'
import BookSaved from '../../molecules/books/BookSaved'

class ListBookSaved extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }
  componentDidMount = async () => {
    try {
      const bookList = await AsyncStorage.getItem('favoriteBooks')
      if (bookList !== null) {
        this.setState({
          books: JSON.parse(bookList),
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          {this.state.books.length > 0 && (
            <FlatList
              data={this.state.books}
              renderItem={({ item }) => (
                <BookSaved
                  id={item.id}
                  img={item.image}
                  title={item.title}
                  description={item.description}
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

export default ListBookSaved
