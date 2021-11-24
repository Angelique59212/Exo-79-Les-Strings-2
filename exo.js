let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

//exo1
let p1 = document.getElementById("index-pomme");
let position = pomme.indexOf("pomme");
p1.innerHTML = position;
console.log(position);

//exo 2
let p2 = document.getElementById("last-index-m");
let lastPosition = pomme.lastIndexOf("m");
p2.innerHTML = lastPosition;
console.log(lastPosition);

//exo 3

if (pomme.startsWith("Elle")) {
    console.log("Elle est belle ma pomme ! Commence par elle");
}

//exo4
if (pomme.endsWith("!")) {
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

//exo5
let newsChaine = pomme.substring(18,23);
console.log(newsChaine)

let p3 = document.getElementById("pomme");
p3.innerHTML = newsChaine;

//exo6
console.log(pomme[0]);
for (let i = 0; i < pomme.length; i++) {
    console.log(pomme[i]);
    let p4 = document.getElementById("one-line");
    p4.innerHTML += pomme[i] + "<br>";
}


