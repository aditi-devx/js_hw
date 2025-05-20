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


//new question 
const user4 = ["2", "9", "17",];
console.log(user);
