var activePage = "home";

// utilities function

function hide(id) {
  console.info("hide %o element", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  hide(activePage);
  var page = document.getElementById(id);
  console.info("show %o ..", id, page);
  page.style.display = "block";
  activePage = id;
}

// start exec
showPage("activePage");
