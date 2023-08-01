import React, { useState } from "react";
import AddOrder from "./components/AddOrder";

const App = () => {
  
  const [orders, setorders] = useState('');

  const addOrderHandler = (order) => {
    setorders((prevOrder) => {
      return {order, ...prevOrder};
    });
    console.log(orders)
  }
  return (
    <React.Fragment>
      <AddOrder onAddOrder={addOrderHandler}/>
    </React.Fragment>
  );
  }

  export default App;
  
  
