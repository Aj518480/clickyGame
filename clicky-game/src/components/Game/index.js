import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import CharacterCard from "../CharacterCard";
import character from "../../characters.json";
import NavBar from "../NavBar";


class Game extends Component{
    constructor(props){
        super(props);

        this.state = {
            score: 0,
            topScore: 0,
            clicked: false,
            character
        };
    }

    
       


render(){
    return (
        <Wrapper>
            <NavBar>
                <Title>Clicky Game</Title>
                {this.state.character.map(character => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        image={character.image}
                    />

                ))};
      </NavBar>
        </Wrapper>



    );
}
}


export default Game