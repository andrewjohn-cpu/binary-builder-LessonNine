// let myName = document.querySelector(".testing");
// console.log(myName.textContent);

// let myName2 = document.querySelector(".testing");
// console.log(myName.innerText);

// let myList = document.querySelectorAll("li");
// console.log(myList[0]);
// myList[0].style.color = "red";

// for (let result = 0; result < myList.length; result = result + 1) {
//   myList[result].style.color = "red";
// }

// for (let result in myList) {
//   console.log(result);
// }

// let alertButton = document.querySelector("#alert-button");
// let message = document.querySelector("p");
// alertButton.addEventListener("click", () => {
//   message.style.display = "block";
//     alert("Hey there am learning event listener concept!!!");
// });

function displayName(callbackFunction) {
  let name = "ian";
  return callbackFunction(name);
}

console.log(displayName(function (clientName) {
  return `Weclome ${clientName}`;
}));

// let callbackFunction = function (clientName) {
//   return `Weclome ${clientName}`;
// };

// callbackFunction();
