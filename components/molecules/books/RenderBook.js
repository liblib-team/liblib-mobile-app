import React from 'react'
import { ParallaxImage } from 'react-native-snap-carousel'
import { View, Text, StyleSheet } from 'react-native'
import Layout from '../../../constants/Layout'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default RenderBook = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item.illustration }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.6}
        {...parallaxProps}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.author}>{item.subtitle}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    width: Layout.window.width - 60,
    height: Layout.window.width - 100,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  author: {
    fontSize: 14,
    marginHorizontal: 5,
    color: Colors.secondary_dark,
  },
})
