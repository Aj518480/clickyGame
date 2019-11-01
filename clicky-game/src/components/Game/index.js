import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import CharacterCard from "../CharacterCard";
import characterFromJson from "../../characters.json";
import NavBar from "../NavBar";


class Game extends Component{
    // constructor(props){
    //     super(props);

        //These will be the starting state for these variables until changed as the game goes on
        state = {
            score: 0,
            topScore: 0,
            character: characterFromJson,
            tempCharacter: characterFromJson
        }

        //this function handles the clicked and unclicked state of the characters
        //it passes conditionals whether character was clicked or not

        // eslint-disable-next-line
        handleClick = id => {
            let arrayOfIds = this.state.tempCharacter.map(item => (item.id))
            console.log(arrayOfIds)
            if (arrayOfIds.indexOf(id) === -1){
                console.log("you lost")
                this.setState({
                    tempCharacter: characterFromJson
                })
            } else {
                console.log("keep playing");
                arrayOfIds = this.state.tempCharacter.filter(item => item.id !== id);
                console.log(arrayOfIds)
                this.setState({
                    tempCharacter: arrayOfIds
                })
                this.shuffle(characterFromJson)
            }
            console.log(this.state.tempCharacter);
              
            };

    

        //This is will be randomizing the images everytime a click of a image is made.
          shuffle = a =>{
           
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        this.setState({
            character: a
        });
         };
         
        
      

    // this will be the information we will be rendering for the user to see.
    render(){
    return (
        <Wrapper>
            
                <Title>Mario's Clicky Game</Title>
                {this.state.character.map(character => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        image={character.image}
                        handleClick={this.handleClick}
                    />

                ))};
            
        </Wrapper>
        );
    }
// }
}



export default Game