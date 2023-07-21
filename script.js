const gameContainer = document.querySelector(".container"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances"),
  matchRes = document.querySelector(".match_draw"),
  userRes = document.querySelector(".user_result"),
  cpuRes = document.querySelector(".cpu_result"),
  totalRes = document.querySelector(".total");

let userScore = cpuScore = drawScore = totalScore = 0;
input.focus();
function printGuess()
{
      [guess.textContent, guess.style.color] = [`You have ${chance} games`, "#0611de"];
}

 checkButton.addEventListener("click", () => {
  let inputValue = input.value;
   if (inputValue == 0) {
     window.location.reload();
   }
   if (inputValue > 0 && inputValue <= 100) {
    chance = inputValue;
    printGuess();
  }
 else {
    [guess.textContent, remainChances.textContent] = ["Your number is invalid. "+`You have ${chance} games to finish.`, chance];
    guess.style.color = "#DE0611";
  }
 });

chance = 10;
printGuess();

optionImages.forEach((state1, index1) => {
  state1.addEventListener("click", (e) => {
    state1.classList.add("active");
    userRes.src = cpuRes.src;
    optionImages.forEach((state2, index2) => {
      index1 !== index2 && state2.classList.remove("active");
    });

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuValue = ["R", "P", "S"][randomNumber];
      let cpuValue1 = ["Rock", "Paper", "Scissors"][randomNumber];
      let userValue = ["R", "P", "S"][index1];
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };    
      let outComeValue = outcomes[userValue + cpuValue];
      result.textContent = userValue === cpuValue ? "Match Draw" : `Computer played ${cpuValue1}. ${outComeValue} Won!`;
   chance--;
    
if (outComeValue==="User") {
  userScore++;
}
else if (outComeValue==="Cpu") {
  cpuScore++;
}
else {
  drawScore++;
}
totalScore++;
[userRes.textContent, userRes.style.color] = [`User score:  ${userScore}`, "#069dde"];
[cpuRes.textContent, cpuRes.style.color] = [`CPU score:  ${cpuScore}`, "#de06ba"];
[matchRes.textContent, matchRes.style.color] = [`Match Draw score:  ${drawScore}`, "#de7906"];
[totalRes.textContent, totalRes.style.color] = [`Total Games:  ${totalScore}`, "#06de59"];
printGuess();
  if (chance === 1) {
    [guess.textContent, guess.style.color] = ["New cycle of games will start, if you not enter number for games to play.", "#DE0611"];
  }
if (chance === 0) {
if (userScore > cpuScore) {
  [result.textContent, result.style.color] = [`User won this cycle!`, "#069dde"];
}
  else if (userScore < cpuScore)
{
  [result.textContent, result.style.color] = [`Computer won this cycle!`, "#069dde"];
}
else
  { [result.textContent, result.style.color] = [`No winner for this cycle!`, "#069dde"];}
setTimeout(() => {  window.location.reload(); }, 5000);  
  }
  });
});