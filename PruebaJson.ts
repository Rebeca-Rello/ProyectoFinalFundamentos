

import { Imdb } from "./IMDb"

import{Movie} from "./MyMovie"

let fs=require("fs");

let pelicula1 : Movie = new Movie("Thelma & Louis",1991,"Comedia","USA")

let pelicula2 : Movie = new Movie("Titanic",1997,"Romance","Usa")

let pelicula3 : Movie = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido")

let peliculas=[pelicula1, pelicula2, pelicula3];


let videoclub = new Imdb ()



videoclub.peliculas = peliculas
console.log(videoclub);




// console.log('**********STRINGIFY*********');



// let videoclub2 = JSON.stringify(videoclub)
// console.log(videoclub2);


// fs.writeFileSync("imdbBBDD.json", videoclub2);
// console.log("Datos guardados en imdbBBDD.json");

// console.log('************Blockbuster**********');


// let ImdbBBDD1 = fs.readFileSync("ImdbBBDD.json");
// let Blockbaster = JSON.parse(ImdbBBDD1);
// videoclub.peliculas = Blockbaster.peliculas

// console.log(videoclub);



videoclub.escribirEnFicheroJSON("NuevoFichero.json");


let nuevoIMDB = videoclub.obtenerInstanciaIMDB("nuevoFichero.json");
console.log(nuevoIMDB);