console.log("Welcome to console!");
let reset = document.getElementById("reset");
let usersTurn = "X";
let over = false;
let count = 0;
let isWinning = true;
let resultShower = document.querySelector(".info");
let draww = document.querySelector(".in");

//This function will change user's turn
const changeTurn = () => {
  return usersTurn == "X" ? "0" : "X";//This will change turn 
};
const draw = () => {
  console.log("draw");
  draww.style.display = "block";
  draww.innerText = "Game Draw";
  resultShower.style.display = "none";
};
//This function will check winner
const checkwinner = () => {
  let boxtxt = document.querySelectorAll("#boxtxt");
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6] /*     Winning condition     */,
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winCondition.forEach((e) => {
    if (
      boxtxt[e[0]].innerText === boxtxt[e[1]].innerText &&
      boxtxt[e[2]].innerText === boxtxt[e[1]].innerText &&
      boxtxt[e[0]].innerText !== ""
    ) {
      over = true;
      let g=gameB();
      g.remove()
      resultShower.style.display = "block";
      
    }
  });
};

//Game brain
let squares = document.getElementsByClassName("box");
Array.from(squares).forEach((element) => {
  let boxtxxt = element.querySelector("#boxtxt");

  element.addEventListener("click",game);
  function game(e){
    count++;//This will increase count by one when user click on element 
    countClick(count);
    reset.style.visibility = "visible";
    if (boxtxxt.innerText === "") {
      boxtxxt.innerText = usersTurn;
      usersTurn = changeTurn();
      checkwinner();//Calling checkWinner function to know is winner
      if (!over) {
        resultShower.innerText = `${usersTurn} won the game!`;
        document.querySelector("#txt").innerText = `Now '${usersTurn}' turn`;
      }
    }
  };

});
// Function to call draw function
function countClick(num) {
  if (num == 9) { //If num will be 9 it will call draw function 
    draw();
  }
}
// Functon to reload the page
reset.addEventListener("click", function () {
    // loaction.reload reloads the page
  location.reload();
});
