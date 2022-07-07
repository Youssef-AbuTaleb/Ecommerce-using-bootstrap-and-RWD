document.body.onscroll = () => {
  document.querySelector(".scrollUp").classList.add("show");
};

up.onclick = function () {
  setTimeout(() => {
    document.querySelector(".scrollUp").classList.remove("show");
  }, 1000);
};
