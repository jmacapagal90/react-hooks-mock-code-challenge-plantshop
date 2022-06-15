import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants,setPlants] = useState()
  //first fetch data
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(plants => setPlants(plants))

  },[])
  ////
  // function handleSearch(e){
  //   console.log(e.target.value)
  // }
  return (
    <div className="app">
      <Header plants={plants}/>
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
