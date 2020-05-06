import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

function Loading () {
  return (
    <View
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <ActivityIndicator animating size='large' style={styles.spinner} />
    </View>
  )
}
export default Loading

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
