const face = document.getElementById("face");
const middleline = document.getElementById("middleline");
const leftarm = document.getElementById("leftarm");
const rightarm = document.getElementById("rightarm");
const leftleg = document.getElementById("leftleg");
const rightleg = document.getElementById("rightleg");
const Guess = document.querySelector("#Guess");
const button = document.getElementById("button");

const hang = document.querySelectorAll(".hang");
const type = document.querySelector("#type");

const demo = {
  Clothes: [
    "Socks",
    "Jeans",
    "Shirt",
    "Gloves",
    "Blouse",
    "Jacket",
    "Underpants",
    "Sandows",
    "Palazo",
    "Gown",
  ],
  Colors: ["Yellow", "Green", "White", "Black", "Purple", "Blue", "Majenta","Purple", "Blue", "Majenta"],
  Sports: [
    "Cricket",
    "Hockey",
    "Football",
    "Baseball",
    "Basketball",
    "Squash",
    "Chess",
    "Tabletennis",
    "Chess",
    "Tabletennis"
  ],
  Animals: ["Lion", "Tiger", "Elephant", "Giraafe", "Mouse", "Cat", "Deer","Tiger", "Elephant", "Giraafe"],
};

var selectspecies=null;
const Selectype=(e)=>{
if(e.target.classList.contains("button-40") && e.target.innerText) {selectspecies=e.target.innerText};
const generateno = Math.floor(Math.random() * 10);

let char;
let  wordlength;
for(let a in demo){
 if(a===selectspecies){
  char=wordlength=demo[a][generateno];
  wordlength=demo[a][generateno].length;
 }
}
const Startgame = () => {
  hang.forEach((box) => (box.style.visibility = "hidden"));
  Guess.innerHTML = "";
  Guess.style.display = "flex";
  Guess.style.flexDirection = "column";
  Guess.style.justifyContent = "space-between";
  for (let j = 1; j <= 2; j++) {
    const div = document.createElement("div");
    Guess.appendChild(div);
    div.setAttribute("id", j * 10);
  }
  for (let i = 0; i < wordlength; i++) {
    const div = document.createElement("div");
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.margin = "1px";
    div.style.color = "black";
    div.style.textAlign = "center";
    div.style.padding = "5px";
    div.style.backgroundColor = "White";
    document.getElementById(10).appendChild(div);
    div.setAttribute("id", i);
  }
  document.getElementById("10").style.display = "flex";
  document.getElementById("10").style.flexDirection = "row";
  document.getElementById("10").style.justifyContent = "space-between";
  document.getElementById("10").style.height = "50%";
  document.getElementById("10").style.margin = "1.5rem auto 1.5rem auto";
  document.getElementById("20").style.margin = "1.5rem auto 1.5rem auto";

  for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    document.getElementById("20").appendChild(button);
    button.innerText = String.fromCharCode(i);
    button.value = i;
    button.style.width = "35px";
    button.style.height = "35px";
    button.style.margin = "2px";
    button.style.backgroundColor = "White";
  }

  document.getElementById("20").addEventListener("click", selectalpha);
};
button.addEventListener("click", Startgame);
let count = 0;
let FoundCount = 0;
console.log(char)
const selectalpha = (e) => {
  let repeatcount=0;
  let flag=false;
  if (e.target.value) {
    for (let i = 0; i < wordlength; i++) {
      let box = document.getElementById(i);
      if (
     box.innerText == "" &&
        e.target.innerText === char[i].toLowerCase()
      ) {
        box.innerText = e.target.innerText;
        FoundCount++;
        flag=true;
      } 
    }
  }
  !flag && hang.forEach((box, i) => {
    if (i <= count) {
      hang[i].style.visibility = "visible";
    } else return;
  });
   !flag && count++;

  if (count == 6) {
    Guess.innerHTML = "";
    const p = document.createElement("p");
    const Restart = document.createElement("button");
    Restart.setAttribute("class", "button");
    Guess.appendChild(p);
    Guess.appendChild(Restart);
    Restart.innerText = "Restart";
    Guess.style.padding = "1rem";
    Guess.style.display = "block";
    Guess.style.color = "black";
    Guess.style.font = "5rem";
    p.innerText = "YOU LOOSE !";
    p.style.margin = "2rem";
    Restart.style.margin = "2rem";
    Restart.addEventListener("click", Startgame);
    count = 0;
    selectspecies=null;
  }
  else if (FoundCount == wordlength) {
    Guess.innerHTML = "";
    const p = document.createElement("p");
    const Restart = document.createElement("button");
    Restart.setAttribute("class", "button");
    Guess.appendChild(p);
    Guess.appendChild(Restart);
    Restart.innerText = "Restart";
    Guess.style.padding = "1rem";
    Guess.style.display = "block";
    Guess.style.color = "black";
    Guess.style.font = "5rem";
    p.innerText = "YOU WIN !";
    p.style.margin = "2rem";
    Restart.style.margin = "2rem";
    Restart.addEventListener("click", Startgame);
    count = 0;
    selectspecies=null;
  }
};
}
type.addEventListener("click",Selectype);

