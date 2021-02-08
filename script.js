'use strict';

let secretNumber  = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    

    if(!guess){
        document.querySelector('.message').textContent = 'No Number Entered';
    }

    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Congratulations You Won';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '45rem';
        if(score > highScore){
            highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
    }
    else if(guess != secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too High':'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        
        }
        else{
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
        
    }
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber  = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'start guessing ...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '15rem';

});

