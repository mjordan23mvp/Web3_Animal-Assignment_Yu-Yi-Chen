var d1 = document.getElementById("d1");

d1.addEventListener("click",function(evt){
  evt.preventDefault();
  d1.classList.toggle("is-clicked");
  d1.classList.toggle("is-active");
},false)

var d2 = document.getElementById("d2");

d2.addEventListener("click",function(evt){
  evt.preventDefault();
  d2.classList.toggle("is-clicked");
  d2.classList.toggle("is-active");
},false)

var d3 = document.getElementById("d3");

d3.addEventListener("click",function(evt){
  evt.preventDefault();
  d3.classList.toggle("is-clicked");
  d3.classList.toggle("is-active");
},false)