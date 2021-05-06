
import Player from "./Player";

export default class RandomPlayer extends Player {

    constructor(name:string){
        super(name);
        this.name = name // sets the name property
    }
    
    pickSymbol(): string{
      let symbols:string[] = [ "rock", "scissors" , "paper"];
      let map = {};

      symbols.forEach(function(symbol, i){
          map[symbols] = {};
          
      })
    } 
}