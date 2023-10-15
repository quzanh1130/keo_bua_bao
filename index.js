const player_one = document.getElementById('player_one');
const player_two = document.getElementById('player_two'); 

let a = localStorage.getItem('storage_a') ?? 0;
let b = localStorage.getItem('storage_b') ?? 0;

player_one.textContent = a;
player_two.textContent = b;

console.log(a,b);

function firstFunction(x) {
    a = localStorage.getItem('storage_a') ?? 0;
    b = localStorage.getItem('storage_b') ?? 0;

    let doithu = Math.floor((Math.random() * 3) + 1);
    let address;
    if (doithu == 1) {
        address = "./assets/img/keo.jpg";
    } else if (doithu == 2) {
        address = "./assets/img/bua.jpg";
    } else {
        address = "./assets/img/bao.jpg";
    }
    switch (x) {
        case 1:
            if (doithu == 1) {
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#444444";
            } else if (doithu == 2) {
                b++;
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#f2ca04";
            } else {
                a++;
                document.getElementById("user1").style.background = "#f2ca04";
                document.getElementById("user2").style.background = "#444444";
            }
            document.getElementById("myPicture").src = "./assets/img/keo.jpg";
            document.getElementById("competitorPicture").src = address;
        break;
        case 2:
            if (doithu == 2) {
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#444444";
            } else if (doithu == 3) {
                b++;
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#f2ca04";
            } else {
                a++;
                document.getElementById("user1").style.background = "#f2ca04";
                document.getElementById("user2").style.background = "#444444";
            }
            document.getElementById("myPicture").src = "./assets/img/bua.jpg";
            document.getElementById("competitorPicture").src = address;
        break;
        case 3:
            if (doithu == 3) {
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#444444";
            } else if (doithu == 1) {
                b++;
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#f2ca04";
            } else {
                a++;
                document.getElementById("user1").style.background = "#f2ca04";
                document.getElementById("user2").style.background = "#444444";
            }
            
            document.getElementById("myPicture").src = "./assets/img/bao.jpg";
            document.getElementById("competitorPicture").src = address;
        break;
    }
    localStorage.setItem('storage_a', a ?? 0);
    localStorage.setItem('storage_b', b ?? 0);
    // console.log(a,b);
    player_one.textContent = a;
    player_two.textContent = b;
}

