import * as React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { SERVER_URL, getHeaders} from '../../../auth'

import { queryListReverations } from '../../../redux-saga/actions/listReservations.actions'
import Colors from '../../../constants/Colors'
import BookReserved from '../../molecules/books/BookReserved'

class ListBookRevered extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.queryListReverations()
  }
  convertTime = (time) => {
    return new Date(time * 1000).toLocaleDateString('en-GB')
  }
  removeOrderBook = (id) => {
    fetch(SERVER_URL + 'reservation/cancel/' + id, {
      headers: getHeaders(true),
      method: 'POST',
    })
      .then((response) => {
        console.log(response.json())
      })
      .catch((error) => {reject(error); console.log(error)})
  }
  render() {
    const books = this.props.listReverations

    return (
      <ScrollView>
        <Text style={styles.filter}>Vui lòng lấy sách trước ngày hẹn!</Text>
        <SafeAreaView style={styles.container}>
          <FlatList
            vertical
            data={books}
            renderItem={({ item }) => (
              <BookReserved
                reservationId = {item.id}
                id={item.bookId}
                img={item.image}
                name={item.title}
                borowTime={this.convertTime(item.reservationDate)}
                returnTime={this.convertTime(item.reservationDate + 60 * 60 * 24 * 3)}
                timeRemaining={item.timeRemaining}
                status={item.status}
                removeOrderBook={() => this.removeOrderBook(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  iconSearch: {
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 5,
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

const mapStateToProps = (state) => ({
  listReverations: state.listReverations,
  auth: state.auth,
})

const mapDispatchToProps = {
  queryListReverations,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookRevered)
