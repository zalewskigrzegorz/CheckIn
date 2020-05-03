import * as React from 'react'
import { Platform, StatusBar, View, StyleSheet } from 'react-native'
import { SplashScreen } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import BottomNavigator from './navigation/BottomTabNavigator'
import { Provider as PaperProvider, Colors } from 'react-native-paper'

import { ContextProvider } from './context/CheckInContext'

export default function App (props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync () {
      try {
        SplashScreen.preventAutoHide()
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      // <ContextProvider >
      <PaperProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <BottomNavigator />
        </View>
      </PaperProvider>
      // </ContextProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.amber50
  }
})
