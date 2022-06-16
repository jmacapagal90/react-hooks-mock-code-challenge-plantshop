import React, { useState } from "react";

function PlantCard({id, name, image, price, onDeletePlant}) {
  const [stock,setStock] = useState(true)
  function handleClick(){
    setStock(!stock)
  }
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    onDeletePlant(id);
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
      <button type="delete" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
