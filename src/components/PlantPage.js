import React, { useState, useEffect }  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants,setPlants] = useState([])
  const [searchTerm,setSearchTerm] = useState("")

  //first fetch data
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(plants => setPlants(plants))

  },[])
  ////
  function handleSearch(e){
   setSearchTerm(e.target.value)
  }

  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray);
  }

  function onDeletePlant(id){
    const updatedPlantsArray = plants.filter((plant)=> plant.id !== id)
    setPlants(updatedPlantsArray)
    console.log(id)
  }

  const plantDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search handleSearch={handleSearch}/>
      <PlantList onDeletePlant={onDeletePlant} plants={plantDisplay}/>
    </main>
  );
}

export default PlantPage;
