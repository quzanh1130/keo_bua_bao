
function firstFunction(x) {
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
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#f2ca04";
            } else {
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
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#f2ca04";
            } else {
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
                document.getElementById("user1").style.background = "#444444";
                document.getElementById("user2").style.background = "#f2ca04";
            } else {
                document.getElementById("user1").style.background = "#f2ca04";
                document.getElementById("user2").style.background = "#444444";
            }
            document.getElementById("myPicture").src = "./assets/img/bao.jpg";
            document.getElementById("competitorPicture").src = address;
        break;
    }
}

