import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";
import Character from "../src/components/Character.js";


// function App() {
//   const [mainCharacter, setCharacter] = useState([]);
//   const [sideCharacter, setSideCharacter] = useState();
//   const MainHeader = styled.h1`
//   color: red;
//   `;

//   const SideCharacter = styled.h2`
//   color:blue;
  
//   `

//   useEffect(() => {
//     axios.get("https://swapi.dev/api/films/1/")
//       .then(response => {
//         console.log("Success", response);
//         setCharacter(response.data.characters);
        
//       })
//       .catch(error => {
//         console.log("error", error);
//       })



//   },[])

  


  



const App = () => {
  const [mainCharacter, setCharacter] = useState([]);

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
      <h1 className="Header">Characters</h1>
      {mainCharacter.map(url => <Character key={url} characterList={url}/>)}
    </div>
  );
}

export default App;
