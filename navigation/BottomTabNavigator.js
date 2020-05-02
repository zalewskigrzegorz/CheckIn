import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Colors from "../constants/Colors";
import AllRoute from "../screens/AllRoute";
import NearRoute from "../screens/NearRoute";
import SettingsRoute from "../screens/SettingsRoute";



export default class BottomTabNavigator extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'near', title: 'Near', icon: 'access-point', color:Colors.NearScreen.primaryColor, badge: 1},
      { key: 'all', title: 'All', icon: 'map' ,color:Colors.AllScreen.primaryColor },
      { key: 'settings', title: 'Settings', icon: 'settings', color:Colors.SettingsScreen.primaryColor, badge:true}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    near: ()=> <NearRoute/>,
    all: ()=> <AllRoute />,
    settings: ()=> <SettingsRoute />,
  });

  render() {
    return (
      <BottomNavigation
        shifting={true}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
