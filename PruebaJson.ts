

import { Imdb } from "./IMDb"

import{Movie} from "./MyMovie"

let pelicula1 : Movie = new Movie("Thelma & Louis",1991,"Comedia","USA")

let pelicula2 : Movie = new Movie("Titanic",1997,"Romance","Usa")

let pelicula3 : Movie = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido")

let peliculas=[pelicula1, pelicula2, pelicula3];


let videoclub = new Imdb ()



videoclub.peliculas = peliculas
console.log(videoclub);




console.log('**********STRINGIFY*********');

let fs = require ("fs");

let videoclub2 = JSON.stringify(videoclub)
console.log(videoclub2);


fs.writeFileSync("imdbBBDD.json", videoclub2);
console.log("Datos guardados en imdbBBDD.json");
