import React, { useState } from "react";

function PlantCard({id, name, image, price, onDeletePlant}) {
  const [stock,setStock] = useState(true)
  ///functionality functions

  //this changes the stock variable which sets the button if it's in or out of stock
  function handleClick(){
    setStock(!stock)
  }
  //this handles the delete by deleting plant from server and then sending it to cb to re render DOM
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    onDeletePlant(id);
  }
  // render cards by using props
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
