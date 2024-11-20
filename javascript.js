// Убираем загрузчик после полной загрузки страницы
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");
  loader.classList.add("hidden");

  // Плавное появление элементов на странице
  const textElements = document.querySelectorAll(".fade-text");
  textElements.forEach((el, idx) => {
    setTimeout(() => el.classList.add("visible"), idx * 200); // Добавляем видимость с задержкой
  });
});

// Функция для активации анимации появления при скролле
const handleScroll = () => {
  const elements = document.querySelectorAll(".fade-text");
  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 150) {
      // Если элемент виден на экране
      el.classList.add("visible");
    }
  });
};

// Добавляем обработчик события на скролл
window.addEventListener("scroll", handleScroll);

// Запускаем анимацию при первоначальной загрузке
handleScroll();
