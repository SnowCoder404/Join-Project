/**
 * 
 * The function load the sidebar template.
 * 
 */

function loadSidebar() {
    document.getElementById("sidebar").innerHTML = sidebarShow();
}

/**
 * 
 * The function load the header template.
 * 
 */

function loadHeader() {
    document.getElementById("header").innerHTML = getHeaderTemplate();
}

/**
 * 
 * The function add a class to the element.
 * 
 * @param {string} element - The element that is added to the class. 
 * @param {string} aktiveClass - The class that is added to the element.
 */

function addClassToElement(element, aktiveClass) {
  document.getElementById(element).classList.add(aktiveClass);
}

/**
 * 
 * The function toggle the header drop down menu.
 * 
 */

function toggleHeaderMenu() {
    document.getElementById("headerMenu").classList.toggle("d_none");
}