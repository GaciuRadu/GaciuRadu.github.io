var activePage = "skills";

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

  var link = $(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  show(id);

  activePage = id;
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

function showSkills() {
  var skills = [
    { name: "HTML", favorite: true },
    { name: "Css" },
    { name: "JS", favorite: true },
  ];
  var htmlSkills = skills.map(function (skill) {
    console.info("inside map", skill);
    // <li class="favorie">HTML</li>;
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}</li>`;
  });
  console.info("skills", htmlSkills);
  var ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}

// start exec
showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkills();
