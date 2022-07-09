
let numberOfFilms; 


function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''); 
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''); 
    }

}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:  {},
    genres: [],
    privat: false 
};

function showMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
        
    }

}

showMyDB(personalMovieDB.privat);

   

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const   a = prompt("Один из послених фильмов?", ''), 
                b = prompt('На сколько оцените его?', ''); 
                 
        if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' & b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');   
        } else {
            console.log('Error');
            i--; 
        }     

    }
}
rememberMyFilms();





function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов', '');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) { 
            alert('Вы классический зритель', '');
        } else if (personalMovieDB.count >= 30 ) { 
            alert('Вы киноман', '');
        } else {
            alert('Ошибка', '');
        }

}
detectPersonalLevel ();

console.log(personalMovieDB);


function writeYourGenres () {
    for (let index = 1; index <= 3; index++) {
        const genre = prompt(`Ваш любимы жанр под номером ${index} `);
        personalMovieDB.genres[index - 1] = genre;
    } 
}
writeYourGenres ();