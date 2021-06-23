import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [characterList, setcharacterList] = useState([])
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters") 
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      alert(err)
    })
   
  }, [])
  return (
    <div className="App">
      

    
    </div>
  );
  //card details
  /*name, house, dateOfBirth, ancestry, patronous, actor, alive, image */
}

export default App;
