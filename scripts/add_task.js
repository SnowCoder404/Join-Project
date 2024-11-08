function loadTask() {
    loadSidebar();
    showWhichSiteIsAktiv();
    loadHeader();
    mediumPrio();
    
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "no-active");
    addClassToElement("task", "active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "no-active");
}

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

/**
 * The function is for the change the color from a element.
 * 
 * @param {string} item - The element that add the background color.
 * @param {string} color - The background color that add to element.  
 */

function changeTheColor(item, color) {
    document.getElementById(item).style = `background-color: ${color}`;
}

/**
 * 
 *  The function clear all input fields and set the prio of medium. 
 */

function clear() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    mediumPrio()
}

function createNewTask() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let prio = document.getElementsByClassName("active-prio")[0].id;
    let category = document.getElementById("category").value;
    let taskObj = {
            "title": title,
            "date": date,
            "prio": prio,
            "category": category
    }
    console.log(taskObj);
    clear();
}

/*
function showUserList() {
    for (let index = 0; index < userlist.length; index++) {
        let userName = userlist[index];
        document.getElementById("userlist").innerHTML = getUserListTemplate(index, userName);
    }
}
*/