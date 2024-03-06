/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const CountContext = createContext()
const CountStoreProvider = ({children}) => {
     const [initialValue, setInitialValue] = useState(0);
  return (
    <CountContext.Provider
      value={{
        setInitialValue,
        initialValue,
      }}>
      {children}
    </CountContext.Provider> 
  );
}

export default CountStoreProvider