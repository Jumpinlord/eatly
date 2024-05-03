const scrollToTopBtn = document.getElementById("btn-back-to-top");

const scrollFunction = () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

scrollToTopBtn.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);