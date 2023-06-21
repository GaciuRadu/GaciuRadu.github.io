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
function clickOnMenu(e) {
  var link = e.target.closest("a");
  // console.warn("click", link, e.target);
  if (link) {
    var id = link.dataset.page;
    // console.warn("click %o menu", e.target.getAttribute("data-page"));
    console.warn("click %o menu", id);
    if (id) {
      showPage(id);
    }
  }
}

// start exec
showPage(activePage);
document.getElementById("top-menu-bar").addEventListener("click", clickOnMenu);
