// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled from "styled-components";

function Character(props) {
    
    const [myCharacter, setCharacters] = useState([])

    

    const MioHeader = styled.h2`
    color:red
    
    `;

    useEffect(() => {
        axios.get(props.characterList)
        .then(response => {
            console.log("we got it", response)
            setCharacters(response.data.name)
        })
        .catch(error => {
            console.log("Error", error)
        })
    
    })
 
    return (
        <div>
            <MioHeader>
                {myCharacter}
                
            </MioHeader>
            
        </div>
    )
}

export default Character
