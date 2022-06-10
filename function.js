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
let x = ``;
let display = ``;
for (i = 0; i < Cards.length; i++) {
  x = `<div class="cards">
<a>${Cards[i].firstName} ${Cards[i].lastName}</a>
<a>${Cards[i].date}</a>
<a>${Cards[i].gender}</a>
<a>Edit &#128465;</a>
</div>
`;
  display = display + ` ${x}`;
}
document.getElementById("cards").innerHTML = display;

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

    const form = document.getElementById("form");

    form.addEventListener("submit", function handleSubmit(event) {
      event.preventDefault();
      form.reset();
    });
  } else {
    console.log("complete the form");
  }
}

function onof() {
  if (document.getElementById("form").style.display == "") {
    document.getElementById("form").style.display = "none";
  } else {
    document.getElementById("form").style.display = "";
  }
}
