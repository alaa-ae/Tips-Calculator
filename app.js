// add the cross icon to the div
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let img = document.createElement("img");
  img.src = "https://img.icons8.com/fluency-systems-regular/17/000000/x.png";
  img.className = "close";
  myNodelist[i].appendChild(img);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.remove();
  }
}


// Create a new list item when clicking on the "Add" button
let count = 0;
function newElement() {
  var li = document.createElement("li");
  li.className = "todo_li";
  var div = document.createElement("div");
  div.className = "left_li";
  var p = document.createElement("p");


  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "check");
  input.className = "c";
  div.appendChild(input);

  var label = document.createElement("label");
  label.setAttribute("for", "check");
  label.className = "checkbtn";



  var checkImg = document.createElement("img");
  checkImg.src = "./images/icon-check.svg";
  label.appendChild(checkImg);

  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  p.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let first = document.getElementById("todo_ul").appendChild(li);
    let second = first.appendChild(div);
    second.appendChild(label);
    second.appendChild(p);
  }
  document.getElementById("myInput").value = "";


  let addedImg = document.createElement("img");
  addedImg.src = "https://img.icons8.com/fluency-systems-regular/17/000000/x.png";
  addedImg.className = "close";

  li.appendChild(addedImg);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    }
  }
  count++;
}
console.log(count);
// Remove Completed
let completed_li = document.getElementsByClassName("todo_li");
let checked_box = document.getElementsByClassName("c");

function completed() {
  for (let i = 0; i < 100; i++) {
    if (checked_box[i].checked) {
      completed_li[i].remove();
    }
  }
}
document.getElementById("clearBtn").addEventListener("click", completed);

// Filter
function showCompleted() {
  for (let i = 0; i < completed_li.length; i++) {
    if (checked_box[i].checked) {
      completed_li[i].style.display = "flex";
    } else {
      completed_li[i].style.display = "none";
    }
  }

}
document.getElementById("completed").addEventListener("click", showCompleted);

function showActive() {
  for (let i = 0; i < 100; i++) {
    if (checked_box[i].checked) {
      completed_li[i].style.display = "none";

    } else {
      completed_li[i].style.display = "flex";
    }
  }
}
document.getElementById("active").addEventListener("click", showActive);

function showAll() {
  for (let i = 0; i < 100; i++) {
    completed_li[i].style.display = "flex";
  }
}
document.getElementById("all").addEventListener("click", showAll);


// Toggle dark mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}

// Count items left

function setItems() {
  let activeTodo = document.querySelectorAll(".active_check");
  let diff = completed_li.length + activeTodo.length;
  console.log(activeTodo);
  let items = document.getElementById("items_left");
  let itemsTxt = document.createTextNode(diff + " items left");

  items.innerText = diff + " items left";


}
setItems();




// add the last div to the stats div on desktop
function b(x) {
  if (x.matches) {
    let linkdiv = document.getElementById("links");
    let statsdiv = document.getElementById("stats");
    let btn = document.getElementById("clearBtn");
    linkdiv.style.cssText = "background-color:transparent; width: 20%;margin-top: 10px;"
    statsdiv.insertBefore(linkdiv, btn);
  }
}

var x = window.matchMedia("(min-width: 700px)")
b(x);
x.addListener(b);