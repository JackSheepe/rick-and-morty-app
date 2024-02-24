import React from "react";
import {
  CharacterCardContainer,
  CharacterImage,
  CharacterName,
  CharacterInfo,
} from "./StyledComponents";

const CharacterCard = ({ character, onClick }) => {
  return (
    <CharacterCardContainer key={character.id} onClick={onClick}>
      <CharacterImage src={character.image} alt={character.name} />
      <CharacterName>{character.name}</CharacterName>
      <CharacterInfo>Status: {character.status}</CharacterInfo>
      <CharacterInfo>Species: {character.species}</CharacterInfo>
      <CharacterInfo>Gender: {character.gender}</CharacterInfo>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
