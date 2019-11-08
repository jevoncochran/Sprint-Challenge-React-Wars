import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div>
    <Grid>
        {character.map((character, index) => {
            return (
            <CharacterCard
                key={index}
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                species={character.species}
            />
            );
        })}
    </Grid>
    </div>
  );
}