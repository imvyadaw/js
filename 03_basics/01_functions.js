// ----------IM_VYADAW------------
function sayMyName() {
  console.log("v");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("L");
}

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

const user = {
  username: "vishal",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue([200, 400, 500, 1000]));
