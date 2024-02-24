import React from "react";
import {
  ModalBackground,
  ModalContent,
  CloseButton,
  CharacterImage,
  CharacterInfoModal,
  CharacterNameModal,
} from "./StyledComponents";

const CharacterModal = ({ show, character, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CharacterImage src={character.image} alt={character.name} />
        <CharacterNameModal>{character.name}</CharacterNameModal>
        <CharacterInfoModal>Status: {character.status}</CharacterInfoModal>
        <CharacterInfoModal>Species: {character.species}</CharacterInfoModal>
        <CharacterInfoModal>Gender: {character.gender}</CharacterInfoModal>
        <CharacterInfoModal>Origin: {character.origin.name}</CharacterInfoModal>
        <CharacterInfoModal>
          Location: {character.location.name}
        </CharacterInfoModal>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default CharacterModal;
