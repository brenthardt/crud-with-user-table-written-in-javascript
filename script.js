const emailOne = document.getElementById("emailOne");
const firstName = document.getElementById("firstName-1");
const lastName = document.getElementById("lastName-1");
const collector = document.getElementById("collector");
let textOne = document.getElementById("textOne");

const emailTwo = document.getElementById("emailTwo");
const firstNameTwo = document.getElementById("firstNameTwo");
const lastNameTwo = document.getElementById("lastNameTwo");
let textTwo = document.getElementById("textTwo");

const usersSum = document.getElementById("usersSum");
const addSum = document.getElementById("addSum");
const editSum = document.getElementById("editSum");
const deleteSum = document.getElementById("deleteSum");

let current = "";
let totalUsers = 0;
let deleteSum2 = 0;
let editSum2 = 0;

let alter = JSON.parse(localStorage.getItem("alter")) || [];
totalUsers = alter.length;
addSum.innerHTML = totalUsers;

transportData();

function saveTwo() {
  const updatedItem = {
    email: emailTwo.value,
    firstName: firstNameTwo.value,
    lastName: lastNameTwo.value,
    textOne: parseInt(textTwo.innerHTML),
  };
  alter[current] = updatedItem;
  if (current === "") {
    alter.push(updatedItem);
  } else {
    alter[current] = updatedItem;
    current = "";
  }
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();

  emailTwo.value = "";
  firstNameTwo.value = "";
  lastNameTwo.value = "";
  textTwo.innerHTML = 0;
}
function saveOne() {
  let abc = {
    email: emailOne.value,
    firstName: firstName.value,
    lastName: lastName.value,
    textOne: parseInt(textOne.innerHTML),
  };
  totalUsers++;
  addSum.innerHTML = totalUsers;
  if (current === "") {
    alter.push(abc);
  } else {
    alter[current] = abc;
    current = "";
  }

  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();

  emailOne.value = "";
  firstName.value = "";
  lastName.value = "";
  textOne.innerHTML = 0;
}

function myFunction() {
  textOne.innerHTML++;
  if (textOne.innerHTML < 0) {
    return (textOne.innerHTML = "went below 0");
  }
}

function myFunction2() {
  textOne.innerHTML--;
  if ((textOne.innerHTML = 0)) {
    return textOne.innerHTML--;
  }
}
function myFunction3(i) {
  alter[i].textOne++;
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}
function myFunction4(i) {
  alter[i].textOne--;
  if (alter[i].textOne < 0) {
    alter[i].textOne = 0;
  }
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}

function myFunction5() {
  textTwo.innerHTML++;
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}

function myFunction6() {
  textTwo.innerHTML--;
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}

function clearCount(i) {
  alter[i].textOne = 0;
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}

function transportData() {
  let a = "";
  for (let i = 0; i < alter.length; i++) {
    a += `
    <tr>
    <td>${alter[i].email}</td>
    <td>${alter[i].firstName}</td>
    <td>${alter[i].lastName}</td>
<td>${alter[i].textOne}</td>
<td><button class="btn btn-danger" onclick="clearCount(${i})">clear</button></td>
<td><button class="btn btn-info" onclick="myFunction3(${i})">+</button></td>
<td><button class="btn btn-info" onclick="myFunction4(${i})">-</button></td>
<td><button class="btn btn-primary" onclick="editUser(${i})">edit</button></td>
<td><button class="btn btn-warning" onclick="deleteUser(${i})">X</button></td>
</tr>
    `;
  }
  collector.innerHTML = a;

  usersSum.innerHTML = `${alter.length}`;
}
function deleteUser(i) {
  alter.splice(i, 1);
  transportData();
  deleteSum2++;
  deleteSum.innerHTML = deleteSum2;
  localStorage.setItem("alter", JSON.stringify(alter));
}
function editUser(i) {
  current = i;
  emailTwo.value = alter[i].email;
  firstNameTwo.value = alter[i].firstName;
  lastNameTwo.value = alter[i].lastName;
  textTwo.innerHTML = alter[i].textOne;
  editSum2++;
  editSum.innerHTML = editSum2;
  localStorage.setItem("alter", JSON.stringify(alter));
}
function clearAll() {
  alter = [];
  localStorage.clear();
  transportData();
}
function clearHalf() {
  const halfLength = Math.floor(alter.length / 2);
  alter.splice(0, halfLength);
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}
function clearLast() {
  alter.pop();
  localStorage.setItem("alter", JSON.stringify(alter));
  transportData();
}
