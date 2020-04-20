import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { List, ListItem, Card } from 'native-base'

import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'

const Subject = [
  { id: 1, subject: 'Business' },
  { id: 2, subject: 'Social Sciences' },
  { id: 3, subject: 'Infomation' },
  { id: 4, subject: 'English' },
]
const background = [Colors.pink, Colors.secondary, Colors.blue, Colors.green]
export default Collection = () => {
  return (
    <List
      horizontal
      dataArray={Subject}
      renderRow={(item) => {
        return (
          <ListItem noBorder style={styles.card}>
            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.subject}>
              {item.subject}
            </Text>
          </ListItem>
        )
      }}
    />
  )
}
const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: Colors.secondary,
    backgroundColor: Colors.tintColor,
    flex: 1,
    height: 80,
    width: Layout.window.width / 2,
  },
  subject: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
})
