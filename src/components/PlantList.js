import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const Card = plants.map((plant)=>{
    return (
    <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
  )})
  return (
    <ul className="cards">
      {Card}
    </ul>
  );
}

export default PlantList;
