
function loadSidebar() {
    document.getElementById("sidebar").innerHTML = sidebarShow();
}

function renderTemplates(pageName) {
  const sidebar = getSidebarHTML(pageName);
  const sidebarElement = document.querySelector('.sidebar');

  sidebarElement.innerHTML = sidebar;
}


/**
 * The function add a class to the element.
 * 
 * @param {string} element - The element that is added to the class. 
 * @param {string} aktiveClass - The class that is added to the element.
 */

function addClassToElement(element, aktiveClass) {
  document.getElementById(element).classList.add(aktiveClass);
}