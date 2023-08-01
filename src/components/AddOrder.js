import React, { useState } from "react";

const AddOrder = (props) => {
  const [uID, setUID] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const addID = (event) => {
    setUID(event.target.value);
  };

  const addPrice = (event) => {
    setPrice(event.target.value);
  };

  const addDish = (event) => {
    setDish(event.target.value);
  };

  const addTable = (event) => {
    setTable(event.target.value);
  };

  const orderData = {
    id: +uID,
    price: +price,
    dish: dish,
    table: table,
  };
  const submitHandler = (event) => {
    event.preventDefault();

    localStorage.setItem(orderData.id, JSON.stringify(orderData));

    // console.log(orderData);
    props.onAddOrder(orderData);
    setUID("");
    setPrice("");
    setDish("");
    setTable("");
  };

  const orderTable1 = () => {
    if (orderData.table === "Table 1") {
      localStorage.setItem(orderData.id, JSON.stringify(orderData));
    }
  };
  const orderTable2 = () => {
    if (orderData.table === "Table 2") {
      localStorage.setItem(orderData.id, JSON.stringify(orderData));
    }
  };
  const orderTable3 = () => {
    if (orderData.table === "Table 3") {
      localStorage.setItem(orderData.id, JSON.stringify(orderData));
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Unique ID</label>
            <input type="text" id="ID" value={uID} onChange={addID} />
          </div>
          <div>
            <label>Price</label>
            <input type="number" id="price" value={price} onChange={addPrice} />
          </div>
          <div>
            <label>Dish</label>
            <input type="text" id="dish" value={dish} onChange={addDish} />
          </div>
          <div>
            <label>Table</label>
            <select value={table} onChange={addTable}>
              <option>Select</option>
              <option>Table 1</option>
              <option>Table 2</option>
              <option>Table 3</option>
            </select>
          </div>
          <div>
            <button type="submit">Add Expense</button>
          </div>
        </div>
        <div>
          <h1>Table 1</h1>
          <ul>
            <li>{orderTable1}</li>
          </ul>
        </div>
        <div>
          <h1>Table 2</h1>
          <ul>
            <li>{orderTable2}</li>
          </ul>
        </div>
        <div>
          <h1>Table 3</h1>
          <ul>
            <li>{orderTable3}</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
