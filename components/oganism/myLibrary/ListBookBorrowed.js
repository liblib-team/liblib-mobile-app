import * as React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, FlatList } from 'react-native'
import { DatePicker, Card, Icon } from 'native-base'
import { connect } from 'react-redux'
import { queryListBorrowed } from '../../../redux-saga/actions/listBorrowed.action'

import Colors from '../../../constants/Colors'
import BookBrowed from '../../molecules/books/BookBrowed'

class ListBookBorrowed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.queryListBorrowed()
  }
  convertTime = (time) => {
    return new Date(time * 1000).toLocaleDateString('en-GB')
  }
  render() {
    const books = this.props.listBookBorrowed
    return (
      <ScrollView>
        <Card style={styles.date}>
          <Text style={styles.text}>Từ ngày:</Text>
          <DatePicker textStyle={{ color: Colors.tintColor }}></DatePicker>
          <Text style={styles.text}>Đến ngày:</Text>
          <DatePicker textStyle={{ color: Colors.tintColor }}></DatePicker>

          <Icon name="search" style={styles.iconSearch} />
        </Card>

        <SafeAreaView style={styles.container}>
          <FlatList
            vertical
            data={books}
            renderItem={({ item }) => (
              <BookBrowed
                id={item.bookId}
                img={item.image}
                name={item.title}
                status={item.status}
                borowTime={this.convertTime(item.borrowedDate)}
                returnTime={this.convertTime(item.dueDate)}
                timeRemaining={(item.dueDate - item.borrowedDate) / (60 * 60 * 24)}
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
  listBookBorrowed: state.listBorrowed,
})

const mapDispatchToProps = {
  queryListBorrowed,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookBorrowed)
