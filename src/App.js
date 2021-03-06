import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './Card/CharacterCard';


function App() {

  const [characterList, setcharacterList] = useState([])
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters") 
    .then(response => {
      return response.json()
    })
    .then(data => {
     setcharacterList(data)
    })
    .catch(err => {
      alert(err)
    })
   
  }, [])
  return (
    <div className="App">
   <div className="card">

     {
       characterList.map(item =>(
        <CharacterCard
        cardDetails={item} />

       ))
     }
    


      
   </div>
    </div>
  );
  //card details
  /*name, house, dateOfBirth, ancestry, patronous, actor, alive, image */
}

export default App;
