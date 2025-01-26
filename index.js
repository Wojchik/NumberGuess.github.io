const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let tries = 0;
const attempt = document.getElementById('attp');
const hint = document.getElementById('hint');
const subAns = document.getElementById('subAns');
const guessInput = document.getElementById('guess');

subAns.addEventListener('click', function() {
const guess = Number(guessInput.value);


if (isNaN(guess)) {
    hint.textContent = "Please enter a valid number!";
    return;
}

tries +=1;
attempt.textContent = `Attempts: ${tries}`;

if(guess > answer){
    hint.textContent = `Hint: Your Guess Is A Bit Too High!`
}
else if(guess < answer){
    hint.textContent = `Hint: Your Guess Is A Bit Too Low!`
}
else if(guess == answer){
    hint.textContent = `You Got It Right! Refresh to start again!`
}

})


