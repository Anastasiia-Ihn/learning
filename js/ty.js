// // Інінціалізація програвача
// const player = new Plyr("#features-player");
// // Шлях до постера для програвача
// // player.poster = "../images copy/how_it’s_made/cover-mobile@1x.jpg";

// const posters = [
//   { src: "../img/how_it’s_made/cover-mobile@1x.jpg", mediaQuery: "(max-width: 374px)" }, // маленький розмір вьюпорту
//   { src: "../img/how_it’s_made/cover-tablet@1x.jpg", mediaQuery: "(min-width: 375px) and (max-width: 767px)" }, // середній розмір вьюпорту
//   { src: "../img/how_it’s_made/cover@1x.jpg", mediaQuery: "(min-width: 768px)" }, // великий розмір вьюпорту
// ];
// // Функція для зміни постера в залежності від розміру вьюпорту
// function changePoster() {
//   const currentPoster = player.poster;

//   // Перевіряємо кожен постер і встановлюємо потрібний постер
//   for (const poster of posters) {
//     if (window.matchMedia(poster.mediaQuery).matches) {
//       if (currentPoster !== poster.src) {
//         player.poster = poster.src;
//       }
//       break;
//     }
//   }
// }

// // Викликаємо функцію після завантаження сторінки та при зміні розміру вьюпорту
// window.addEventListener("DOMContentLoaded", changePoster);
// window.addEventListener("resize", changePoster);


const button = document.getElementById("fixed-button");

// Функция для добавления/удаления класса "show" для анимации кнопки
function toggleButton() {
  if (window.pageYOffset > 0) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
}

// Слушаем событие прокрутки страницы и вызываем функцию toggleButton
window.addEventListener("scroll", toggleButton);