const start = document.getElementById("start");
const end = document.getElementById("end");
var boundaries = document.querySelectorAll(".boundary");
var statusH = document.getElementById("status");

start.addEventListener("mouseleave", function () {
  statusH.innerHTML = 'Game Started!'
  // O(1)
  
   boundaries.forEach((boundary)=>{
     boundary.addEventListener("mouseover", function () {
        boundary.classList.add("highlighted")
        statusH.innerHTML = 'You lost'
        setTimeout(
          function(){
              window.location.reload()
          }
          ,1000);
     });
   }) 
    end.addEventListener("mouseenter", function () {
        statusH.innerHTML = 'Congratulations, you won!'

        setTimeout(
            function(){
                window.location.reload()
            }
            ,3000);
    });
  }
);
