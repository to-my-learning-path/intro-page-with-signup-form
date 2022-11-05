var form = document.querySelector("form");
var inputList = ["firstName", "lastName", "email", "password"];

function CheckDisplayStyle(element, inputValue) {
  var currentPElement = form.querySelector(`p[name=${element}]`);
  var currentImgElement = form.querySelector(`img[name=${element}]`);
  var errorCounter = 0;
  var isEmailValid = true;
  if (element == "email") {
    isEmailValid = CheckEmail(inputValue);
  }

  if (inputValue == null || inputValue.length < 1 || !isEmailValid) {
    currentPElement.style.display = "block";
    currentImgElement.style.display = "block";
    errorCounter++;
  } else {
    if (currentPElement.style.display == "block") {
      currentPElement.style.display = "none";
    }
    if (currentImgElement.style.display == "block") {
      currentImgElement.style.display = "none";
    }
  }
  return errorCounter;
}

function CheckEmail(inputValue) {
  var emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return emailRegex.test(inputValue);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var totalErrors = 0;
  inputList.forEach((element) => {
    var inputValue = event.target[element].value;
    totalErrors += CheckDisplayStyle(element, inputValue);
  });

  if (totalErrors == 0) {
    setTimeout(function () {
      alert("Form Submitted. Thank you!");
    }, 0);
  }
});
