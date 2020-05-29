import React from 'react'
import { Container, Content } from 'native-base'
import { ScrollView } from 'react-native'

import SearchHeader from '../../molecules/searchHeader/SearchHeader'

const MainLayout = (props) => {
  const { onGoToSearchView, autoFocusSearchInput } = props
  return (
    <Container>
      <SearchHeader
        autoFocus={autoFocusSearchInput}
        onGoToSearchView={onGoToSearchView}
      />
      <Content>
        <ScrollView>{props.children}</ScrollView>
      </Content>
    </Container>
  )
}

export default MainLayout
