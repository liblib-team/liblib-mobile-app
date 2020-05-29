import React from 'react'
import { Header, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import SearchInput from '../../atoms/SearchInput'
import VoiceButton from '../../atoms/VoiceButton'
import Colors from '../../../constants/Colors'

const SearchHeader = (props) => {
    const { isVisibaleBackButton } = props
    const navigator = useNavigation()
  return (
    <Header androidStatusBarColor={Colors.tintColor} rounded style={styles.header}>
        { isVisibaleBackButton && 
        <Icon name='arrow-back' type='MaterialIcons' style={styles.icon} onPress={() => {navigator.goBack()}}/>}   
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
  icon: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginRight: 15,
  }
})

export default SearchHeader
