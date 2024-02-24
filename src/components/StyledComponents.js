import styled from "styled-components";

const FilterForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 150px;

  @media (max-width: 768px) {
    width: 97%;
  }
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 150px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
  }
`;

const StyledOption = styled.option`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 80%;
  max-width: 500px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
`;

const CharacterListContainer = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: auto;
  padding: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#007bff" : "#0056b3")};
  }
`;

const CharacterCardContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;

const CharacterName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const CharacterNameModal = styled.h3`
  margin: 0;
  font-size: 2.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CharacterInfo = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const CharacterInfoModal = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

export {
  FilterForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
  ModalBackground,
  ModalContent,
  CloseButton,
  CharacterListContainer,
  ButtonsContainer,
  StyledButton,
  CharacterCardContainer,
  CharacterImage,
  CharacterName,
  CharacterInfo,
  CharacterInfoModal,
  CharacterNameModal,
};
