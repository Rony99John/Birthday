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
    id: 0,
  },
  {
    firstName: "Luke",
    lastName: "Skywalker",
    password: "1234",
    date: "2001-04-26",
    gender: "Male",
    wishList: ["A promotion", "Towels", "A goat", "Holla"],
    id: 1,
  },
  {
    firstName: "Pepper",
    lastName: "Potts",
    password: "1234",
    date: "1980-11-28",
    gender: "Female",
    wishList: ["KFC", "Peter Pan", "Socks"],
    id: 2,
  },
];

console.log(Cards);

// Function to Display the BirthDayCards depending on the given Array

function displaying(array) {
  let x = ``;
  let display = ``;

  for (i = 0; i < array.length; i++) {
    x = `<div onclick="displayWL(${array[i].id})" class="cards">
  <a class="Information" >${array[i].firstName} ${array[i].lastName}</a>
  <a class="Information" >${array[i].date}</a>
  <a class="Information" >${array[i].gender}</a>
  <div>
  <a class="editBtn" onclick="enterPass(event, ${array[i].id}, 0)">Edit</a>
  <svg onclick="enterPass(event, ${array[i].id}, 1)" width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5H21M9.00002 10V15M13 10V15M3 5H19L17.42 19.22C17.3659 19.7094 17.1331 20.1616 16.7663 20.49C16.3995 20.8184 15.9244 21 15.432 21H6.56801C6.07565 21 5.60057 20.8184 5.23376 20.49C4.86694 20.1616 4.63417 19.7094 4.58 19.22L3 5ZM6.34501 2.147C6.50676 1.80397 6.76271 1.514 7.08301 1.31091C7.40331 1.10782 7.77475 0.999996 8.15401 1H13.846C14.2254 0.999806 14.5971 1.10755 14.9176 1.31064C15.2381 1.51374 15.4942 1.80381 15.656 2.147L17 5H5.00001L6.34501 2.147Z" stroke="#995D53" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
  </div>
  `;
    display = display + ` ${x}`;
  }
  document.getElementById("cards").innerHTML = display;
}
//  &#128465; "Trash"
displaying(Cards);

// Function To Clear The Inputs Fields

function clearInput() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("Pass").value = "";
  document.getElementById("DT").value = "";
  document.getElementById("G2").checked = true;
  document.getElementById("WL").value = "";
}

// Some Variables For Sorting, Deleting, Editing......

let editId = -1;
let ID = 3;
let delEdit = -1;
let password = "";
let sortReverse = 1;

// For The Dialogs

let errorMsg = document.getElementById("ErrorMsg");
let errorBtn = document.getElementById("EB");
let CheckPassword = document.getElementById("check");
let passBtn = document.getElementById("okPB");
let cancelBtn = document.getElementById("cancelPB");
let confDelete = document.getElementById("ConfirmDelete");
let delBtn = document.getElementById("Yes");
let cnclBtn = document.getElementById("No");
let cardWL = document.getElementById("BirthdayWishlist");
let xBtn = document.getElementById("close");

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
  if (sortReverse > 0) {
    sortReverse = -1;
    displaying(Cards.reverse());
  } else {
    sortReverse = 1;
    displaying(Cards);
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
    let four = element.date;

    // Checking if the First/Last Name matches with search

    if (one.includes(search) || two.includes(search)) {
      srchArray.push(element);
    } else if (four.includes(search)) {
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

// Function to take input values to the CardsArray

function AddNew() {
  let name1 = document.getElementById("fname").value;
  let name2 = document.getElementById("lname").value;
  let pass = document.getElementById("Pass").value;
  let date = document.getElementById("DT").value;
  let g = document.getElementById("G1").checked;
  let wl = document.getElementById("WL").value;

  if (name1 !== "" && name2 !== "" && pass !== "" && date !== "" && wl !== "") {
    let wL = wl.split(",");
    let np = new birthCard(name1, name2, pass, date, g, wL, ID);

    if (editId == -1) {
      Cards.push(np);
      ID++;
    } else {
      for (let i = 0; i < Cards.length; i++) {
        if (editId == Cards[i].id) {
          Cards.splice(i, 1, np);
          editId = -1;
          delEdit = -1;
        }
      }
    }

    document.getElementById("form").style.display = "none";
    document.getElementById("new").style.display = "";
    displaying(Cards);
    clearInput();
    console.log(np);
  } else {
    errorMsg.show();
    console.log("Complete Filling The Form");
  }
}

errorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorMsg.close();
});

// Function to display or hide the input form by (Add, Cancel ) Buttons

function onof() {
  if (document.getElementById("form").style.display == "") {
    document.getElementById("form").style.display = "none";
    document.getElementById("new").style.display = "";
    clearInput();
    editId = -1;
  } else {
    document.getElementById("form").style.display = "";
    document.getElementById("new").style.display = "none";
  }
}

//  Function That Delete's the BirthdayCard....

function deleteCard(Id) {
  let deleted = Cards.filter((card) => card.id !== Id);
  Cards = deleted;
  displaying(Cards);

  return console.log("The Card Deleted...");
}

// Function To Display The Cards Info To Be Edited....

function edit(x) {
  document.getElementById("new").style.display = "none";

  for (let i = 0; i < Cards.length; i++) {
    if (x == Cards[i].id) {
      document.getElementById("fname").value = Cards[i].firstName;
      document.getElementById("lname").value = Cards[i].lastName;
      document.getElementById("Pass").value = Cards[i].password;
      document.getElementById("DT").value = Cards[i].date;
      document.getElementById("WL").value = Cards[i].wishList;
      document.getElementById("G2").checked = true;
      if (Cards[i].gender == "Male") {
        document.getElementById("G1").checked = true;
      }
      document.getElementById("form").style.display = "";
    }
  }
}

// Functions To Check The Password For the Delete And Edit Buttons....

function enterPass(event, id, Z) {
  event.stopPropagation();
  CheckPassword.show();
  editId = id;
  delEdit = Z;
}

// Adding OnClick Functions To The Confirm Password And Cancel Buttons

passBtn.addEventListener("click", (e) => {
  e.preventDefault();
  click(1);
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  click(0);
});

function click(x) {
  password = document.getElementById("passCHk").value;
  CheckPassword.close();
  document.getElementById("passCHk").value = "";

  if (delEdit == 0) {
    if (x == 1) {
      checkPass();
    } else {
      editId = -1;
      delEdit = -1;
    }
  } else {
    if (x == 1) {
      checkPass();
    } else {
      editId = -1;
      delEdit = -1;
    }
  }
}

// Function That Check If The Input Password Match The Card One

function checkPass() {
  for (let i = 0; i < Cards.length; i++) {
    if (editId == Cards[i].id) {
      if (password == Cards[i].password) {
        if (delEdit == 0) {
          edit(editId);
        } else {
          confDelete.show();
        }
      } else {
        editId = -1;
        delEdit = -1;
      }
    }
  }
}

// Adding OnClick Functions To The Confirm Delete And Cancel Buttons

delBtn.addEventListener("click", (e) => {
  e.preventDefault();
  deleteCard(editId);
  confDelete.close();
  editId = -1;
  delEdit = -1;
});

cnclBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confDelete.close();
  editId = -1;
  delEdit = -1;
});

// Function To Display The Card WishList

function displayWL(Id) {
  let name = "";
  let wishes = ``;
  let finalList = ``;

  for (let i = 0; i < Cards.length; i++) {
    if (Id == Cards[i].id) {
      name = `${Cards[i].firstName}'s`;
      document.getElementById("WLName").innerHTML = name;

      if (Cards[i].wishList.length % 2 == 0) {
        for (let j = 0; j < Cards[i].wishList.length; j = j + 2) {
          wishes = `<div>
        <p>${Cards[i].wishList[j]}</p>
        <p>${Cards[i].wishList[j + 1]}</p>
        </div>`;

          finalList = finalList + ` ${wishes}`;
        }
      } else {
        let Extra = `<div>
        <p>${Cards[i].wishList[0]}</p>
        </div>`;

        for (let j = 1; j < Cards[i].wishList.length; j = j + 2) {
          wishes = `<div>
        <p>${Cards[i].wishList[j]}</p>
        <p>${Cards[i].wishList[j + 1]}</p>
        </div>`;

          finalList = finalList + ` ${wishes}`;
        }
        finalList = finalList + ` ${Extra}`;
      }
      document.getElementById("list").innerHTML = finalList;
      cardWL.show();
    }
  }
}

// The Close Button For the WishList PopUp

xBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cardWL.close();
});
