function checkThePrioOfTask(num) {
    if (num == 1) {
        urgentPrio();
    } else if (num == 2) {
        mediumPrio();
    } else if (num == 3) {
        lowPrio();
    }
}

function urgentPrio() {
    document.getElementById("urgent").classList.add("active-prio");
    document.getElementById("medium").classList.remove("active-prio");
    document.getElementById("low").classList.remove("active-prio");
    document.getElementById("urgent0").src = "../assets/img/urgent-white.svg";
    document.getElementById("urgent1").src = "../assets/img/urgent-white.svg";
    document.getElementById("medium0").src = "../assets/img/medium.svg";
    document.getElementById("medium1").src = "../assets/img/medium.svg";
    document.getElementById("low0").src = "../assets/img/low.svg";
    document.getElementById("low1").src = "../assets/img/low.svg";
    changeTheColor("urgent", "red");
    changeTheColor("medium", "white");
    changeTheColor("low", "white");
}

function mediumPrio() {
    document.getElementById("urgent").classList.remove("active-prio");
    document.getElementById("medium").classList.add("active-prio");
    document.getElementById("low").classList.remove("active-prio");
    document.getElementById("urgent0").src = "../assets/img/urgent.svg";
    document.getElementById("urgent1").src = "../assets/img/urgent.svg";
    document.getElementById("medium0").src = "../assets/img/medium-white.svg";
    document.getElementById("medium1").src = "../assets/img/medium-white.svg";
    document.getElementById("low0").src = "../assets/img/low.svg";
    document.getElementById("low1").src = "../assets/img/low.svg";
    changeTheColor("urgent", "white");
    changeTheColor("medium", "orange");
    changeTheColor("low", "white");
}

function lowPrio() {
    document.getElementById("urgent").classList.remove("active-prio");
    document.getElementById("medium").classList.remove("active-prio");
    document.getElementById("low").classList.add("active-prio");
    document.getElementById("urgent0").src = "../assets/img/urgent.svg";
    document.getElementById("urgent1").src = "../assets/img/urgent.svg";
    document.getElementById("medium0").src = "../assets/img/medium.svg";
    document.getElementById("medium1").src = "../assets/img/medium.svg";
    document.getElementById("low0").src = "../assets/img/low-white.svg";
    document.getElementById("low1").src = "../assets/img/low-white.svg";
    changeTheColor("urgent", "white");
    changeTheColor("medium", "white");
    changeTheColor("low", "green");
}