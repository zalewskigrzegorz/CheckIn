import { FlatList, RefreshControl, View } from 'react-native'
import React from 'react'
import CheckPoint from '../components/CheckPoint'
import { useStateValue } from '../context/StateContext'
import Loading from './Loading'

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
        <FlatList
          data={props.data}
          key
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          renderItem={({ item }) => (
            <CheckPoint id={item.id} name={item.name} image={item.image} />
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
