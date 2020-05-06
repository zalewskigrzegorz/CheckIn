import { Appbar } from 'react-native-paper'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import CheckPoint from '../components/CheckPoint'
import { useStateValue } from '../context/StateContext'

export default function AllRoute () {
  const [{ allList }, dispatch] = useStateValue()

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='All available Checkpoints' />
      </Appbar.Header>
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps='always'
        removeClippedSubviews={false}
      >
        {allList.map(value => {
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
    backgroundColor: Colors.AllScreen.primaryColor
  },
  scrollView: {
    padding: 8
  }
})
