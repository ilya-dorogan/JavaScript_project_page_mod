'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    promo = document.querySelectorAll('.promo__adv img'),
    list = document.querySelector('.promo__interactive-list');


promo.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';

poster.style.backgroundImage = "url('img/bg.jpg')";

list.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>`;
});