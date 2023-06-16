function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function showHome() {
  hideAllPages();
  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  hideAllPages();
  var page = document.getElementById("home");
  page.style.display = "none";

  var page = document.getElementById("skills");
  console.info(page);
  page.style.display = "block";
  console.warn("hei te exectuti");
}

function showLanguages() {
  hideAllPages();
  var page = document.getElementById("home");
  page.style.display = "none";

  var page = document.getElementById("languages");
  console.info(page);
  page.style.display = "block";
  console.warn("hei te exectuti");
}

function showProjects() {
  hideAllPages();
  var page = document.getElementById("home");
  page.style.display = "none";

  var page = document.getElementById("projects");
  console.info(page);
  page.style.display = "block";
  console.warn("hei te exectuti");
}

showHome();
