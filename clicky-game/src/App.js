import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import character from "./characters.json"

function App() {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <CharacterCard
      image={character[0].image}
      />
      <CharacterCard
      image={character[1].image}
      />
      <CharacterCard
      image={character[2].image}
      />
       <CharacterCard
      image={character[3].image}
      />
       <CharacterCard
      image={character[4].image}
      />
       <CharacterCard
      image={character[5].image}
      />
       <CharacterCard
      image={character[6].image}
      />
       <CharacterCard
      image={character[7].image}
      />
       <CharacterCard
      image={character[8].image}
      />
       <CharacterCard
      image={character[9].image}
      />
       <CharacterCard
      image={character[10].image}
      />
       <CharacterCard
      image={character[11].image}
      />
      
    </Wrapper>
  );
}

export default App;
