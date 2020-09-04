'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        let scoreFilm = +prompt('На сколько оцените его?', '');

        if (lastFilm != '' &&  lastFilm != null && lastFilm.length <= 50) {
            personalMovieDB.movies[lastFilm] = scoreFilm;
        } else {
            --i;
            continue;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel() ;



let writeYourGenres =  function() {

    for (let i = 0; i < 3; i++) {
        // let mostLikeGanre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }

};

function showMyDB(dbObject) {

    if (!dbObject.privat) {
        console.log(dbObject);
    }

}

writeYourGenres();
showMyDB(personalMovieDB);

console.log(personalMovieDB);
