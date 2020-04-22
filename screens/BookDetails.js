import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Body, Card, CardItem } from 'native-base'

import Review from '../components/molecules/review/Review'
import Colors from '../constants/Colors'
import BookInfo from '../components/molecules/bookDetails/BookInfo'
import ViewMore from '../components/molecules/books/ViewMore'
import ListBookbyAuthor from '../components/oganism/listBook/ListBookbyAuthor'
import ListBook from '../components/oganism/listBook/ListBook'

export default BookDetails = ({ route }) => {
  const title = route.params.title
  return (
    <ScrollView style={styles.container}>
      <BookInfo title={title} author="alexander" />
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
      <Text style={styles.filter}>Sách cùng tác giả</Text>
      <ListBookbyAuthor />
      <Text style={styles.filter}>Có thể bạn cũng thích</Text>
      <ListBook />
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
