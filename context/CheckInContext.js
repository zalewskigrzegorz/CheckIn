import React, { createContext } from "react";
import useCheckin from '../hooks/useCheckin'

const defaultValues = {
  actions: {
    setRegister: async () => {},
    checkIn: async () => {},
    checkOut: async () => {},
    updateLocation: async () => {},
    setLoading: async () => {},
  },
  state: {
    email: "",
    password: "",
    isRegistered: false,
    location: "",
    currentState: { id: "", name: "", checked: false },
    nearList: [],
    allList: [],
    isLoading: false,
  },
};

export const DealsSearchContext = createContext(defaultValues);

export const ContextProvider = ({ initialState, children }) => {
  const {
    setRegister,
    checkIn,
    checkOut,
    updateLocation,
    nearList,
    allList,
    setLoading,
  } = useCheckin(initialState);

  return (
    <DealsSearchContext.Provider
      value={{
        actions: {
          setRegister,
          checkIn,
          checkOut,
          updateLocation,
          setLoading,
        },
        state: {
          email: initialState.email,
          password: initialState.password,
          location: initialState.location,
          currentState: initialState.currentState,
          isRegistered: initialState.isRegistered,
          nearList: nearList,
          allList: allList,
          isLoading: initialState.isLoading,
        },
      }}
    >
      {children}
    </DealsSearchContext.Provider>
  );
};
