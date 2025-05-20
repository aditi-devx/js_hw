let favcolor ="Whine red";
console.log (`my fav color is ${favcolor}`);



let age="19"
if(age>=19){ 
    console.log("can vote");
}else{
    console.log("cannot vote");
}

let voterage= 20;
function canvote(voterage){  //if age is >18 then print can vote
    if(voterage=>18){
        return true 
    }
    else{
        return false
    }
}


console.log (`my fav color is ${favcolor}`);
console.log (`my height is ${heightincm}`);
pizza();
pastry();
names("aditi", "shubh");


let num="10"
if(num%2===0){  //even odd numbers
    console.log("even")
}
else{
    console.log("odd")
}

let integer = 0
while (integer < 10) {
    console.log("the number is" + integer)// using while loop for printing numbers from 1 to 10
    integer++;
}



let cake = 20
for (let i = 0; i <= cake; i++) {
    console.log(" i  will give shubh " + i + "cake")
}


const user = {
  mynameis: "Aditi",
  age: "19",
};

const greetuser = function () {
  console.log(`hii ${user.mynameis} your age is ${user.age}`);
}
greetuser();

function greetmyuser(user) {
  console.log(`hii ${user.mynameis} your age is ${user.age} and you are a ${user.gender} `);

}

const user2 = {
  mynameis: " aditi",
  age: "19",
  gender: "female",
}

greetmyuser(user2);



function greetandcheckage(user) {
  console.log(`hii ${user.mynameis} your age is ${user.age} and you are ${user.gender}  `)

  const user3 = {
    mynameis: "aditi",
    age: "19",
    gender: "female",

  }

  function usercanvote(user) {
    if (user.age >= 18) {
      console.log("you can vote");
    }
    else {
      console.log("you cannot vote");
    }
    console.log(`and you can ${user.usercanvote}`)
  }


  usercanvote(user);
  greetandcheckage(user3);
}


let favcolor = "Whine red";
let heightincm = "152cm";
const pizza = function () {
    console.log(`i like pizza`);
}
function pastry() {
    console.log("i will eat from shubh money");
}
function sum(a, b) {
    return a + b;
}

function names(a, b) {
    console.log(a + b);
}

console.log(`my fav color is ${favcolor}`);
console.log(`my height is ${heightincm}`);
pizza();
pastry();
names("aditi", "shubh");





let age = "19"
if (age >= 19) {
    console.log("can vote");
} else {
    console.log("cannot vote");
}

let voterage = 20;
function canvote(voterage) {
    if (voterage => 18) {
        return true
    }
    else {
        return false
    }
}

let num = "10"
if (num % 2 === 0) {
    console.log("even")
}
else {
    console.log("odd")
}

let number = 12
for (let i = 0; i <= number; i++) {
    console.log("number is " + i)

}



let cake = 20
for (let i = 0; i <= cake; i++) {
    console.log(" i  will give shubh " + i + "cake")
}


let integer = 0
while (integer < 10) {
    console.log("the number is" + integer)// using while loop for printing numbers from 1 to 10
    integer++;
}



let cakes = 0
while (cakes < 15) {
    console.log(" i will give shubh" + cakes + "cake") 
    cakes++;
}