const output = document.querySelector("p");

//let input = document.getElementById("input").value;

document.querySelector("#a").addEventListener("click", firstCharUpperCase);
document.querySelector("#b").addEventListener("click", findFirstName);
document.querySelector("#c").addEventListener("click", findMiddleName);
document.querySelector("#d").addEventListener("click", findLastName);
document.querySelector("#e").addEventListener("click", findFirstNameLength);
document.querySelector("#f").addEventListener("click", findMiddleNameAndPosition);
document.querySelector("#g").addEventListener("click", checkFileName);
document.querySelector("#h").addEventListener("click", hidePassword);
document.querySelector("#i").addEventListener("click", thirdCharUpperCase);
document.querySelector("#j").addEventListener("click", upperCaseAfterSpaceAndHyphen);
function firstCharUpperCase() {
  const firstName = document.getElementById("input").value;
  console.log(firstName);

  const fisrCharName = firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();

  console.log(fisrCharName);

  output.textContent = fisrCharName;
}

function findFirstName() {
  const fullName = document.getElementById("input").value;
  console.log(fullName);

  const firstName = fullName.substring(0, fullName.indexOf(" "));

  console.log(firstName);

  output.textContent = firstName;
}

function findMiddleName() {
  const fullName = document.getElementById("input").value;
  console.log(fullName);

  const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

  console.log(middleName);

  output.textContent = middleName;
}

function findLastName() {
  const fullName = document.getElementById("input").value;
  console.log(fullName);

  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  console.log(lastName);

  output.textContent = lastName;
}

function findFirstNameLength() {
  const fullName = document.getElementById("input").value;
  console.log(fullName);

  const lengthName = fullName.substring(0, fullName.indexOf(" ")).length;

  console.log(`The first name is ${lengthName} letters long.`);

  output.textContent = `The first name is ${lengthName} letters long.`;
}

function findMiddleNameAndPosition() {
  const fullName = document.getElementById("input").value;
  console.log(fullName);
  const startPosition = fullName.indexOf(" ") + 2;
  const endPosition = fullName.lastIndexOf(" ");
  const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

  console.log(`The middle name is ${middleName} and starts on position ${startPosition} and ends on ${endPosition}`);

  output.textContent = `The middle name is ${middleName} and starts on position ${startPosition} and ends on ${endPosition}.`;
}

function checkFileName() {
  const fileName = document.getElementById("input").value;
  console.log(fileName);

  if (fileName.endsWith(".jpg")) {
    console.log("Your file is a jpg");

    output.textContent = "Your file is a jpg";
  } else if (fileName.endsWith(".png")) {
    console.log("Your file is a png");

    output.textContent = "Your file is a png";
  } else {
    console.log("Your file is neither a jpg or a png");

    output.textContent = "Your file is neither a jpg or a png";
  }
}

function hidePassword() {
  const password = document.getElementById("input").value;
  console.log(password);
  const hiddenPassword = "*".repeat(password.length);

  console.log(hiddenPassword);

  output.textContent = hiddenPassword;
}

function thirdCharUpperCase() {
  const anyInput = document.getElementById("input").value;
  console.log(anyInput);

  const thirdCharUpper = anyInput.substring(0, 2).toLowerCase() + anyInput[2].toUpperCase() + anyInput.substring(3).toLowerCase();

  console.log(thirdCharUpper);

  output.textContent = thirdCharUpper;
}

//in progress
function upperCaseAfterSpaceAndHyphen() {
  const anyInput = document.getElementById("input").value;

  const inputUpperCase = anyInput.split("");

  inputUpperCase.forEach((elm, i) => {
    //console.log(inputUpperCase[i-1]);
    if (inputUpperCase[i - 1] === "-" || inputUpperCase[i - 1] === " ") {
      inputUpperCase[i] = inputUpperCase[i].toUpperCase();
    }
  });

  const upperCase = inputUpperCase.toString().replaceAll(",", "");

  output.textContent = upperCase;
  console.log(upperCase);
}
