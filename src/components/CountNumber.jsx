// import React, { Component, useState } from "react";

import { useContext, useState } from "react";
import { CountContext } from "../store/CountStore";

//class function component
// export default class CountNumber extends Component {
//   render() {

//     return (
//       <div>
//         <button>Increment</button>
//         <p>0</p>
//         <button>Decrement</button>
//       </div>
//     );
//   }
// }

//class function component
const CountNumber = () => {
  // const [initialValue, setInitialValue] = useState(0);
  const { initialValue, setInitialValue } = useContext(CountContext);
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

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>{initialValue}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountNumber;
