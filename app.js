let szam = 0;
const h2 = document.getElementById("szam");

document.getElementById("btn-").addEventListener("click", () => {

    szam--;
    h2.innerText = szam;

    szinezes();
})

document.getElementById("btn+").addEventListener("click", () => {

    szam++;
    h2.innerText = szam;

    szinezes();
})

function szinezes() {

    if (szam < 0) {

        h2.style = "color: red";
    }
    else if (szam == 0) {

        h2.style = "color: black";
    }
    else {

        h2.style = "color: green";
    }
}