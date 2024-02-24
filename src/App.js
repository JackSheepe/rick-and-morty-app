import React, { useState, useEffect } from "react";
import FilterPanel from "./components/FilterPanel";
import { api } from "./api/Api";
import CharacterList from "./components/CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .getCharacters()
      .then((data) => {
        setCharacters(data.results);
        setFilteredCharacters(characters);
      })
      .catch(console.error);
  }, []);

  const resetPage = () => {
    setCurrentPage(1);
  };

  return (
    <div>
      <FilterPanel
        characters={characters}
        setFilteredCharacters={setFilteredCharacters}
        resetPage={resetPage}
      />
      <CharacterList
        currentPage={currentPage}
        characters={filteredCharacters}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
