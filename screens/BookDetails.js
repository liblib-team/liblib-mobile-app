import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Body, Card, CardItem } from 'native-base'

import Review from '../components/molecules/review/Review'
import Colors from '../constants/Colors'
import BookInfo from '../components/molecules/bookDetails/BookInfo'
import ViewMore from '../components/molecules/books/ViewMore'

export default BookDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <BookInfo />
      <ViewMore filterName="Bình luận nổi bật" />
      <Review rating="3" comment="Nice book" />
      <Review rating="5" comment="Very good" />
      <Review rating="2" comment="Not bad" />
      <Review rating="5" comment="This is a long line" />
      <Card style={styles.review}>
        <CardItem>
          <Body>
            <Text style={styles.diaglog}>Gửi bình luận của bạn</Text>
          </Body>
        </CardItem>
      </Card>
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
})
