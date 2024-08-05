let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>
{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    //Math.random() generates a random number between 0 and 1
    //we multiply it by three bcz the result is one less than three i.e 0 uptil 2 and we need index from 0 till 2.
    //then we take the floor value to avoid decimals
    return options[randIdx];
}

const gameDraw = ()=>
{
    msg.style.backgroundColor = "#081b31";
    msg.innerText="Game was draw";
}

const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
        {
            userScore++;
            userScorePara.innerText=userScore;
            msg.style.backgroundColor = "green";
            msg.innerText= `You won! ${userChoice} beats ${compChoice}`;
        }
    else
        {
            compScore++;
            compScorePara.innerText=compScore;
            msg.style.backgroundColor = "red";
            msg.innerText=`You Lost! ${compChoice} beats ${userChoice}`;
        }

}

const playGame = (userChoice)=>
{
    
   const compChoice = genCompChoice();
   if(userChoice === compChoice)
    {
        gameDraw();
    }
    else 
    {   
        let userWin =true;

        if(userChoice === "rock")//computer choice could then be paper or scissors
        {
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper")//computer choice could then be rock or scissors
        {
            userWin = compChoice ==="rock" ? true : false;
        
        }
        else//if userChoice is scissors then computer choice could then be rock or paper
        {
            userWin = compChoice ==="rock" ? false : true;
        
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

//OR WE CAN USE A FOR OF LOOP TO ITERATE OVER CHOICES TOO
// for(let choice of choices)
//     {
//         choice.addEventListener("click",()=>{
//            const userChoice = choice.getAttribute("id");
//             console.log("choice was clicked",userChoice);
//         }) 
//     }