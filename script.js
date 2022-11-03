const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: {},
  privat: false,
};

const a = prompt('One of the last watched movies', ''),
  b = prompt('How much do you rate it?', ''),
  c = prompt('One of the last watched movies', ''),
  d = prompt('How much do you rate it?', ''),
  e = prompt('What genre is this movie?', ''),
  f = prompt('What genre is this movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
personalMovieDB.geners[e] = f;

console.log(personalMovieDB);
