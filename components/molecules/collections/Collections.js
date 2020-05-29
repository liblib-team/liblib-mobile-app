import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { List, ListItem, Card } from 'native-base'
import { connect } from 'react-redux'

import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'
import { queryListSubjects } from '../../../redux-saga/actions/subject.actions'

const background = [
  Colors.pink,
  Colors.blue,
  Colors.secondary_dark,
  Colors.warningBackground,
  Colors.black,
  Colors.tintColor,
  Colors.warningBackground,
  Colors.orange,
]

class Collection extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.queryListSubjects()
  }
  render() {
    let Subjects = []
    Subjects = this.props.listSubjects
    return (
      <View style={styles.container}>
        {Subjects.length > 0 && (
          <List
            horizontal
            dataArray={Subjects}
            renderRow={(item) => (
              <ListItem
                noBorder
                style={[
                  styles.card,
                  { backgroundColor: background[Math.floor(Math.random() * 8)] },
                ]}
                onPress={() => {
                  this.props.onGoToViewAll(item.name, item.id)
                }}
              >
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}
                  style={styles.subject}
                >
                  {item.name}
                </Text>
              </ListItem>
            )}
          />
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginRight: 10
  },
  card: {
    borderRadius: 5,
    height: 80,
    width: Layout.window.width * 0.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subject: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => ({
  listSubjects: state.listSubjects,
})
const mapDispatchToProps = {
  queryListSubjects,
}
export default connect(mapStateToProps, mapDispatchToProps)(Collection)
