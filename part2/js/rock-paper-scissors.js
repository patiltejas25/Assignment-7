
function main(){
    var userChoice = window.prompt("Rock Paper or Scissors");
    userChoice = userChoice.toLowerCase();
    var computerChoice  = Math.round((Math.random()*10)%2);
    
    if(computerChoice == 0){
        computerChoice = 'rock';
    }else if(computerChoice == 1){
        computerChoice = 'paper';
    }else{
        computerChoice = 'scissors';
    }

    window.alert(startGame(userChoice,computerChoice));
    
}


function startGame(userChoice, computerChoice) {
  
    var userWin = "You choose "+userChoice.toUpperCase() + " and Computer chose "+computerChoice.toUpperCase()+"...You Win."
    var computerWin = "You choose "+userChoice.toUpperCase() + " and Computer chose "+computerChoice.toUpperCase()+"...You Lose."
    if (userChoice === computerChoice){
       return "Tie";
    }else if (userChoice === 'paper' && computerChoice === 'rock'){
        return userWin;
    }else if (userChoice === 'rock' && computerChoice === 'scissors'){
        return userWin;
    }else if (userChoice === 'scissors' && computerChoice === 'paper'){
        return userWin;
    }else if (userChoice === 'rock' && computerChoice === 'paper'){
        return computerWin;
    }else if (userChoice === 'paper' && computerChoice === 'scissors'){
        return computerWin;
    }else if (userChoice === 'scissors' || computerChoice === 'rock'){
        return computerWin;
    }else{
        return "Invalid input, please try again";
        }
};

main();