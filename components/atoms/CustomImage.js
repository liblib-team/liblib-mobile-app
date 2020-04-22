import * as React from 'react'
import { StyleSheet } from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'

import Layout from '../../constants/Layout'

export default CustomImage = (props) => {
  const { img } = props
  return (
    <AutoHeightImage
      style={styles.image}
      width={Layout.window.width * 0.4}
      source={{
        uri: img,
      }}
    />
  )
}
const styles = StyleSheet.create({
  image: {
    margin: 5,
    borderRadius: 5,
  },
})
