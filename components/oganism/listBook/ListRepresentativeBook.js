import React, { useRef, useState, useEffect } from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { View, Text, StyleSheet } from 'react-native'

import RenderBook from '../../molecules/books/RenderBook'
import Layout from '../../../constants/Layout'

const ListBook = [
  {
    title: 'VNU',
    subtitle: 'Thư viện đại học quốc gia Hà Nội',
    illustration:
      'https://media.ex-cdn.com/EXP/media.nongnghiep.vn/files/f1/2018/12/12/15-01-46_thu_vien_cu_dh_kinh_te_quoc_dn.jpg',
  },
  {
    title: 'VNU',
    subtitle: 'Phòng học tòa nhà C1T',
    illustration:
      'https://mekongsoft.com.vn/assets/images/tintuc/87a910928566086690fa9e71a7871e2d.jpg',
  },
  {
    title: 'Trường đại học Công nghệ',
    subtitle: 'Trường đại học Công nghệ',
    illustration: 'https://student.uet.vnu.edu.vn/images/logo.png',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
]
const screenWidth = Layout.window.width

export default ListRepresentativeBook = (props) => {
  const [entries, setEntries] = useState([])
  const carouselRef = useRef(null)

  useEffect(() => {
    setEntries(ListBook)
  }, [])
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={RenderBook}
        hasParallaxImages={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
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
})
