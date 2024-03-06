/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext()
const StoreProvider = ({children}) => {
     const [initialValue, setInitialValue] = useState(0);
       const handleIncrement = () => {
         setInitialValue((prev) => prev + 1);
       };

       const handleDecrement = () => {
         setInitialValue((prev) => prev - 1);
         // if (initialValue === 0) {
         //   setInitialValue(0)
         // }
         initialValue === 0 ? setInitialValue(0) : null;
       };

       const handleReset = () => {
         setInitialValue(0);
       };

       const [fakeStore, setFakeStore] = useState([])

       useEffect(() => {
        fakeStoreData()
      },[])

      const fakeStoreData =  async  () => {
        const byData = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
        );
        setFakeStore(byData.data);
      }

  return (
    <StoreContext.Provider
      value={{
        setInitialValue,
        initialValue,
        handleIncrement,
        handleDecrement,
        handleReset,
        fakeStore,
      }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider