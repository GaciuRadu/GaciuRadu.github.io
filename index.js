let activePage = "home";

(function start() {
  const hash = document.location.hash.substring(1);
  if (hash) {
    var link = $(`#top-menu-bar a[data-page=${hash}]`);
    if (link) {
      activePage = hash;
    }
  }
})();

// utilities function

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  console.info("hide %o  element hide", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  const page = $("#" + id);
  console.info("show %o  element showPage!", id, page);
  page.style.display = "block";
}

function showPage(id) {
  const oldlink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldlink.classList.remove("active");

  hide(activePage);

  activePage = id;

  const link = $(`#top-menu-bar a[data-page=${activePage}]`);
  link.classList.add("active");

  show(activePage);
}

function clickOnMenu(e) {
  const link = e.target.closest("a");
  // console.warn("click", link, e.target);
  if (link) {
    const id = link.dataset.page;
    // console.warn("click %o menu", e.target.getAttribute("data-page"));
    // console.warn("click %o menu", e.target.dataset.page);
    // console.warn("click %o menu", id);
    if (id) {
      showPage(id);
      document.location.hash = `#${id}`;
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
  const htmlSkills = skills.map((skill) => {
    const cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}<span>- ${skill.endorcement}</span> </li>`;
  });
  const ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}

function loadSkills() {
  const response = fetch("skills.json");
  const loaded = response.then((r) => r.json());

  loaded.then((skills) => {
    // console.info(skills);
    showSkills(skills);
  });
}

// start exec
showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
