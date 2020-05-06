import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import { useStateValue } from '../context/StateContext'
import Colors from '../constants/Colors'
import AllRoute from '../screens/AllRoute'
import NearRoute from '../screens/NearRoute'
import SettingsRoute from '../screens/SettingsRoute'

export default function BottomTabNavigator () {
  const [{ tabIndex }, dispatch] = useStateValue()
  const routes = [
    {
      key: 'near',
      title: 'Near',
      icon: 'access-point',
      color: Colors.NearScreen.primaryColor,
      badge: 2
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
      navigationState={{ index: tabIndex, routes }}
      onIndexChange={tab =>
        dispatch({
          type: 'switchTab',
          newTabIndex: tab
        })}
      renderScene={_renderScene}
    />
  )
}
