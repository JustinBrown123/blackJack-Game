import BlackJack from "blackjack-dealer-logic"




export default () => {
   
    
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
    const name = document.getElementById("name")
    
    const pastGames = document.getElementById("pastGames")
    
    var handResults = []
  

    const userName = window.prompt("Please enter Your Name");
    name.innerHTML = `${userName}`;



    playButton.onclick = function(){
            
        //alert ("you've clicked me")
        outcome.innerHTML = ``;
        pastGames.innerHTML = handResults;
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
                singleDeckGame.settleDealerHand();
                singleDeckGame.resetAnte();
                singleDeckGame.resetPlayers();
                handResults.push("loss")
                }
               }
        
        doubleButton.onclick = function(){
            singleDeckGame.doubleUser();
            singleDeckGame.evaluateUser();
            singleDeckGame.settleDealerHand();
            userHand.innerHTML = `Your current hand: ${singleDeckGame.getUserHandValue()}`;
            if (singleDeckGame.isUserBust());{
                Result.LOSS
                outcome.innerHTML = `Thats a loss`;
                singleDeckGame.resetAnte();
                singleDeckGame.resetPlayers();
                handResults.push("loss")

                }
               }
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
                        handResults.push("loss")
                        break;

                    case Result.PUSH:
                        outcome.innterHTML = `PUSH... Well you didn't lose anthing"`;
                        singleDeckGame.pushHand();
                        handResults.push("push")
                        break;

                    case Result.WIN:
                        outcome.innerHTML = `YOU WON`
                        singleDeckGame.userWin();
                        handResults.push("win")
                        break;
                }
                singleDeckGame.resetPlayers();
               
            }

            pastGames.innerHTML = handResults;
                
        }
    
        

