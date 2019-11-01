import React from "react";
import "./style.css";
//This dumb component will just taking the Image information 
//to be displayed. on the UI side.

//Props will represent the information being past in. EX:Images and information
function CharacterCard(props) {
  
    return (
    <div className="card">
      <div className="img-container">
      <img
          src={props.image}
          alt={props.alt}
          clicked={props.clicked}
          onClick={() => props.handleClick(props.id)}
        />
      </div>
    </div>
  );
    
  }
  //In order to use this component we need to export then import to where we will be using it
  export default CharacterCard