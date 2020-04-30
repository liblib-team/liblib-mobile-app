import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import { Icon, CheckBox, ListItem } from 'native-base'

import Colors from '../constants/Colors'
import { queryLogin } from '../redux-saga/actions/auth.actions'
import { connect } from 'react-redux'

const SignIn = (props) => {
  const [rememberMe, setRememberMe] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleButton = () => setRememberMe((previousState) => !previousState)

  useEffect(() => {
    if (props.auth.username) {
      props.navigation.navigate('Trang chủ')
    }
  }, [props.auth])

  const onSubmit = () => {
    const params = {
      username,
      password,
    }
    props.queryLogin(params)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Đăng nhập</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mã số sinh viên *"
          placeholderTextColor={Colors.placeholderText}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mật khẩu *"
          placeholderTextColor={Colors.placeholderText}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Icon name="eye" style={styles.eye} />
      </View>
      <ListItem style={styles.check}>
        <CheckBox checked={rememberMe} onPress={handleButton} />
        <Text style={styles.textCheck}>Duy trì đăng nhập</Text>
      </ListItem>
      <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text style={styles.text1}>Đăng ký tài khoản mới.</Text>
      </TouchableHighlight>
      <TouchableHighlight>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  queryLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
