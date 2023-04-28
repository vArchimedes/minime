const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if(burger.classList.contains("active")){
    
  }else{
    gsap.to(".links", {x: "0%"});
  }
  burger.classList.toggle("active");
});