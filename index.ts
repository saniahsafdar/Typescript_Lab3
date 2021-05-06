import configPrompt from 'prompt-sync';
import Player from "./Player";
import ConsistentPlayer from "./consistentPlayer";
import { displayHeros, playAndPickWinner } from "./functions";
const prompt = configPrompt({sigint: true});
// //prompt is a function to user input.


// let hero: Player = new ConsistentPlayer("Grant" , "rock");
// let villain: Player = new ConsistentPlayer("Bane", "scissors")

// console.log(hero.pickSymbol());

// let winner = playAndPickWinner(hero, villain);

// console.log("winner", winner)

let villainArray: Player[] = [
    new ConsistentPlayer("Billy", "rock"),
    new ConsistentPlayer("Katie","scissor"),
    new ConsistentPlayer("Saniah","paper"),
    new ConsistentPlayer("Anthony","rock"),
] 

let heroArray: Player[] = [
    new ConsistentPlayer("meowth", "rock"),
    new ConsistentPlayer("geodude","scissor"),
    new ConsistentPlayer("grookey","paper"),
] 

displayHeros(heroArray);

for (let villain of villainArray){
    console.log(`You are vacing ${villain.name}`);
    console.log(`Who will you pick to battle for you?`)
    displayHeros(heroArray);
    let heroChoice = prompt("Type a hero name:")
    let hero =heroArray.find((hero) =>{
        return hero.name === heroChoice;
    });
    if(hero === undefined){
            console.log("That's not a valid hero name")
            break
        }

    let winner = playAndPickWinner(hero, villain);
    if(winner === hero){
        hero.winCount += 1;
        console.log("Your hero wins!")
    } else if (winner === villain) {
        villain.winCount += 1;
        console.log("Your Hero lost!")
    } else {
        console.log("It'ss a tie!")
    }
 
}
console.log("Game over")
displayHeros(heroArray)