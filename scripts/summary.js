/**
 * 
 *  The function load all templates if the page load. 
 * 
 */

function loadSummary() {
    loadSidebar();
    addClassToElement("summary", "active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "no-active");
    loadHeader();
}