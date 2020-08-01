import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import styled, {keyframes} from "styled-components";
import Character from "../src/components/Character.js";


const App = () => {
  const [mainCharacter, setCharacter] = useState([]);

  const SimpleAnimation = keyframes `
  0%{color: yellow};
  25%{color: gray};
  50%{color: green};
  75%{color: blue};
  
  `
  const LetterStyler = styled.h2`
  color: purple;
  animation-name: ${SimpleAnimation};
  animation-duration: 5s;
  
  `

  useEffect(() => {
    axios.get("https://swapi.dev/api/films/1/")
      .then(response => {
        console.log("Success", response);
        setCharacter(response.data.characters);
        
      })
      .catch(error => {
        console.log("error", error);
      })



  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <LetterStyler className="Header">Characters</LetterStyler>
      {mainCharacter.map(url => <Character key={url} characterList={url}/>)}
    </div>
  );
}

export default App;
