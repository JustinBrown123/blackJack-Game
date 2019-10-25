import Blackjack from "blackjack-dealer-logic"

   export default () =>{

    const game = blackjack.singleDeckGame()
    const gamesIsRunning = true;
    const playButton = document.getElementById("playbbutton")
   
    playButton.onclick = function(){
        while (gamesIsRunning){
        game.deal()

        game.resetPlayers();
        }
    }




    hitButton.onclick = function(){
        singleDeckGame.hitUser();
        singleDeckGame.evaluateUser();
    }

    standButton.onclick = function(){
        singleDeckGame.standUser();
        singleDeckGame.evaluateUser();
    }

    doubleButton.onclick = function(){
        singleDeckGame.doubleUser();
        singleDeckGame.evaluateUser();
    }

    const blackjack = new Blackjack
}

