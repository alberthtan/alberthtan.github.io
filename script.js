let links = document.querySelectorAll(".nav__links a");

links.forEach(function (link) {
  link.onclick = function () {
    links.forEach(function (link) {
      link.classList.remove("italics");
    });
    link.classList.add("italics");
  };
});
