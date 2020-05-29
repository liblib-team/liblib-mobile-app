import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Dialog from 'react-native-dialog'
import { AirbnbRating } from 'react-native-ratings'
import { connect } from 'react-redux'
import { queryPostRatingBook } from '../../../redux-saga/actions/ratings-book.actions'

import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

class ReviewDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      comment: '',
    }
  }

  ratingCompleted = (rating) => {
    this.setState({
      rating: rating,
    })
  }

  onRate = () => {
    const reviewBook = {}
    reviewBook.bookId = this.props.id
    reviewBook.point = this.state.rating
    reviewBook.comment = this.state.comment
    this.props.queryPostRatingBook(reviewBook)
    this.props.setVisibleDialog(false)
  }

  render() {
    return (
      <View>
        <Dialog.Container
          visible={this.props.visibleDiaglog}
          contentStyle={styles.container}
          headerStyle={styles.headerStyle}
          footerStyle={styles.footerStyle}
        >
          <Dialog.Title children="Đánh giá sách" />
          <AirbnbRating
            showRating={false}
            defaultRating={0}
            onFinishRating={this.ratingCompleted}
            starContainerStyle={styles.starContainerStyle}
          />
          <Dialog.Input
            placeholder="Viết cảm nhận của bạn..."
            wrapperStyle={styles.textInput}
            value={this.state.comment}
            onChangeText={(text) => this.setState({ comment: text })}
          />
          <Dialog.Button
            label="Hủy"
            onPress={() => this.props.setVisibleDialog(false)}
            color={Colors.warningText}
          />
          <Dialog.Button
            label="Đánh giá"
            onPress={this.onRate}
            color={Colors.tintColor}
          />
        </Dialog.Container>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: Layout.window.width - 16,
    justifyContent: 'center',
  },
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.secondary,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.tintColor,
    color: Colors.tintColor,
    height: 80,
    width: Layout.window.width - 48,
    marginTop: 10,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingTop: 10,
  },
  starContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
  },
})

const mapStateToProps = (state) => ({
  reviewBook: state.reviewBook,
})
const mapDispatchToProps = {
  queryPostRatingBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDialog)
