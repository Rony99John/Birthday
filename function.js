class birthCard {
  constructor(name1, name2, pass, date, g, wl, id) {
    this.firstName = name1;
    this.lastName = name2;
    this.password = pass;
    this.date = date;
    this.gender = g ? "Male" : "Female";
    this.wishList = [...wl];
    this.id = id;
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
    id: 1,
  },
  {
    firstName: "Luke",
    lastName: "Skywalker",
    password: "1234",
    date: "2001-04-26",
    gender: "Male",
    wishList: ["A promotion", "Towels", "A goat"],
    id: 2,
  },
  {
    firstName: "Pepper",
    lastName: "Potts",
    password: "1234",
    date: "1980-11-28",
    gender: "Female",
    wishList: ["KFC", "Peter Pan", "Socks"],
    id: 3,
  },
];

console.log(Cards);

// Function to Display the BirthDayCards depending on the given Array

function displaying(array) {
  let x = ``;
  let display = ``;

  for (i = 0; i < array.length; i++) {
    x = `<div class="cards">
  <a class="Information" >${array[i].firstName} ${array[i].lastName}</a>
  <a class="Information" >${array[i].date}</a>
  <a class="Information" >${array[i].gender}</a>
  <div>
  <a class="editBtn" >Edit </a>
  <a class="delBtn" onclick="deleteCard(${array[i].id})"> &#215;</a>
  </div>
  </div>
  `;
    display = display + ` ${x}`;
  }
  document.getElementById("cards").innerHTML = display;
}
//  &#128465; "Trash"
displaying(Cards);

// Function to take input values to the CardsArray

function AddNew() {
  let name1 = document.getElementById("fname").value;
  let name2 = document.getElementById("lname").value;
  let pass = document.getElementById("Pass").value;
  let date = document.getElementById("DT").value;
  let g = document.getElementById("G1").checked;
  let wl = document.getElementById("WL").value;
  let ID = 4;

  if (name1 !== "" && name2 !== "" && pass !== "" && date !== "" && wl !== "") {
    let wL = wl.split(",");
    let np = new birthCard(name1, name2, pass, date, g, wL, ID);

    Cards.push(np);

    document.getElementById("form").style.display = "none";
    document.getElementById("new").style.display = "";

    displaying(Cards);
    ID++;
    console.log(np);
    return console.log("New Card Created and Added to the List");
  } else {
    // TODO:
    console.log("Complete Filling The Form");
  }
}

// Searching Function by name, date, or wishlist item

function search() {
  let search = document.getElementById("srch").value.toUpperCase();
  let srchArray = [];

  //  Accessing the Cards Array and taking Values from it

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

//  Function to Delete the BirthdayCard

function deleteCard(Id) {
  let deleted = Cards.filter((card) => card.id !== Id);
  Cards = deleted;
  displaying(Cards);

  return console.log("The Card Deleted...");
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

// Sorting Function ....

function sort(X) {
  if (X == 1) {
    Cards.sort(function (a, b) {
      if (
        a.firstName.toLowerCase() + a.lastName.toLowerCase() <
        b.firstName.toLowerCase() + b.lastName.toLowerCase
      )
        return -1;
      if (
        a.firstName.toLowerCase() + a.lastName.toLowerCase() >
        b.firstName.toLowerCase() + b.lastName.toLowerCase
      )
        return 1;
      return 0;
    });
  } else if (X == 2) {
    Cards.sort(function (a, b) {
      if (a.gender < b.gender) return -1;
      if (a.gender > b.gender) return 1;
      return 0;
    });
  } else {
    Cards.sort(function (a, b) {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
  }
  displaying(Cards);
}
