function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = (document.getElementById("display").value = "");
}

function deleteLast() {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = display.substring(
    0,
    display.length - 1
  );
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = "Error"; // Handle invalid expressions
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
    "Enter",
    "Backspace",
    "Escape",
  ];

  if (allowedKeys.includes(key)) {
    event.preventDefault();
    const display = document.getElementById("display");

    switch (key) {
      case "Enter":
      case "=":
        calculateResult();
        break;
      case "Backspace":
        deleteLast();
        break;
      case "Escape":
        clearDisplay();
        break;
      default:
        appendToDisplay(key);
    }
  }
});
