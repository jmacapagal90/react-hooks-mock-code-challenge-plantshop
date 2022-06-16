import React, {useState} from "react";

function NewPlantForm({ onAddPlant }) {
  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [price,setPrice] = useState("")
  //this sends the data up to the server which then sends it back down to onAddPlant which rerenders DOM
  function handleFormSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newPlant) => onAddPlant(newPlant));
  }
  

  //on change, set these state variables based on the input value. the input value is set to the state variables so that we have realtime response
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=> handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} value={image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
