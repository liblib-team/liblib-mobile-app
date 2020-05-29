import React, { useState, useContext } from 'react'
import { View, Text, Content, List, ListItem, Icon, Right, Body, Left } from 'native-base'
import SearchHeader from '../components/molecules/searchHeader/SearchHeader'

const SearchBook = () => {
  return (
     <View>
       <SearchHeader autoFocus={true} isVisibaleBackButton={true}>    
       </SearchHeader>
      <Text>
          Không tìm thấy sách nào liên quan! Nhập lại với từ khóa khác!
      </Text>
  </View> 
  )
  }
export default SearchBook