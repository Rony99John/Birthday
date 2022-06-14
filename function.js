class birthCard {
  constructor(name1, name2, pass, date, g, wl) {
    this.firstName = name1;
    this.lastName = name2;
    this.password = pass;
    this.date = date;
    this.gender = g ? "Male" : "Female";
    this.wishList = [...wl];
  }
}

let Cards = [
  {
    firstName: "Frodo",
    lastName: "Baggins",
    password: "1234",
    date: "1995-03-24",
    gender: "Male",
    wishList: ["Teeth", "a girlfriend", "A sense of humor"],
  },
  {
    firstName: "Luke",
    lastName: "Skywalker",
    password: "1234",
    date: "2001-04-26",
    gender: "Male",
    wishList: ["A promotion", "Towels", "A goat"],
  },
  {
    firstName: "Pepper",
    lastName: "Potts",
    password: "1234",
    date: "1980-11-28",
    gender: "Female",
    wishList: ["KFC", "Peter Pan", "Socks"],
  },
];

console.log(Cards);

// Function to Display the BirthDayCards depending on the given Array

function displaying(array) {
  let x = ``;
  let display = ``;

  for (i = 0; i < array.length; i++) {
    x = `<div class="cards">
  <a>${array[i].firstName} ${array[i].lastName}</a>
  <a>${array[i].date}</a>
  <a>${array[i].gender}</a>
  <a>Edit &#128465;</a>
  </div>
  `;
    display = display + ` ${x}`;
  }
  document.getElementById("cards").innerHTML = display;
}

displaying(Cards);

// Function to take inputs values to the CardsArray

function AddNew() {
  let name1 = document.getElementById("fname").value;
  let name2 = document.getElementById("lname").value;
  let pass = document.getElementById("Pass").value;
  let date = document.getElementById("DT").value;
  let g = document.getElementById("G1").checked;
  let wl = document.getElementById("WL").value;

  if (name1 !== "" && name2 !== "" && pass !== "" && date !== "" && wl !== "") {
    let wL = wl.split(",");
    let np = new birthCard(name1, name2, pass, date, g, wL);
    Cards.push(np);
    console.log(np);

    document.getElementById("form").style.display = "none";
    document.getElementById("new").style.display = "";
    displaying(Cards);
  } else {
    // TODO:
    console.log("complete the form");
  }
}

// Function to display or hide the input form by (Add, Cancel ) Buttons

function onof() {
  if (document.getElementById("form").style.display == "") {
    document.getElementById("form").style.display = "none";
    document.getElementById("new").style.display = "";
  } else {
    document.getElementById("form").style.display = "";
    document.getElementById("new").style.display = "none";
  }
}

// searching by name, date, or wishlist item

function search() {
  let search = document.getElementById("srch").value.toUpperCase();
  let srchArray = [];

  //  accessing the Cards Array and taking Values from it

  for (let i = 0; i < Cards.length; i++) {
    let element = Cards[i];
    let one = element.firstName.toUpperCase();
    let two = element.lastName.toUpperCase();
    let three = element.wishList;

    // Checking if the First/Last Name matches with search

    if (one.includes(search) || two.includes(search)) {
      srchArray.push(element);
    } else {
      //  looping and searching in the wishlist

      for (let z = 0; z < three.length; z++) {
        let wish = three[z].toUpperCase();

        if (wish.includes(search)) {
          srchArray.push(element);
          break;
        }
      }
    }
  }
  displaying(srchArray);
}
