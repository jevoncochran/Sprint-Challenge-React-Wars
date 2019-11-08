import React from "react";
import styled from "styled-components";

const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: grey;
  color: black;
  width: 500px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 1%;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

const MainTitle = styled.h2`
  font-size: 50px;
  color: black;
  background: tomato;
`;


const CharacterCard = props => {
  return (
    <Pulse key={props.index}>
        <MainTitle>Character: {props.name}</MainTitle>
        <p>born: {props.birth_year}</p>
        <p>gender: {props.gender}</p>
    </Pulse>
  );
};
export default CharacterCard;