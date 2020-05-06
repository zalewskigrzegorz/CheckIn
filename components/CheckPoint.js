import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { useStateValue } from '../context/StateContext'
export default function CheckPoint (prop) {
  const [dispatch] = useStateValue()

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
          icon='map-marker-check'
          // icon={(snackBarVisible && 'map-marker-off') || 'map-marker-check'}
          onPress={() => {
            dispatch({
              type: 'checkIn',
              id: prop.id
            })
          }}
        />
      )}
    />
  )
}
