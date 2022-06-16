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
  /// this creats a search term for filtering
  function handleSearch(e){
   setSearchTerm(e.target.value)
  }

  //this updates the plants state variable when a new plant is added via form
  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray);
  }
  
  //this updates the plant state vare when a plant is deleted
  function onDeletePlant(id){
    const updatedPlantsArray = plants.filter((plant)=> plant.id !== id)
    setPlants(updatedPlantsArray)
    console.log(id)
  }
  //this uses the state var to filter out what plants to show based on the above functions
  const plantDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  //send plant data and callback functions
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search handleSearch={handleSearch}/>
      <PlantList onDeletePlant={onDeletePlant} plants={plantDisplay}/>
    </main>
  );
}

export default PlantPage;
