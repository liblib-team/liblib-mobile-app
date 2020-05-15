import * as React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'native-base'

import CustomImage from '../../atoms/CustomImage'
import Colors from '../../../constants/Colors'

export default BookReserved = (props) => {
  const { id, img, name, borowTime, returnTime, status } = props
  return (
    <View>
      <Card style={styles.container}>
        <View style={styles.content}>
          <View>
            <CustomImage img={img} />
          </View>
          <View>
            <Text style={styles.name} numberOfLines={3}>
              {name}
            </Text>
            <Text style={styles.detail}>Ngày đặt: {borowTime}</Text>
            <Text style={styles.detail}>Hạn lấy: {returnTime}</Text>
            <Text style={styles.detail}>Trạng thái: {status}</Text>
          </View>
        </View>
        <View>
          <Icon name="md-more" style={styles.iconMore}></Icon>
        </View>
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
  name: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 5,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 5,
    color: Colors.secondary_dark,
  },
  iconMore: {},
})
