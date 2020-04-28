import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Icon, CheckBox, ListItem } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import Colors from '../constants/Colors'
import { TouchableHighlight } from 'react-native-gesture-handler'

const SignIn = () => {
  const navigator = useNavigation()
  const [rememberMe, setrememberMe] = useState(true)

  const handleButton = () => setrememberMe((previousState) => !previousState)

  const SignUp = () => {
    navigator.navigate('SignUp')
  }
  const ChangePassword = () => {
    navigator.navigate('ChangePassword')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Đăng nhập</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mã số sinh viên *"
          placeholderTextColor={Colors.placeholderText}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mật khẩu *"
          placeholderTextColor={Colors.placeholderText}
        />
        <Icon name="eye" style={styles.eye} />
      </View>
      <ListItem style={styles.check}>
        <CheckBox checked={rememberMe} onPress={handleButton} />
        <Text style={styles.textCheck}>Duy trì đăng nhập</Text>
      </ListItem>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={SignUp}>
        <Text style={styles.text1}>Đăng ký tài khoản mới.</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ChangePassword}>
        <Text style={styles.text2}>Quên mật khẩu?</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  iconButton: {
    marginTop: 40,
    marginStart: 15,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: Colors.white,
    height: 25,
    margin: 20,
    alignSelf: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.tintColor,
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
  },
  eye: {
    color: Colors.secondary_light,
    fontSize: 22,
  },
  signup: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
    marginHorizontal: 35,
    marginTop: 10,
  },
  textCheck: {
    marginStart: 10,
    color: Colors.secondary_light,
    fontSize: 15,
  },
  check: {
    marginLeft: 35,
    marginEnd: 35,
  },
  text1: {
    alignSelf: 'center',
  },
  text2: {
    marginTop: 10,
    alignSelf: 'center',
    color: Colors.tintColor,
  },
})
export default SignIn
