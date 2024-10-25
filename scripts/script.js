const start = document.getElementById("start");
const end = document.getElementById("end");
const boundaries = document.querySelectorAll(".boundary");
const body = document.querySelector("body")
var winMsg = document.createElement("h3");

start.addEventListener("mouseleave", function () {
  for (i in boundaries) {
    boundaries[i].addEventListener("mouseenter", function () {
      alert("Game over!");
      window.location.reload();
    });
    end.addEventListener("mouseleave", function () {
        winMsg.innerText="Congratulations, you won!";
        body.appendChild(winMsg);
        setTimeout(
            function(){
                window.location.reload()
            }
            ,3000);
    });
  }
});
