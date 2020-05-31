import React, { useEffect, useState } from "react" 
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native" 
import { Button, Icon, ListItem, List, Toast } from "native-base" 
import { useNavigation } from "@react-navigation/native" 
import { connect } from "react-redux" 
import { logoutAction } from "../redux-saga/actions/auth.actions" 
import * as ImagePicker from "expo-image-picker" 
import * as Permissions from "expo-permissions" 
import Constants from "expo-constants" 

import { SERVER_URL, getHeaders } from "../auth/index" 
import Colors from "../constants/Colors" 

const Profile = (props) => {
  const navigator = useNavigation() 
  const [userName, setUserName] = useState("") 
  const [imgUser, setImgUser] = useState("") 
  const onLogin = () => {
    navigator.navigate("SignIn", { title: "Đăng nhập" }) 
  } 

  const onLogout = () => {
    props.logout() 
    onLogin() 
  } 
  const fetchUserInfo = async () => {
    await fetch(SERVER_URL + "user/detail/", {
      headers: getHeaders(true),
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setUserName(responseJson.username) 
        setImgUser(responseJson.image) 
      })
      .catch((error) => {
        console.error(error) 
      }) 
  } 
  useEffect(() => {
    fetchUserInfo()
    getPermissionAsync()
  }) 
  getPermissionAsync = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL) 
      if (status !== "granted") {
        alert("Xin lỗi, bạn cần cấp quyền truy cập thư viện để tiếp tục!")
      }
    }
  }

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      }) 
      if (!result.cancelled) {
        var formdata = new FormData() 
        formdata.append("image", {
          uri: result.uri,
          name: "image.jpg",
          type: "image/jpeg",
        }) 
        await fetch(SERVER_URL + "user/upload", {
          headers: getHeaders(true, true),
          method: "POST",
          body: formdata,
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.success == true) {
              Toast.show({
                type: "success",
                text: "Cập nhật ảnh thành công!",
              }) 
              fetchUserInfo() 
            } else {
              Toast.show({
                type: "danger",
                text: response.message,
              }) 
            }
          })
          .catch((error) => {
            console.log("upload error", error) 
            Toast.show({
              type: "danger",
              text: "Cập nhật ảnh thất bại!",
            }) 
          }) 
      }
    } catch (E) {
      console.log(E) 
    }
  } 

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.card1}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.avatar}
            source={{
              uri: imgUser,
            }}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: -12,
              }}
            >
              {userName}
            </Text>
            <Text style={{ fontSize: 15, marginTop: 0 }}>
              Đại học CN - ĐHQGHN
            </Text>
            <TouchableOpacity
              onPress={pickImage}
              style={{
                backgroundColor: Colors.tintColor,
                borderRadius: 8,
                flexDirection: "row",
                width: 200,
                marginTop: 10,
              }}
            >
              <Icon
                name="camera"
                style={{
                  alignSelf: "center",
                  color: Colors.white,
                  marginLeft: 10,
                  marginTop: 5,
                  marginBottom: 5,
                  marginRight: 5,
                }}
              />
              <Text style={{ alignSelf: "center", color: Colors.white }}>
                Thay đổi ảnh đại diện
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.qr}
          source={{
            uri:
              "https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg",
          }}
        />
      </View>
      <List style={styles.list1}>
        <ListItem>
          <Icon name="ios-chatboxes" style={styles.icon} />
          <Text>Chat với admin</Text>
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
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
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
    borderRadius: 100,
    borderColor: Colors.tintColor,
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  qr: {
    alignSelf: "center",
    width: 200,
    height: 200,
    marginBottom: 15,
    position: "relative",
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 5,
  },
  list1: {
    marginTop: 135,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
    padding: 10,
  },
  list2: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
    padding: 10,
  },
  card2: {
    marginTop: 130,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.white,
    height: 40,
    alignSelf: "center",
  },
  line: {
    height: 2,
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors.tintColor,
  },
  buttonText: {
    color: "black",
    marginStart: 10,
    alignSelf: "center",
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
