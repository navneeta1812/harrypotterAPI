import React from 'react';

function CharacterCard({cardDetails}) {
  return (

    <div className="sub-card">
    <div className="img">
     <img cla src={cardDetails.image} />
    </div >
     <div className="about">
       <p className="name-style">{cardDetails.name}</p>
       <p className="actor-style">{cardDetails.actor}</p>
       <p className="text">{cardDetails.house}</p>
       <p className="text">{ cardDetails.dateOfBirth && "DOB:"+ cardDetails.dateOfBirth}</p>
       <p className="text">{
         cardDetails.alive?"Alive":"Dead"
       }</p>
       </div>
   </div>
  );
}

  export default CharacterCard