import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Body, Card, CardItem } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import Review from '../components/molecules/review/Review'
import Colors from '../constants/Colors'
import BookInfo from '../components/molecules/bookDetails/BookInfo'
import ViewMore from '../components/molecules/books/ViewMore'
import ListBookbyAuthor from '../components/oganism/listBook/ListBookbyAuthor'
import ListBook from '../components/oganism/listBook/ListBook'
import ReviewDialog from '../components/molecules/review/ReviewDialog'

export default BookDetails = ({ route }) => {
  const id = route.params.id
  const navigator = useNavigation()
  const [visibleDiaglog, setVisibleDialog] = useState(false)
  const onCancel = () => {
    setVisibleDialog(false)
  }
  const showDialog = () => {
    setVisibleDialog(true)
  }
  const onGoToViewAll = (filterName) => {
    navigator.navigate('Author', { title: filterName })
  }
  return (
    <ScrollView style={styles.container}>
      <BookInfo id={id} />
      <Text style={styles.filter}>Bình luận nổi bật</Text>
      <Review id={id} />
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
      <ViewMore filterName="Sách cùng tác giả" onGoToViewAll={onGoToViewAll} />
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
