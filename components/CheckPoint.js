import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
export default function CheckPoint (prop) {
  return (
    <Card.Title
      title={prop.name}
      left={() => <Avatar.Image size={42} source={prop.image} />}
      right={() => (
        <IconButton
          size={24}
          icon='map-marker-check'
          onPress={() => {
            console.log('Check in')
          }}
        />
      )}
    />
  )
}
