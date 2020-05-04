import React, { useState } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'

export default function CheckPoint (prop) {
  const [snackBarVisible, setSnackBarVisibility] = useState(false)
  const assets = {
    'gliwice.png': require('../assets/images/gliwice.png'),
    'home.png': require('../assets/images/home.png'),
    'katowice.png': require('../assets/images/katowice.png'),
    'wroclaw.png': require('../assets/images/wroclaw.png')
  }
  return (
    <Card.Title
      title={prop.name}
      left={props => <Avatar.Image size={24} source={assets[prop.image]} />}
      right={props => (
        <IconButton
          size={24}
          icon={(snackBarVisible && 'map-marker-off') || 'map-marker-check'}
          onPress={() => {
            setSnackBarVisibility(!snackBarVisible)
          }}
        />
      )}
    />
  )
}
