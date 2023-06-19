var employed = false; // boolean
var age = 24; // number
var name = "First Last"; // string

age = 30;

// object (array)
var skills = ["html", "css", "js"];
// object (json)
var person = {
  employed: true,
  age: 29,
};
// object (DOM, other)
var el = document.getElementById("el");

name = "Radu";

function printInfo() {
  console.log(typeof skills, skills, age);
  console.info("my name", name);

  console.warn("person type", typeof person, person);
}

document.getElementById("job-title").addEventListener("click", function () {
  document.getElementById("job-title").style.color = "red";
  document.getElementById("job-title").innerHTML = "Wow ce <i>fain</i> este";
});

document.getElementById("job-title").addEventListener("click", function () {
  if ((document.getElementById("job-title").style.color = "blue")) {
    document.getElementById("job-title").style.color = "red";
    document.getElementById("job-title").innerHTML = "Wow ce <i>fain</i> este";
  } else {
    document.getElementById("job-title").style.color = "blue";
    document.getElementById("job-title").innerHTML = "Wow ce <i>NASPA</i> este";
  }
});
