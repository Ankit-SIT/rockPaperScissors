function validateForm(x) {                                                                
     if (x == "") {                                                                                            // Check for incomplete forms 
      console.log("PLEASE ENTER A VALID MOVE");
       return false;
     }
     else{
        var regex=/^[a-zA-Z]+$/;                                                                              // Check if string contains integers, if yes then quit!
         if (!x.match(regex))
         {
           alert("PLEASE ENTER A STRING!");
           return false;
         }
          return true;
     }
     }
   
function userMove(userInput)                                                                                 // Converts user input string to game readable codes
{
let ret = 0;

 if(userInput == "ROCK")
  ret = 1;
 else if(userInput == "PAPER")
  ret =  2;
 else if(userInput == "SCISSOR")
  ret =  3;
 else
  ret = -1;

return ret;                                                                                                  // Returns Gamecode
} 




function computerMove()                                                                                      // Provides random CPU move
{ 
    let play = Math.floor(Math.random() * (3) + 1);
    return play;
}


function playRound(player,computer){                                                                         /// Matches take place here

  if(player === -1 || player === 0)                                                                          // if error code (0,-1) thrown by playerMove, pass on error code 100
    {
      return 100;
    }
                                                                                                             // MOVE CODE                               MOVE
    else if(player === 1){
          if(computer === 1)                                                                                 //     1                                   ROCK
           return 0;
          else if(computer === 2)                                                                            //     2                                   PAPER
           return -1;
          else if(computer === 3)                                                                            //     3                                   SCISSOR
           return 1;
     }
     
   else if(player === 2){
        if(computer === 1)
         return 1;
        else if(computer === 2)
         return 0;
        else if(computer === 3)
         return -1;
   }
  
  else if(player === 3){                                                                                   // SCORE CODE                                 OUTCOME
    if(computer === 1)
     return -1;                                                                                            //     1                                      WON ROUND    
    else if(computer === 2)                                                                                                         
     return 1;                                                                                             //     -1                                     LOST ROUND TO CPU
    else if(computer === 3)
     return 0;                                                                                             //     0                                      SAME MOVE AS CPU
     }
  else
   return 100;
}


function display(sum){                                                                                     // Displays the result on HTML Page
     const paragraph = document.getElementById("result");                                                  // and logs result on console, go check it out :P
     paragraph.isContentEditable=true;
     if(sum === 1){
          paragraph.innerText= "USER WINS!";
         console.log("USER!");
    }
     else if(sum === -1){
          paragraph.innerText = "COMPUTER WINS!";
         console.log("COMP!");
     }
     else if(sum === 0){
          paragraph.innerText = "DRAW MATCH";
         console.log("DRAW!");
     }
     else if(sum > 99){
          paragraph.innerText ="ERROR!";
        console.log("ERROR");

     
     }
}

function CPUMonitor(compMove)                                                                               // Vanity function to return CPU move in text form
{
      switch (compMove){
       case 1:
             return "ROCK";
       case 2:
             return "PAPER";
       case 3:
             return "SCISSORS";
       default:
             return "ERROR!";
      }       
}



function start(){
var userInput = document.forms["inform"]["move"].value;
userInput = userInput.toUpperCase();
if(validateForm(userInput)){
     const user = userMove(userInput);
     var comp = computerMove();
      document.getElementById("cpumove").textContent = CPUMonitor(comp);
       display(playRound(user,comp));
       sum = 0;
       return true;
}
else{
     sum = 100;
     display(sum);
     return false;
 }
}





