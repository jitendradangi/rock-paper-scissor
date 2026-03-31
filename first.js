 let userScore=0;
 let compScore=0;

 const choices=document.querySelectorAll(".choice");
 const msg= document.querySelector("#msg");

 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score");

 const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
 }

 const drawGame = () => {
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="#081b31";

 }

 const showWinner= (userwin, userChoice, comChoice)=>{
    if(userwin ===true){
        userScore++;
        userScorePara.innerText=userScore; 
        msg.innerText=`You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
 }

 const playGame=(userChoice)=>{
    //Generate computer choice
    const comChoice=genComChoice();


 if(userChoice === comChoice){
    //draw game
    drawGame();
 
 }else{
    let userwin = true;
    if(userChoice=== "rock"){
       //scissors, paper
       userwin=comChoice=== "paper"? false:true;
    }
    else if(userChoice === "paper"){
        //rock scissors
        userwin= comChoice === "scissors" ? false : true;
    } else {
        //rock, paper
        userwin=comChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice,comChoice);
   }
    };


 choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    });
 });