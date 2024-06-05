let title = document.querySelector(".title");
let turn = "X";
let squares = [];

function end(n1, n2, n3) {
  title.innerHTML = `${squares[n1]} Win`;
  document.getElementById("item" + n1).style.background =
    "rgba(0, 173, 181, 0.4)";
  document.getElementById("item" + n2).style.background =
    "rgba(0, 173, 181, 0.4)";
  document.getElementById("item" + n3).style.background =
    "rgba(0, 173, 181, 0.4)";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 5000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }

  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      end(a, b, c);
      break;
    }
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML === "") {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = "now O";
  } else if (turn === "O" && element.innerHTML === "") {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = "now X";
  }
  winner();
}
