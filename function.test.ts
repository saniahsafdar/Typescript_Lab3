import { playAndPickWinner } from "./functions";
import ConsistentPlayer  from "./consistentPlayer";
import Player from "./Player";

describe("play and pick winner function", () => {
    test("rock vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Geodude", "rock");
        let villain: Player = new ConsistentPlayer("Meowth", "scissors");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(hero);
    });
    test("rock vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Geodude", "rock");
        let villain: Player = new ConsistentPlayer("Grookey", "paper");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(villain);
    });
    test("rock vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Geodude", "rock");
        let villain: Player = new ConsistentPlayer("Onix", "rock");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(null);
    });
    test("paper vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grookey", "paper");
        let villain: Player = new ConsistentPlayer("Meowth", "scissors");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(villain);
    });
    test("paper vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grookey", "paper");
        let villain: Player = new ConsistentPlayer("Geodude", "rock");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(hero);
    });
    test("paper vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grookey", "paper");
        let villain: Player = new ConsistentPlayer("Lotad", "paper");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(null);
    });
    test("scissors vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Meowth", "scissors");
        let villain: Player = new ConsistentPlayer("Grookey", "paper");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(hero);
    });
    test("scissors vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Meowth", "scissors");
        let villain: Player = new ConsistentPlayer("Geodude", "rock");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(villain);
    });
    test("scissors vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Meowth", "scissors");
        let villain: Player = new ConsistentPlayer("Bisharp", "scissors");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(null);
    });
});