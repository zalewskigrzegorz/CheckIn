import * as React from 'react'
import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import Colors from '../constants/Colors'
import AllRoute from '../screens/AllRoute'
import NearRoute from '../screens/NearRoute'
import SettingsRoute from '../screens/SettingsRoute'

export default function BottomNavigator () {
  const [index, setIndex] = useState(1)
  const routes = [
    {
      key: 'near',
      title: 'Near',
      icon: 'access-point',
      color: Colors.NearScreen.primaryColor,
      badge: 1
    },
    {
      key: 'all',
      title: 'All',
      icon: 'map',
      color: Colors.AllScreen.primaryColor
    },
    {
      key: 'settings',
      title: 'Settings',
      icon: 'settings',
      color: Colors.SettingsScreen.primaryColor,
      badge: true
    }
  ]
  const _renderScene = BottomNavigation.SceneMap({
    near: () => <NearRoute />,
    all: () => <AllRoute />,
    settings: () => <SettingsRoute />
  })

  return (
    <BottomNavigation
      shifting
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={_renderScene}
    />
  )
}
