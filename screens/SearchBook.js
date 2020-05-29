import React, { useState, useContext } from 'react'
import { View, Text, Content, List, ListItem, Icon, Right, Body, Left } from 'native-base'
import SearchHeader from '../components/molecules/searchHeader/SearchHeader'
import ViewAllBooks from '../components/oganism/listBook/ViewAllBooks'

const SearchBook = () => {
  return (
    <View>
      <SearchHeader autoFocus={true} isVisibaleBackButton={true}></SearchHeader>
      <ViewAllBooks />
    </View>
  )
}
export default SearchBook
