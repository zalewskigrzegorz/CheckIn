import { Appbar } from 'react-native-paper'
import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Colors from '../constants/Colors'
import CheckPoint from '../components/CheckPoint'
import { useStateValue } from '../context/StateContext'

export default function NearRoute () {
  const [{ nearList }, dispatch] = useStateValue()

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='Near Checkpoints' />
      </Appbar.Header>
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps='always'
        removeClippedSubviews={false}
      >
        {nearList.map(value => {
          return (
            <CheckPoint
              key={value.id}
              id={value.id}
              name={value.name}
              image={value.image}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: Colors.NearScreen.primaryColor
  },
  scrollView: {
    padding: 8
  }
})
