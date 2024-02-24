import React, { useState, useEffect } from "react";
import {
  FilterForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
} from "./StyledComponents";

const FilterPanel = ({ characters, setFilteredCharacters, resetPage }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const filtered = characters.filter((character) => {
      return (
        (!name || character.name.toLowerCase().includes(name.toLowerCase())) &&
        (!status || character.status.toLowerCase() === status.toLowerCase()) &&
        (!species ||
          character.species.toLowerCase() === species.toLowerCase()) &&
        (!gender || character.gender.toLowerCase() === gender.toLowerCase())
      );
    });

    setFilteredCharacters(filtered);
    resetPage();
  }, [name, status, species, gender, characters]);

  return (
    <FilterForm>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        Status:
        <StyledSelect
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <StyledOption value="">All</StyledOption>
          <StyledOption value="Alive">Alive</StyledOption>
          <StyledOption value="Dead">Dead</StyledOption>
          <StyledOption value="unknown">Unknown</StyledOption>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel>
        Species:
        <StyledSelect
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          <StyledOption value="">All</StyledOption>
          <StyledOption value="Alien">Alien</StyledOption>
          <StyledOption value="Human">Human</StyledOption>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel>
        Gender:
        <StyledSelect
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <StyledOption value="">All</StyledOption>
          <StyledOption value="Female">Female</StyledOption>
          <StyledOption value="Male">Male</StyledOption>
          <StyledOption value="Genderless">Genderless</StyledOption>
          <StyledOption value="unknown">Unknown</StyledOption>
        </StyledSelect>
      </StyledLabel>
    </FilterForm>
  );
};

export default FilterPanel;
