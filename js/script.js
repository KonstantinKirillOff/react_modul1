'use strict';


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


for (let i = 0; i < 2; i++) {

    let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    let scoreFilm = +prompt('На сколько оцените его?', '');

    if (lastFilm == '') {
        --i;
        continue;
    }

    if (lastFilm == null) {
        --i;
        continue;
    }

    if (lastFilm.length > 50)  {
        --i;
        continue;
    }

    personalMovieDB.movies[lastFilm] = scoreFilm;

}

console.log(personalMovieDB);
