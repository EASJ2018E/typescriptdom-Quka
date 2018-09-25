// Opgave 1
let el = document.getElementById("one");
// console.log(el);

let elsClass = document.getElementsByClassName("usundt");
// console.log(elsClass);

let elsTag = document.getElementsByTagName("li");
//console.log(elsTag);

// Opgave 2
for(let i = 0; i < elsTag.length; i++) {
    // console.log("Class:" + elsTag[i].className);
}

// Opgave 3
el.setAttribute("class", "random");

let el2 = document.getElementById("two");
//el2.setAttribute("hidden", "true");

let usunde = document.getElementsByClassName("usundt");
console.log(usunde);
for (let i = 0; i < usunde.length; i++) {
    usunde[i].setAttribute("class", "sund");
}