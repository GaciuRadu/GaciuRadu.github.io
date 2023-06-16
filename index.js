function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function showLanguages() {
  showPage("languages");
  // hideAllPages();
  // var page = document.getElementById("home");
  // page.style.display = "none";

  // var page = document.getElementById("languages");
  // console.info(page);
  // page.style.display = "block";
  // console.warn("hei te exectuti");
}

function showProjects() {
  showPage("Projects");
  // hideAllPages();
  // var page = document.getElementById("home");
  // page.style.display = "none";

  // var page = document.getElementById("projects");
  // console.info(page);
  // page.style.display = "block";
  // console.warn("hei te exectuti");
}

function showPage(id) {
  hideAllPages();
  var page = document.getElementById(id);
  console.info("show", page);
  page.style.display = "block";
}

showPage("Home");
