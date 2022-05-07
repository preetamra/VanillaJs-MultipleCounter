const container = document.getElementById("contain");
const btn = document.getElementById("btn"); /* 
const arrOfClosure = [{ele:container.firstChild,num:0}]; */

function addNumber(type) {
  let num = 0;
  function number(type) {
    if (type == "UP") {
      return ++num;
    } else if (type == "DOWN") {
      return --num;
    } else if (type == "RESET") {
      num = 0;
      return num;
    } else {
      return num;
    }
  }
  return number;
}

btn.addEventListener("click", addCounter);

function addCounter() {
  const num = addNumber();
  const divouter = document.createElement("div");
  divouter.className = "card style";
  divouter.style.width = "18rem";
  const divinner = document.createElement("div");
  divinner.className = "card-body style";
  const h5 = document.createElement("h5");
  h5.className = "card-title style";
  h5.innerText = num();
  const button = document.createElement("button");
  button.innerText = "Decrement";
  button.className = "button";
  button.addEventListener("click", manipulateNum.bind(null, "DOWN"));
  const button1 = document.createElement("button");
  button1.innerText = "Increment";
  button1.className = "button";
  button1.addEventListener("click", manipulateNum.bind(null, "UP"));
  const button2 = document.createElement("button");
  button2.innerText = "Reset";
  button2.className = "button";
  button2.addEventListener("click", manipulateNum.bind(null, "RESET"));
  divinner.appendChild(h5);
  divinner.appendChild(button);
  divinner.appendChild(button1);
  divinner.appendChild(button2);
  divouter.appendChild(divinner);
  container.appendChild(divouter);

  function manipulateNum(type) {
    num(type);
    h5.innerText = num();
  }
}

/* 
<div class="card style" style="width: 18rem">
          <div class="card-body style">
            <h5 class="card-title style">0</h5>
            <button class="Decrement">Decrement</button>
            <button class="Increment">Increment</button>
            <button class="Reset">Reset</button>
          </div>
        </div> */
