function randomInt(){
    return Math.floor(Math.random()*100)+1; //generate a random number (1-100)
}

function checkGuess(){
    let guess=parseInt(document.getElementById('guessInput').value);
    
    if(isNaN(guess)){ // Check if input is a number
        document.getElementById('gameStatus').innerText="INVALID INPUT";
        document.getElementById('previousGuesses').innerText="<br>";
        return;
    }
    
    if(previousGuesses.includes(guess)){
        document.getElementById('gameStatus').innerText="You have already guessed that number!";
        return;
    }
    previousGuesses.push(guess);
    guesses-=1;

    if(guess===secretNumber){
        document.getElementById('gameStatus').innerText="Bingo";
        document.getElementById('resetButton').style.display='inline';
    }else if(guesses===0){
        document.getElementById('gameStatus').innerText='GAME OVER !!!  You \'ve run out of turns';
        document.getElementById('resetButton').style.display='inline';
    }else if((guess<1)||(guess>100)){
        document.getElementById('gameStatus').innerText="out of range";
    }else if(guess<secretNumber){
        document.getElementById('gameStatus').innerText="too low";
    }else if(guess>secretNumber){
        document.getElementById('gameStatus').innerText="too high";
    }
    document.getElementById('previousGuesses').innerText='Previous guesses: '+previousGuesses.join(', ');
    document.getElementById('guessInput').value='';
}

function restartGame(){
    secretNumber=randomInt(); //1-100
    guesses=10;
    previousGuesses=[];
    //clear all information
    document.getElementById('gameStatus').innerHTML="";
    document.getElementById('previousGuesses').innerHTML="";
    document.getElementById('guessInput').value="";
}
