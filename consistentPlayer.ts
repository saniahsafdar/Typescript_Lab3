import Player from "./Player";

// ConsistentPlayer Class

export default class ConsistentPlayer extends Player {
    symbol: string;
    constructor(name:string, symbol:string){
        super(name);
        this.symbol = symbol;
    }
    pickSymbol():string { // test these out
        return this.symbol;
    }
}