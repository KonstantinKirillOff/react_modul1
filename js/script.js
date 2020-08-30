'use strict';


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {

    let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    let scoreFilm = +prompt('На сколько оцените его?', '');

    personalMovieDB.movies[lastFilm] = scoreFilm;

};

console.log(personalMovieDB);
