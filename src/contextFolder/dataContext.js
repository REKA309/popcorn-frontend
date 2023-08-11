import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [directorArray, setDirectorArray] = useState([]);
  const [actorArray, setActorArray] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);

  return (
    <DataContext.Provider
      value={{
        directorArray,
        setDirectorArray,
        actorArray,
        setActorArray,
        languageArray,
        setLanguageArray,
        genreArray,
        setGenreArray,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
