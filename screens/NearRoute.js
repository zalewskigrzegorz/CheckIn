import { Appbar } from 'react-native-paper'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '../constants/Colors'
import { useStateValue } from '../context/StateContext'
import CheckPointList from '../components/CheckPointList'

export default function NearRoute () {
  const [{ nearList }] = useStateValue()

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='Near Checkpoints' />
      </Appbar.Header>
      <CheckPointList data={nearList} />
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
