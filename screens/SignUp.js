import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Input,
  Item,
} from 'native-base'

const SignUp = () => {
  return (
    <View>
      <Text style={styles.signup}>Đăng ký tài khoản</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mã số sinh viên *"
          placeholderTextColor="#708090"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mật khẩu *"
          placeholderTextColor="#708090"
        />
        <Icon name="eye" style={styles.eye} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nhập lại mật khẩu *"
          placeholderTextColor="#708090"
        ></TextInput>
        <Icon name="eye" style={styles.eye} />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Tạo tài khoản</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  iconButton: {
    marginTop: 40,
    marginStart: 15,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#fff',
    height: 25,
    margin: 15,
    alignSelf: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#2f95dc',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  eye: {
    color: '#708090',
    fontSize: 22,
  },
  signup: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    marginStart: 35,
    marginTop: 10,
  },
})
export default SignUp
