const start = document.getElementById("start");
const end = document.getElementById("end");
const boundaries = document.querySelectorAll(".boundary");
start.addEventListener("mouseleave", function () {
  for (i in boundaries) {
    boundaries[i].addEventListener("mouseenter", function () {
      alert("Game over!");
      window.location.reload();
    });
    end.addEventListener("mouseleave", function () {
      window.location.reload();
      alert("Congratulations, you won!");
    });
  }
});
