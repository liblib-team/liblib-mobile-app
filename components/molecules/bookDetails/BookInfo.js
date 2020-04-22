import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button, Icon, Card, Right } from 'native-base'
import { Rating } from 'react-native-ratings'

import Layout from '../../../constants/Layout'
import Colors from '../../../constants/Colors'

export default BookInfo = (props) => {
  const { id, title, img, author } = props
  const [isShowMoreInfo, setisShowMoreInfo] = useState(false)
  const onClickInfo = () => setisShowMoreInfo((previousState) => !previousState)
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.inLine, { justifyContent: 'center', marginTop: 5 }]}>
          <CustomImage img="https://bizweb.dktcdn.net/100/197/269/products/phan-tich-chung-khoan-outline-26.jpg?v=1521167573353" />
          <View style={styles.inCol}>
            <View style={styles.customTitle}>
              <Text style={styles.title} numberOfLines={5}>
                {title}
              </Text>
            </View>

            <Text style={styles.author}>{author}</Text>
            <View style={[styles.inLine, { marginLeft: 5 }]}>
              <Rating startingValue={2.5} imageSize={15} readonly />
              <Text style={styles.author}>4.7</Text>
            </View>

            <Button iconLeft small style={styles.button}>
              <Text style={styles.textButton}>Lưu sách</Text>
            </Button>
            <Button iconLeft small style={styles.button}>
              <Text style={styles.textButton}>Mượn sách</Text>
            </Button>
          </View>
        </View>
      </View>
      <Card style={styles.review}>
        <TouchableOpacity onPress={onClickInfo}>
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
            <Text style={styles.textInfo}>Nhà sản xuất: Đại học quốc gia Hà Nội</Text>
            <Text style={styles.textInfo}>Danh mục: Sách tâm lý khoa học</Text>
            <Text style={styles.textInfo}>Ngông ngữ: Tiếng anh</Text>
            <Text style={styles.textInfo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
        )}
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  inLine: {
    flexDirection: 'row',
  },
  image: {
    height: Layout.window.height / 3.5,
    width: Layout.window.width / 2.5,
    margin: 5,
    borderRadius: 5,
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
