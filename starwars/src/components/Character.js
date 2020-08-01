// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled, {keyframes} from "styled-components";

function Character(props) {
    
    const [myCharacter, setCharacters] = useState([])

    const SimpleAnimation2 = keyframes `
    0%{color: pink};
    25%{color: purple};
    50%{color: gray};
    75%{color: yellow}; `

    const MioHeader = styled.h2`
    color:red;
    font-size: 3rem;
    text-decoration: underline;
    animation-name: ${SimpleAnimation2};
    animation-duration: 5s;
    
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
