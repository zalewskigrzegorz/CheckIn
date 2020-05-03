import { useState } from 'react'

export const useCheckin = initialState => {
  const [isLoading, setLoading] = useState(false)
  const [isRegistered, setRegister] = useState(false)
  const [nearList, updateLocation] = useState(initialState.nearList)
  const [email, updateEmail] = useState(initialState.email)
  const [password, updatePassword] = useState(initialState.password)
  const currentState = initialState.currentState
  const checkIn = initialState.checkIn
  const checkOut = initialState.checkOut
  const allList = initialState.allList
  const location = initialState.location

  return {
    updateEmail,
    updatePassword,
    email,
    password,
    location,
    currentState,
    nearList,
    allList,
    isLoading,
    isRegistered,
    setRegister,
    checkIn,
    checkOut,
    updateLocation,
    setLoading
  }
}
