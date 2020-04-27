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
  CheckBox,
  ListItem,
} from 'native-base'
const SignIn = () => {
  return (
    <View>
      <Icon style={styles.iconButton} name="arrow-back" />
      <Text style={styles.signup}>Đăng nhập</Text>
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
      <ListItem style={styles.check}>
        <CheckBox checked={true} />
        <Text style={styles.textCheck}>Duy trì đăng nhập</Text>
      </ListItem>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Đăng ký tài khoản mới.</Text>
      <Text style={styles.text2}>Quên mật khẩu?</Text>
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
    margin: 20,
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
    marginBottom: 20,
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
  textCheck: {
    marginStart: 10,
    color: '#708090',
    fontSize: 15,
  },
  check: {
    marginStart: 35,
    marginEnd: 35,
  },
  text1: {
    alignSelf: 'center',
  },
  text2: {
    marginTop: 10,
    alignSelf: 'center',
    color: '#2f95dc',
  },
})
export default SignIn
