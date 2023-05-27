import React, { useState } from "react";
import Item from "./Item";
import { GetData } from "./DataMenu";

export default function Menu() {
  const [items, setItems] = useState(GetData);


 

  return (
    <form className="container">
      <h1>Menu</h1>
      {items.map((e) => (
        <Item key={e.name} name={e.name} price={e.price} />
      ))}
      <button type="submit" className="" >
        OK
      </button>
    </form>
  );
}