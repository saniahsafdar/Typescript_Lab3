import Player from "./Player";

export default class RandomPlayer extends Player{
    constructor(name: string){
        super(name);
    }
    pickSymbol():string {
        let symbol = ['rock', 'paper', 'scissors']
        let randomSymbol = symbol[Math.floor(Math.random()* symbol.length)];
        console.log(randomSymbol)
        return randomSymbol;
    }
}
