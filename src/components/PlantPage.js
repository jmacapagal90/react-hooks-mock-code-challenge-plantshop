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
  const plantDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <main>
      <NewPlantForm />
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plantDisplay}/>
    </main>
  );
}

export default PlantPage;
