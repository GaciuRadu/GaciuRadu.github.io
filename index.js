var activePage = "home";

// utilities function

function hide(id) {
  console.info("hide %o  element hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  hide(activePage);
  var page = document.getElementById(id);
  console.info("show %o  element showPage..", id, page);
  page.style.display = "block";
  activePage = id;
}

// start exec
showPage(activePage);
