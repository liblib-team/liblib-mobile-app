import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Body, Card, CardItem } from 'native-base'

import Review from '../components/molecules/review/Review'
import Colors from '../constants/Colors'
import BookInfo from '../components/molecules/bookDetails/BookInfo'
import ViewMore from '../components/molecules/books/ViewMore'
import ReviewDialog from '../components/molecules/review/ReviewDialog'

export default BookDetails = ({ route }) => {
  const title = route.params.title
  const [visibleDiaglog, setVisibleDialog] = useState(false)
  const onCancel = () => {
    setVisibleDialog(false)
  }
  const showDialog = () => {
    setVisibleDialog(true)
  }
  return (
    <ScrollView style={styles.container}>
      <BookInfo title={title} author="alexander" />
      <Text style={styles.filter}>Bình luận nổi bật</Text>
      <Review rating="3" comment="Nice book" />
      <Review rating="5" comment="Very good" />
      <Review rating="2" comment="Not bad" />
      <Review rating="5" comment="This is a long line" />
      <TouchableWithoutFeedback onPress={showDialog}>
        <Card style={styles.review}>
          <CardItem>
            <Body>
              <Text style={styles.diaglog}>Gửi bình luận của bạn</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>

      <ReviewDialog onCancel={onCancel} visibleDiaglog={visibleDiaglog} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  review: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  diaglog: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.tintColor,
  },
  filter: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
