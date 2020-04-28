import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigator = useNavigation()
  const SignIn = () => {
    navigator.navigate('SignIn', { title: 'Đăng nhập' })
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>Cài đặt, thông tin cá nhân</Text>
      <Button onPress={SignIn}>
        <Text>Đăng nhập tài khoản</Text>
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
})
