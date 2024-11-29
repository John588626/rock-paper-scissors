let humanscore=0;
let computerscore=0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getComputerChoice(y,z){
    y=getRandomInt(3);
    if (y==0) {
        z="rock"
        return z;
    }
    else if(y==2){
        z="paper"
        return z;
    }
    else if(y==1){
        z="scissors"
        return z;
    }
}
function getHumanChoice(a){
    a=prompt("rock/paper/scissors");
    return a;
}
function playRound(humanchoice,computerchoice){
    if(humanchoice=="rock" && computerchoice=='rock'){
        console.log("It is a tie.You both chose rock.");
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=='scissors' && computerchoice=='scissors'){
        console.log("It is a tie.You both chose scissors.");
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=='paper' && computerchoice=='paper'){
        console.log("It is a tie.You both chose paper.");
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=="rock" && computerchoice=="paper"){
        console.log("You chose rock and the computer chose paper.The computer wins");
        computerscore+=1;
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=="rock"&&computerchoice=="scissors"){
        console.log("You chose rock and the computer chose scissors.You win")
        humanscore+=1;
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=="scissors"&&computerchoice=="paper"){
        console.log("You chose scissors and the computer chose paper.You win")
        humanscore+=1;
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=="scissors"&&computerchoice=="rock"){
        console.log("You chose scissors and the computer chose rock.The computer wins")
        computerscore+=1;
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=="paper"&&computerchoice=="rock"){
        console.log("You chose paper and the computer chose rock.You win")
        humanscore+=1;
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }
    else if(humanchoice=="paper"&&computerchoice=="scissors"){
        console.log("You chose paper and the computer chose scissors.The computer wins")
        computerscore+=1;
        console.log("The computer's score is",computerscore);
        console.log("Your score is",humanscore);
    }

    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();

playRound(humanSelection,computerSelection)
playRound(humanSelection1,computerSelection1)
playRound(humanSelection2,computerSelection2)
playRound(humanSelection3,computerSelection3)
playRound(humanSelection4,computerSelection4)

if(humanscore>computerscore){
    console.log("You win the game.");
}
else if(humanscore==computerscore){
    console.log("The game is a tie.");
}
else if(humanscore<computerscore){
    console.log("The computer wins the game.");
}



