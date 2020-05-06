import { Appbar } from 'react-native-paper'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import { useStateValue } from '../context/StateContext'
import CheckPointList from '../components/CheckPointList'

export default function AllRoute () {
  const [{ allList }] = useStateValue()

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='All available Checkpoints' />
      </Appbar.Header>
      <CheckPointList data={allList} />
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
