import React, { createContext } from 'react'
import useCheckin from '../hooks/useCheckin'

const defaultValues = {
  actions: {
    setRegister: async () => {},
    checkIn: async () => {},
    checkOut: async () => {},
    updateLocation: async () => {},
    setLoading: async () => {}
  },
  state: {
    email: '',
    password: '',
    isRegistered: false,
    location: '',
    currentState: { id: '', name: '', checked: false },
    nearList: [],
    allList: [
      { id: '4f7fcbef-649b-4126-b79f-86c45b677d45', name: 'Home Office', image: 'home.pnh' },
      { id: 'c44cba64-4b9d-4d9b-bad5-4bb8030c0940', name: 'ALM Gliwice', image: 'gliwice.pnh' },
      { id: 'd94b5c69-85f3-44e4-8eda-664a1837654c', name: 'ALM Katowice', image: 'katowice.pnh' },
      { id: '175b7bce-178c-4643-9b84-9611ff8660e6', name: 'ALM Wroclaw', image: 'wroclaw.pnh' }
    ],
    isLoading: false
  }
}

export const DealsSearchContext = createContext(defaultValues)

export const ContextProvider = (children) => {
  const {
    setRegister,
    checkIn,
    checkOut,
    updateLocation,
    nearList,
    allList,
    setLoading
  } = useCheckin(defaultValues.state)

  return (
    <DealsSearchContext.Provider
      value={{
        actions: {
          setRegister,
          checkIn,
          checkOut,
          updateLocation,
          setLoading
        },
        state: {
          email: initialState.email,
          password: initialState.password,
          location: initialState.location,
          currentState: initialState.currentState,
          isRegistered: initialState.isRegistered,
          nearList: nearList,
          allList: allList,
          isLoading: initialState.isLoading
        }
      }}
    >
      {children}
    </DealsSearchContext.Provider>
  )
}
