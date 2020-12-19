let links = document.querySelectorAll(".nav__links a");

links.forEach(function (link) {
  link.onclick = function () {
    console.log(link.innerHTML);
    // Change display
    let displays = document.querySelectorAll("#profile-desc div");
    displays.forEach(function (display) {
      display.classList.remove("selected");
    });

    let display = document.getElementById(link.innerHTML.toLowerCase());
    if (!display.classList.contains("selected")) {
      display.classList.add("selected");
    }

    // Italics
    links.forEach(function (link) {
      link.classList.remove("italics");
    });
    link.classList.add("italics");
  };
});

// nav button
// document.getElementById("nav-button").onclick = function () {
//   //   if (document.getElementById("nav-dropdown").style.display == "inline") {
//   //     console.log("yes");
//   //     document.getElementById("nav-dropdown").style.display = "none";
//   //   } else {
//   //     console.log("no");
//   //     document.getElementById("nav-dropdown").style.display = "inline";
//   //   }
//   if (document.getElementById("nav-dropdown").classList.contains("disappear")) {
//     document.getElementById("nav-dropdown").classList.remove("disappear");
//   } else {
//     document.getElementById("nav-dropdown").classList.add("disappear");
//   }
// };
