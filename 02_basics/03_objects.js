// ----------IM_VYADAW------------
// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hivishaltesh",
  "full name": "vishal yadaw",
  [mySym]: "mykey1",
  age: 18,
  location: "motihari",
  email: "yadaw@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
 
JsUser.email = "ghost@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "ghost@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
