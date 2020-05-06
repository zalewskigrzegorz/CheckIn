import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { useStateValue } from '../context/StateContext'
export default function CheckPoint (prop) {
  const [dispatch] = useStateValue()

  return (
    <Card.Title
      title={prop.name}
      left={() => <Avatar.Image size={24} source={prop.image} />}
      right={() => (
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
