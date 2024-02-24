import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import CharacterModal from "./CharacterModal";
import {
  CharacterListContainer,
  ButtonsContainer,
  StyledButton,
} from "./StyledComponents";

const CharacterList = ({ currentPage, characters, setCurrentPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = characters.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(characters.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <CharacterListContainer>
        {currentItems.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </CharacterListContainer>
      <CharacterModal
        show={showModal}
        character={selectedCharacter}
        onClose={handleCloseModal}
      />
      {characters.length > itemsPerPage && (
        <ButtonsContainer>
          <StyledButton
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </StyledButton>
          <StyledButton
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(characters.length / itemsPerPage)
            }
          >
            Next
          </StyledButton>
        </ButtonsContainer>
      )}
    </>
  );
};

export default CharacterList;
