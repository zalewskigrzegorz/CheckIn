import { Text, RefreshControl, View, StyleSheet } from 'react-native'
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React from 'react'
import CheckPoint from '../components/CheckPoint'
import { useStateValue } from '../context/StateContext'
import Loading from './Loading'
import { Colors} from 'react-native-paper'

function CheckPointList (props) {
  // test refresh code
  const onRefresh = () => {
    dispatch({
      type: 'refresh',
      isRefreshing: true
    })
    setTimeout(
      () =>
        dispatch({
          type: 'refresh',
          isRefreshing: false
        }),
      2500
    )
  }
  ///

  const [{ isRefreshing }, dispatch] = useStateValue()

  if (isRefreshing) {
    return <Loading />
  } else {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <SwipeableFlatList
          data={props.data}
          key={props.id}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          renderItem={({ item }) => (
            <CheckPoint id={item.id} name={item.name} style={{height: 60}} image={item.image} />
          )}
          renderLeft={({ item }) => (
            <Text style={styles.left}>Check in</Text>
          )}
          renderRight={({ item }) => (
            <Text style={styles.right}>Check Out</Text>
          )}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              onEndReachedThreshold={0.4}
            />
          }
        />
      </View>
    )
  }
}
export default CheckPointList

const styles = StyleSheet.create({
  left: {
    width: "50%",
    height: 60,
    padding: 10,
    backgroundColor: Colors.green800,
    color: Colors.white,
    textAlignVertical: 'center',
    textAlign:'left',
    fontWeight: 'bold',
  },
  right: {
    width: "50%",
    height: 60,
    padding: 10,
    backgroundColor: Colors.red800,
    color: Colors.white,
    textAlignVertical: 'center',
    textAlign: 'right',
    fontWeight: 'bold',
  }
})
