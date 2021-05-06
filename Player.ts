//abstract Player class
export default abstract class Player {
    name: string;
    winCount: number = 0;

    constructor(name:string){
        this.name = name // sets the name property
    }

    //abstract methongs have 'abstract' keyword and semicolon.
    abstract pickSymbol(): string;
}

//constructor param - required
//constructor param - optional, with default
//not constructor param
