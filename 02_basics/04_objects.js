// ----------IM_VYADAW------------
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "vishal",
      lastname: "yadaw",
    },
  },
};

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "v@gmail.com",
  },
  {
    id: 1,
    email: "v@gmail.com",
  },
  {
    id: 1,
    email: "v@gmail.com",
  },
];

users[1].email;

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "yadaw",
};

const { courseInstructor: instructor } = course;

console.log(instructor);

[{}, {}, {}];
