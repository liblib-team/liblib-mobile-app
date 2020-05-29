import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Card, Thumbnail } from 'native-base'
import { Rating } from 'react-native-ratings'
import { queryGetRatingBook } from '../../../redux-saga/actions/ratings-book.actions'

import Colors from '../../../constants/Colors'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'

class Review extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { id } = this.props
    this.props.queryGetRatingBook(id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.queryGetRatingBook(this.props.id)
    }
    if( this.props.listRatingBook !== prevProps.listRatingBook) {
      this.props.queryGetRatingBook(this.props.id)
    }
  }
  render() {
    listRatingBook = this.props.listRatingBook
    return (
      <View>
        <SafeAreaView>
          <FlatList
            data={listRatingBook}
            renderItem={({ item }) => (
              <Card style={styles.container}>
                <View style={styles.inLine}>
                  <Thumbnail
                    style={styles.image}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <View style={styles.inCol}>
                    <Text style={styles.nameperson}>{item.name}</Text>
                    <Rating startingValue={item.point} imageSize={15} readonly />
                  </View>
                </View>
                <View>
                  <Text style={styles.comment}>{item.comment}</Text>
                </View>
              </Card>
            )}
          ></FlatList>
        </SafeAreaView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  inLine: {
    flexDirection: 'row',
  },
  inCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  comment: {
    fontSize: 13,
    color: Colors.secondary_dark,
    marginLeft: 50,
  },
  nameperson: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
})

const mapStateToProps = (state) => ({
  listRatingBook: state.listRatingBook,
})

const mapDispatchToProps = {
  queryGetRatingBook,
}
export default connect(mapStateToProps, mapDispatchToProps)(Review)
