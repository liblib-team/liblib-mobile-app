import * as React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { logoutAction } from '../actions/authActions'

const Profile = (props) => {
  const navigator = useNavigation()
  const onLogin = () => {
    navigator.navigate('SignIn', { title: 'Đăng nhập' })
  }

  const onLogout = () => {
    props.logout()
    onLogin()
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>Cài đặt, thông tin cá nhân</Text>
      <Button onPress={onLogin}>
        <Text>Đăng nhập tài khoản</Text>
      </Button>
      <Button onPress={onLogout}>
        <Text>Đăng xuất</Text>
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

const mapDispatchToProps = {
  logout: logoutAction,
}

export default connect(null, mapDispatchToProps)(Profile)
