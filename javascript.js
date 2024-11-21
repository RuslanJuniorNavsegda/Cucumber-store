window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");
  loader.classList.add("hidden");

  const textElements = document.querySelectorAll(".fade-text");
  textElements.forEach((el, idx) => {
    setTimeout(() => el.classList.add("visible"), idx * 200);
  });
});

const handleScroll = () => {
  const elements = document.querySelectorAll(".fade-text");
  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 150) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleScroll);

handleScroll();
