import * as React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import { Button, Icon, ListItem, List } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { logoutAction } from '../redux-saga/actions/auth.actions'

import Colors from '../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'


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
      <View style={styles.card1}>
         <View style={{ flexDirection: 'row' }}>
           <Image
            style={styles.avatar}
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: -12,
              }}
            >
              17021101
            </Text>
            <Text style={{ fontSize: 15, marginTop: 0 }}>Đại học CN - ĐHQGHN</Text>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.tintColor,
                borderRadius: 8,
                flexDirection: 'row',
                width: 200,
                marginTop: 10,
              }}
            >
              <Icon
                name="camera"
                style={{
                  alignSelf: 'center',
                  color: Colors.white,
                  marginLeft: 10,
                  marginTop: 5,
                  marginBottom: 5,
                  marginRight: 5,
                }}
              />
              <Text style={{ alignSelf: 'center', color: Colors.white }}>
                Thay đổi ảnh đại diện
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.qr}
          source={{
            uri: 'https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg',
          }}
        />
      </View>
      <List style={styles.list1}>
         <ListItem >
           <Icon name="ios-chatboxes" style={styles.icon} />
           <Text>Chat với admin</Text>
         </ListItem>
         <ListItem>
           <Icon name="question"  style={styles.icon} />
           <Text>Câu hỏi thường gặp</Text>
         </ListItem>
         <ListItem>
           <Icon name="ios-help-buoy" style={styles.icon} />
           <Text>Trợ giúp</Text>
         </ListItem>
         <ListItem>
           <Icon name="book" style={styles.icon} />
           <Text>Điều khoản chính sách</Text>
         </ListItem>
       </List>
       <List style={styles.list2}>
       <ListItem onPress={onLogin}>
           <Icon name="log-in" style={styles.icon} />
           <Text>Đăng nhập</Text>
         </ListItem>

         <ListItem>
           <Icon name="lock" style={styles.icon} />
           <Text>Thay đổi mật khẩu</Text>
         </ListItem>
         
         <ListItem onPress={onLogout}>
           <Icon name="log-out" style={styles.icon} />
           <Text>Đăng xuất</Text>
         </ListItem>
       </List>
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
  card1: {
        height: 200,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        borderBottomColor: Colors.secondary_dark,
        borderBottomWidth: 1,
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderColor: Colors.tintColor,
        borderWidth: 2,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
      },
      qr: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        marginBottom: 15,
        position: 'relative',
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
      },
      list1: {
            marginTop: 135,
            margin: 10,
            borderRadius: 5,
            backgroundColor: '#F2F2F2',
            padding: 10,
          },
          list2: {
            margin: 10,
            borderRadius: 5,
            backgroundColor: '#F2F2F2',
            padding: 10,
          },
          card2: {
            marginTop: 130,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
          },
          button: {
            flexDirection: 'row',
            width: '100%',
            backgroundColor: Colors.white,
            height: 40,
            alignSelf: 'center',
          },
          line: {
            height: 2,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: Colors.tintColor,
          },
          buttonText: {
            color: 'black',
            marginStart: 10,
            alignSelf: 'center',
            fontSize: 15,
          },
          icon: {
            color: Colors.tintColor,
            marginRight: 10,
          },
})

const mapDispatchToProps = {
  logout: logoutAction,
}

export default connect(null, mapDispatchToProps)(Profile)
