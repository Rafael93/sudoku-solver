const puzzle = document.querySelector("#puzzle");
const buttonSolve = document.querySelector("#solve-button");

const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.classList.add("inputElement");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", "0");
  inputElement.setAttribute("max", "9");
  puzzle.appendChild(inputElement);
}

const solve = async () => {
  joinValues();
  const data = submission.join("");
  console.log(data);
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "bf185a42f1mshcc5ce6174e2b47fp1eaf3bjsne47a6399691f",
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    data: {
      puzzle:
        "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const joinValues = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push(".");
    }
  });
};

buttonSolve.addEventListener("click", solve);
