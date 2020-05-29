import React, { useState } from 'react'
import { Item, Icon, Input } from 'native-base'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../constants/Colors'

const SearchInput = (props) => {
  const [text, setText] = useState('')

  const navigator = useNavigation()

  const {autoFocus, isBookSearch} = props
  return (
    <Item rounded style={styles.searchInput}>
      <Icon name="search" />
      <Input
        placeholder="Nhập để tìm kiếm sách"
        autoFocus={autoFocus}
        onFocus={() => {
          if (isBookSearch !== true) {
            navigator.navigate("SearchBook")
          }
        }}
        onChangeText={(text) => {
          setText(text)
        }}
        value={text}
        autoCapitalize={'none'}
      />
      <TouchableOpacity
        onPress={() => {
          if (setText) {
            setText('')
          }
        }}
      >
        <Icon name="close" />
      </TouchableOpacity>
    </Item>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    marginVertical: 10,
  },
})

export default SearchInput
