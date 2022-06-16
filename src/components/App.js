import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
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
  console.log(searchTerm)
  // const plantsDisplay = plants.filter((plant) => {
  // const plantName = plant.name
  // plantName.toLowercase().includes(searchTerm.toLowercase())})

  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
