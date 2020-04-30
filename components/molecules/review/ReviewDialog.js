import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Dialog from 'react-native-dialog'
import { AirbnbRating } from 'react-native-ratings'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export default ReviewDialog = (props) => {
  const { onCancel, onRate, visibleDiaglog } = props
  const reactNativeModalProps = {
    onBackdropPress: onCancel,
  }
  const ratingCompleted = (rating) => {
    console.log(rating)
  }

  return (
    <View>
      <Dialog.Container
        visible={visibleDiaglog}
        {...reactNativeModalProps}
        contentStyle={styles.container}
        headerStyle={styles.headerStyle}
        footerStyle={styles.footerStyle}
      >
        <Dialog.Title children="Đánh giá sách" />
        <AirbnbRating
          showRating={false}
          defaultRating={0}
          onFinishRating={ratingCompleted}
          starContainerStyle={styles.starContainerStyle}
        />
        <Dialog.Input label="Viết cảm nhận của bạn..." wrapperStyle={styles.textInput} />
        <Dialog.Button label="Hủy" onPress={onCancel} color={Colors.warningText} />
        <Dialog.Button label="Đánh giá" onPress={onRate} color={Colors.tintColor} />
      </Dialog.Container>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: Layout.window.width - 16,
    justifyContent: 'center',
  },
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.secondary,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.tintColor,
    color: Colors.tintColor,
    height: 80,
    width: Layout.window.width - 48,
    marginTop: 10,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingTop: 10,
  },
  starContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
  },
})
