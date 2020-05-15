import React from 'react'
import { AsyncStorage } from 'react-native'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button, Icon, Card, Right, Toast } from 'native-base'
import { Rating } from 'react-native-ratings'
import { queryBookDetail } from '../../../redux-saga/actions/book.actions'
import { connect } from 'react-redux'

import Layout from '../../../constants/Layout'
import Colors from '../../../constants/Colors'

class BookInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowMoreInfo: false,
    }
  }
  onClickInfo() {
    this.setState((prevState) => ({
      isShowMoreInfo: !prevState.isShowMoreInfo,
    }))
  }
  saveToFavorite = async () => {
    try {
      let favoriteBooks = JSON.parse(await AsyncStorage.getItem('favoriteBooks'))
      const book = this.props.bookDetail
      if (favoriteBooks == null) {
        favoriteBooks = []
      }
      favoriteBooks.push(book)
      await AsyncStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks))

      Toast.show({
        type: 'success',
        text: 'Lưu sách thành công! Vui lòng vào mục yêu thích để đọc sách!',
      })
    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'danger',
        text: 'Lưu sách không thành công',
      })
    }
  }
  componentDidMount() {
    const { id } = this.props
    this.props.queryBookDetail(id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.queryBookDetail(this.props.id)
    }
  }

  render() {
    const { isShowMoreInfo } = this.state
    const book = this.props.bookDetail
    return (
      <View>
        <View style={styles.container}>
          <View style={[styles.inLine, { justifyContent: 'center', marginTop: 5 }]}>
            <CustomImage img={book.image} />
            <View style={styles.inCol}>
              <View style={styles.customTitle}>
                <Text style={styles.title} numberOfLines={5}>
                  {book.title}
                </Text>
              </View>
              <Text style={styles.author}>
                {book && book.authors
                  ? book.authors.map((author) => author.name).join(', ')
                  : ''}
              </Text>
              <View style={[styles.inLine, { marginLeft: 5 }]}>
                <Rating startingValue={book.point} imageSize={15} readonly />
                <Text style={styles.author}>{book.point}</Text>
              </View>

              <Button iconLeft small style={styles.button} onPress={this.saveToFavorite}>
                <Text style={styles.textButton}>Lưu sách</Text>
              </Button>
              <Button iconLeft small style={styles.button}>
                <Text style={styles.textButton}>Mượn sách</Text>
              </Button>
            </View>
          </View>
        </View>
        <Card style={styles.review}>
          <TouchableOpacity onPress={() => this.onClickInfo(isShowMoreInfo)}>
            <View style={[styles.inLine, styles.review, { height: 40 }]}>
              <Text style={[styles.textButton, { color: Colors.tintColor }]}>
                Thông tin thêm về sách
              </Text>
              <Right>
                {isShowMoreInfo ? (
                  <Icon name="up" type="AntDesign" style={styles.icon} />
                ) : (
                  <Icon name="down" type="AntDesign" style={styles.icon} />
                )}
              </Right>
            </View>
          </TouchableOpacity>
          {isShowMoreInfo === true && (
            <View style={styles.moreInfo}>
              <Text style={styles.textInfo}>Nhà xuất bản: {book.publisher}</Text>
              <Text style={styles.textInfo}>
                Danh mục: {book.subjects.map((subject) => subject.name).join(', ')}
              </Text>
              <Text style={styles.textInfo}>Ngôn ngữ: {book.language} </Text>
              <Text style={styles.textInfo}>{book.description}</Text>
            </View>
          )}
        </Card>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  inLine: {
    flexDirection: 'row',
  },
  inCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  customTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: 'bold',
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  author: {
    fontSize: 14,
    marginHorizontal: 5,
    color: Colors.secondary_dark,
  },
  button: {
    width: 140,
    justifyContent: 'space-around',
    backgroundColor: Colors.pink,
    marginTop: 10,
  },
  textButton: {
    color: Colors.white,
    fontSize: 16,
    alignSelf: 'center',
  },
  review: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  icon: {
    color: Colors.tintColor,
    marginRight: 10,
    fontSize: 16,
  },
  moreInfo: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  textInfo: {
    fontSize: 14,
    paddingBottom: 5,
  },
})

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
})

const mapDispatchToProps = {
  queryBookDetail,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo)
