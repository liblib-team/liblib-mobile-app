import * as React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Card, Icon, Button } from 'native-base'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default BookReserved = (props) => {
  const { id, img, name, borowTime, returnTime, status, reservationId, removeOrderBook } = props
  return (
    <View>
      <Card style={styles.container}>
        <View style={styles.content}>
          <View>
            <CustomImage img={img} />
          </View>
          <View>
            <View style={styles.title}>
              <Text style={styles.name} numberOfLines={3}>
              {name}
              </Text>
            </View>
            <Text style={styles.detail}>Ngày đặt: {borowTime}</Text>
            <Text style={styles.detail}>Hạn lấy: {returnTime}</Text>
            <Text style={styles.detail}>Trạng thái: {status}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => removeOrderBook(reservationId)}>
          <Icon name="close" type="AntDesign" style={styles.iconMore}></Icon>
        </TouchableWithoutFeedback>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 5,
    fontWeight: 'bold',
    flexGrow: 1,
    flex: 1,
  },
  detail: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 5,
    color: Colors.secondary_dark,
  },
  iconMore: {
    fontSize: 20
  },
 
})
