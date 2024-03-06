// import React, { Component, useState } from "react";

import { useContext, useState, Component } from "react";
import { StoreContext } from "../store/Store";

//class function component
export default class CountNumber extends Component {
  static contextType = StoreContext; // Assigning the context to the class
  render() {
    const { initialValue, handleIncrement, handleDecrement, handleReset } =
      this.context;

    return (
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <p>{initialValue}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }
}

//class function component
// const CountNumber = () => {

//   const { initialValue, handleIncrement, handleDecrement, handleReset } =
//     useContext(CountContext);

//   return (
//     <div>
//       <button onClick={handleIncrement}>Increment</button>
//       <p>{initialValue}</p>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default CountNumber;
