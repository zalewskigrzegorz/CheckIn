import React from 'react'
import { Avatar, Card, Badge } from 'react-native-paper'
export default function CheckPoint (prop) {
  return (
    <Card.Title
      title={prop.name}
      left={() => <Avatar.Image size={42} source={prop.image} />}
      right={() => (
        <Badge>{Math.floor(Math.random() * (50 + 1))}</Badge>
      )}
    />
  )
}
