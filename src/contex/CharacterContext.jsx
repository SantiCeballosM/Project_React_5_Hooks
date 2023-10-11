/* eslint-disable react/prop-types */
  import { createContext, useState } from 'react';

  export const CharacterContext = createContext();

  export const CharacterProvider = ({ children }) => {
    const [name_Character, setName_Character] = useState("ONE PIECE");

    return (
      <CharacterContext.Provider value={[name_Character, setName_Character]}>
        {children}
      </CharacterContext.Provider>
    );
  };

