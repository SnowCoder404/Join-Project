/**
 * 
 *  The function load all templates if the page load. 
 * 
 */

function loadContacts() {
    loadSidebar();
    addClassToElement("summary", "no-active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "active");
    loadHeader();
}