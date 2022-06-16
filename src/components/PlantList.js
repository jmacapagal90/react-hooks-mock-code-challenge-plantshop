import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,onDeletePlant}) {

  return (
    <ul className="cards">
    {plants.map((plant)=>{
      return (
        <PlantCard 
          id={plant.id}
          key={plant.id} 
          name={plant.name}
          image={plant.image}
          price={plant.price} 
          onDeletePlant={onDeletePlant}
        />
      )
    })};
    </ul>
  );
}

export default PlantList;
