var activePage = "home";

// utilities function

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  console.info("hide %o  element hide", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  var page = $("#" + id);
  console.info("show %o  element showPage!", id, page);
  page.style.display = "block";
}

function showPage(id) {
  var oldlink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldlink.classList.remove("active");

  hide(activePage);

  activePage = id;

  var link = $(`#top-menu-bar a[data-page=${activePage}]`);
  link.classList.add("active");

  show(activePage);
}

function clickOnMenu(e) {
  var link = e.target.closest("a");
  // console.warn("click", link, e.target);
  if (link) {
    var id = link.dataset.page;
    // console.warn("click %o menu", e.target.getAttribute("data-page"));
    // console.warn("click %o menu", e.target.dataset.page);
    // console.warn("click %o menu", id);
    if (id) {
      showPage(id);
    }
  }
}

function sortByEndorcements(a, b) {
  return b.endorcement - a.endorcement;
}

function sortByName(a, b) {
  return b.name.localeCompare(b.name);
}

function showSkills(skills) {
  skills.sort(sortByEndorcements);
  var htmlSkills = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}<span>- ${skill.endorcement}</span> </li>`;
  });
  var ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}

function loadSkills() {
  var response = fetch("skills.json");
  var loaded = response.then(function (r) {
    return r.json();
  });
  loaded.then(function (skills) {
    showSkills(skills);
  });
}

// start exec
showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
