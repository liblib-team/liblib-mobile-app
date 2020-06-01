import * as React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Alert } from 'react-native'
import { AsyncStorage } from 'react-native'
import Colors from '../../../constants/Colors'
import BookSaved from '../../molecules/books/BookSaved'
import store from '../../../store'
import { Text } from 'native-base'

class ListBookSaved extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }

  updateListBook = async () => {
    try {
      const username = store.getState().auth.username
      const bookList = await AsyncStorage.getItem('favoriteBooks' + username)
      if (bookList !== null) {
        this.setState({
          books: JSON.parse(bookList),
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount = () => this.updateListBook()

  componentDidUpdate = () => this.updateListBook()

   removeBook = (bookId) => {
    Alert.alert(
     "Bạn có chắc chắn muốn xóa sách này?",
      "Sau khi xóa sách không còn trong danh sách yêu thích của bạn!",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: async() => {
          try {
            const username = store.getState().auth.username
            let booksJSON= await AsyncStorage.getItem('favoriteBooks' + username)
            let booksArray = JSON.parse(booksJSON);
            for( var i = 0; i < booksArray.length; i++){
              if ( booksArray[i].id == bookId){
                booksArray.splice(i, 1)
               }
             }
            await AsyncStorage.setItem('favoriteBooks' + username, JSON.stringify(booksArray))
            this.setState({
               books:booksArray
            })
        }
        catch(error){
            console.log(error)
        }
        } }
      ],
      { cancelable: false }
    );

  }

  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          {this.state.books.length > 0 ? (
            <FlatList
              data={this.state.books}
              renderItem={({ item }) => (
                <BookSaved
                  id={item.id}
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  removeBook={this.removeBook}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View style={styles.container}>
              <Text>Bạn chưa lưu sách nào!</Text>
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
    marginTop: 10
  },
})

export default ListBookSaved
