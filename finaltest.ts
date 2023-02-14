
import { readFileSync, writeFileSync } from "fs";

import { Professional } from "./ClaseProfessional";


import { Imdb } from "./IMDB"

import{Movie} from "./MyMovie"

const rl = require("readline-sync");
const fs = require ("fs");


let name:string = rl.question("name: ")
let age:number = rl.question("age: ")
let weight:number = rl.question("weight: ")
let height:number = rl.question("height: ")
let isRetired:boolean = rl.question("isRetired: ")
let nationality:string = rl.question("nationality: ")
let oscarsNumber:number = rl.question("oscarsNumber: ")
let profession:string = rl.question("profession: ")


let professional:Professional = new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
console.log(professional);



let pelicula1 : Movie = new Movie("Thelma & Louis",1991,"Comedia","USA")
let pelicula2 : Movie = new Movie("Titanic",1997,"Romance","Usa")
let pelicula3 : Movie = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido")
let peliculas=[pelicula1, pelicula2, pelicula3];

let videoclub = new Imdb ()

videoclub.peliculas = peliculas
console.log(videoclub);



videoclub.obtenerInstanciaIMDB("NuevoFichero.json")

videoclub.peliculas[0].actors.push(professional)
console.log(videoclub.peliculas[0]);

for(let i=0; i<videoclub.peliculas.length; i++){
    videoclub.peliculas[i].actors.push(professional)

}








