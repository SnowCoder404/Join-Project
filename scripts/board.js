/**
 * 
 *  The function load all templates if the page load. 
 * 
 */

function loadBoard() {
    loadSidebar();
    addClassToElement("summary", "no-active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "active");
    addClassToElement("contacts", "no-active");
    loadHeader();
}