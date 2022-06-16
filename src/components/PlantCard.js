import React, { useState } from "react";

function PlantCard({id, name, image, price}) {
  const [stock,setStock] = useState(true)

  function handleClick(){
    setStock(!stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={()=>handleClick()}>In Stock</button>
      ) : (
        <button  onClick={()=>handleClick()}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
