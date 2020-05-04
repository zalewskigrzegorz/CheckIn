import { Appbar } from 'react-native-paper'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import CheckPoint from '../components/CheckPoint'

export default function AllRoute () {
  const list = [
    {
      id: '4f7fcbef-649b-4126-b79f-86c45b677d45',
      name: 'Home Office',
      image: 'home.png'
    },
    {
      id: 'c44cba64-4b9d-4d9b-bad5-4bb8030c0940',
      name: 'ALM Gliwice',
      image: 'gliwice.png'
    },
    {
      id: 'd94b5c69-85f3-44e4-8eda-664a1837654c',
      name: 'ALM Katowice',
      image: 'katowice.png'
    },
    {
      id: '175b7bce-178c-4643-9b84-9611ff8660e6',
      name: 'ALM Wroclaw',
      image: 'wroclaw.png'
    }
  ]

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
        {list.map(value => {
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
