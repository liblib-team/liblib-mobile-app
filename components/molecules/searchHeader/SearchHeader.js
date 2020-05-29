import React from 'react'
import { Header } from 'native-base'
import { StyleSheet } from 'react-native'

import SearchInput from '../../atoms/SearchInput'
import VoiceButton from '../../atoms/VoiceButton'
import Colors from '../../../constants/Colors'

const SearchHeader = (props) => {
  return (
    <Header androidStatusBarColor={Colors.tintColor} rounded style={styles.header}>
      <SearchInput
        onGoToSearchView={props.onGoToSearchView}
        autoFocus={props.autoFocus}
      />
      <VoiceButton />
    </Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.tintColor,
  },
})

export default SearchHeader
