let Cards = [];

class birthCard {
  constructor(name1, name2, pass, date, g, wl) {
    this.firstName = name1;
    this.lastName = name2;
    this.password = pass;
    this.date = date;
    this.gender = g ? "Male" : "Female";
    this.wishList = [wl];
  }
}

function Add() {
  let name1 = document.getElementById("fname").value;
  let name2 = document.getElementById("lname").value;
  let pass = document.getElementById("Pass").value;
  let date = document.getElementById("DT").value;
  let g = document.getElementById("G1").checked;
  let wl = document.getElementById("WL").value;

  if (name1 !== "" && name2 !== "" && pass !== "" && date !== "" && wl !== "") {
    wl.split(",");
    let np = new birthCard(name1, name2, pass, date, g, wl);
    Cards.push(np);
    console.log(np);
  } else {
    console.log("complete the form");
  }
}
