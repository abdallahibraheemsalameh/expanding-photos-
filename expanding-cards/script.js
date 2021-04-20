const divs = document.querySelectorAll(".dd");

divs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    divs.forEach((e) => {
      e.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

console.log(divs);
