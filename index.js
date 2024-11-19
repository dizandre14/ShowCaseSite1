const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); //used to stop the default behavior

    navLink.forEach(function (nav) {
      nav.classList.remove("active");
    });

    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear(); //Changes the copyright year automatically
