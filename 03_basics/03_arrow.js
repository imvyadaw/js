// ----------IM_VYADAW------------
const user = {
  username: "vishal",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

const chai = () => {
  let username = "vishal";
  console.log(this);
};

const addTwo = (num1, num2) => ({ username: "vishal" });

console.log(addTwo(3, 4));
