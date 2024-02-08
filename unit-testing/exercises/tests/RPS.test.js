
const test = require('../RPS.js');

describe("whoOne", function(){
    test("both have a same answer and tie  ", function(){
        let output = RPS('paper','paper');
        expect(output).toEqual('TIE!');

    });
    test("player 2 paper beats rock", function(){
        let output = RPS('paper','rock');
        expect(output).toEqual('Player 2 wins!');

    });

    test("player 2 scissors beats paper", function(){
      let output = RPS('paper','scissors');
        expect(output).toEqual('Player 2 wins!');

   
    });

    test("player 2 rock beats scissors", function(){
        let output = RPS('scissors','rock');
          expect(output).toEqual('Player 2 wins!');
  
     
      });

    test("player 1 wins", function(){
        let output = PRS('rock','scissors');
        expect(output).toEqual('Player 1 wins!');
    })
});