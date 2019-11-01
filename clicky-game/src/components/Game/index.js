import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import CharacterCard from "../CharacterCard";
import character from "../../characters.json";
import NavBar from "../NavBar";


class Game extends Component{
    constructor(props){
        super(props);

        //These will be the starting state for these variables until changed as the game goes on
        this.state = {
            score: 0,
            topScore: 0,
            character,
        };

        //this function handles the clicked and unclicked state of the characters
        //it passes conditionals whether character was clicked or not
    
        handleClick = character => {
            
            for (var i = 0; i < character.length; i++) {
              var characters = character[i]
              // If character is clicked it will console.log(game over) and check the state of the score and top score
                if(characters.clicked===true){
                    console.log("game over")
                    if(this.state.score>this.state.topScore){
                        this.setState({topScore:this.state.score})
                        this.setState({score:0})
                    }
                }
                //If character has not been clicked the game will continue and shuffle after every click with
                // the shuffle function built on the next function.
                else if(characters.clicked===false){
                    this.setState({score:this.state.score+1})
                    shuffle(character)
                }
              }
              
            };

    

        //This is will be randomizing the images everytime a click of a image is made.
          let shuffle = character =>{
             let i = character.length
             while(i>1){
            
           let randomNumber=Math.floor(Math.random(i+1))
           const temp = character[i];
            character[i] = character[randomNumber]
            character[randomNumber] = temp;
            i--;
            
             
         }
         return character;
         };
         
        
      

    // this will be the information we will be rendering for the user to see.

    return (
        <Wrapper>
            <NavBar>
                <Title>Mario's Clicky Game</Title>
                {this.state.character.map(character => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        image={character.image}
                        handleClick={this.handleClick}
                    />

                ))};
      </NavBar>
        </Wrapper>



        );
    }
}


export default Game