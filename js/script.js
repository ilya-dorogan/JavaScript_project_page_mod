'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против мира"
        ]
    };

    const poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        promo = document.querySelectorAll('.promo__adv img'),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    const pageChange = () => {
        genre.textContent = 'ДРАМА';

        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {

            if (favourite) {
                alert('Добавлен любимый фильм!');
            }

            if (newFilm.length >= 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, list);
        }

        event.target.reset();
    });

    deleteAdv(promo);

    createMovieList(movieDB.movies, list);

    pageChange();
});