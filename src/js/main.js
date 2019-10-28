import BlackJack from "blackjack-dealer-logic"



export default () => {
    alert("Lets play some blackjack");
    const gameIsRunning = true;
    const singleDeckGame = BlackJack.singleDeckGame;
    const playButton = document.getElementById("btn-play");
    const dealer = document.getElementById("dealer");
    const userHand = document.getElementById("userHand");
    const wager = document.getElementById("wager");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const outcome = document.getElementById("outcome");
    const Result = BlackJack.Result;
    
    playButton.onclick = function(){
        //while (gameIsRunning){
        //alert ("you've clicked me")
        outcome.innerHTML = ``;
        start.innerHTML = `Your Chip Count is ${singleDeckGame.getUserChips()}`;
        const userWager = window.prompt("Please enter an amount to wager: ");
        singleDeckGame.receiveAnte(userWager);
        wager.innerHTML = `Your bet is: ${userWager}`;

        singleDeckGame.deal();

        dealer.innerHTML = `Dealer is showing: ${singleDeckGame.getDealerCardUp()}`;
        userHand.innerHTML = `Your current hand: ${singleDeckGame.getUserHandValue()}`;

 
        hitButton.onclick = function(){
            singleDeckGame.hitUser();
            singleDeckGame.evaluateUser();
            userHand.innerHTML = `Your current hand: ${singleDeckGame.getUserHandValue()}`;
            if (singleDeckGame.isUserBust());{
                Result.LOSS
                outcome.innerHTML = `YOU WENT OVERBOARD`;
                singleDeckGame.resetAnte();
                singleDeckGame.resetPlayers
                }
               }
        
        doubleButton.onclick = function(){
            singleDeckGame.doubleUser();
            singleDeckGame.evaluateUser();
            userHand.innerHTML = `Your current hand: ${singleDeckGame.getUserHandValue()}`;
               }
               
        
        standButton.onclick = function(){
            singleDeckGame.standUser();
            singleDeckGame.evaluateUser();
            singleDeckGame.settleDealerHand();
            dealer.innerHTML = `Dealer hand: ${singleDeckGame.getDealerHandValue()}`;
            switch(singleDeckGame.outcome()){
                    case Result.LOSS:
                        outcome.innerHTML = `You Lost ...`;
                        singleDeckGame.resetAnte();
                        break;

                    case Result.PUSH:
                        outcome.innterHTML = `PUSH... Well you didn't lose anthing"`;
                        singleDeckGame.pushHand();
                        break;

                    case Result.WIN:
                        outcome.innerHTML = `YOU WON`
                        singleDeckGame.userWin();
                        break;
                }
                
                singleDeckGame.resetPlayers();
        

            }
        
        }
        }