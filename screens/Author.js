import React, { Component, useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Icon, Card, Right } from 'native-base'
import Colors from '../constants/Colors'
import ViewAllBooks from '../components/oganism/listBook/ViewAllBooks'

const Author = () => {
  const [isShowMoreInfo, setisShowMoreInfo] = useState(false)
  const onClickInfo = () => setisShowMoreInfo((previousState) => !previousState)
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://vanchuongphuongnam.vn/wp-content/uploads/2019/10/Nguyen-Minh-Chau-vhsg-300x288.jpg',
        }}
      />
      <Text style={styles.nameAuthor}>Nguyễn Minh Châu</Text>
      <Text style={styles.description}>
        Nguyễn Minh Châu (20 tháng 10 năm 1930 - 23 tháng 1 năm 1989) là một nhà văn có
        ảnh hưởng quan trọng đối với văn học Việt Nam trong giai đoạn chiến tranh Việt Nam
        và thời kỳ đầu của đổi mới.
      </Text>
      <Card style={styles.review}>
        <TouchableOpacity onPress={onClickInfo}>
          <View style={[styles.inLine, styles.review, { height: 40 }]}>
            <Text style={[styles.textButton, { color: Colors.tintColor }]}>
              Thông tin thêm về tác giả
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
            <Text style={styles.textInfo}>Số sách xuất bản: 1</Text>
            <Text style={styles.textInfo}>Năm sinh: 20/10/1930</Text>
            <Text style={styles.textInfo}>Năm mất: 20/1/1989</Text>
            <Text style={styles.textInfo}>
              Quê quán: làng Văn Thai, tên nôm là làng Thơi, xã Quỳnh Hải, huyện Quỳnh
              Lưu, tỉnh Nghệ An.
            </Text>
            <Text style={styles.textInfo}>
              Tiểu sử: Năm 1945, ông tốt nghiệp trường Kỹ nghệ Huế với bằng Thành chung.
              Tháng 1 năm 1950, ông học chuyên khoa trường Huỳnh Thúc Kháng tại Nghệ Tĩnh
              và sau đó gia nhập quân đội, học ở trường sĩ quan lục quân Trần Quốc Tuấn.
              Từ năm 1952 đến 1956, ông công tác tại Ban tham mưu các tiểu đoàn 722, 706
              thuộc sư đoàn 320. Từ năm 1956 đến 1958, Nguyễn Minh Châu là trợ lý văn hóa
              trung đoàn 64 thuộc sư đoàn 320. Năm 1961, ông theo học trường Văn hóa Lạng
              Sơn. Năm 1962, Nguyễn Minh Châu về công tác tại phòng Văn nghệ quân đội, sau
              chuyển sang tạp chí Văn nghệ quân đội. Ông được kết nạp vào Hội nhà văn Việt
              Nam năm 1972.
            </Text>
          </View>
        )}
      </Card>
      <View style={styles.lineSpace}></View>
      <ViewAllBooks />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
  },
  iconButton: {
    marginTop: 40,
    marginStart: 15,
  },
  nameAuthor: {
    margin: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  numBook: {
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    padding: 7,
    fontSize: 15,
  },

  description: {
    margin: 10,
    fontSize: 15,
  },
  readMore: {
    fontWeight: 'bold',
    marginStart: 10,
    color: '#2f95dc',
    fontSize: 15,
  },
  icon: {
    color: Colors.tintColor,
    marginRight: 10,
    fontSize: 16,
  },
  inLine: {
    flexDirection: 'row',
  },
  textButton: {
    color: Colors.white,
    fontSize: 15,
    alignSelf: 'center',
    borderBottomColor: '#E6E6E6',
  },
  review: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  moreInfo: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  textInfo: {
    fontSize: 15,
    paddingBottom: 5,
  },
  lineSpace: {
    height: 1,
    backgroundColor: '#E6E6E6',
    margin: 10,
  },
})
export default Author
