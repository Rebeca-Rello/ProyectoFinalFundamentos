
let fs= require("fs");
import{Movie} from "./MyMovie"

export class Imdb{

    public peliculas:Movie []
   

    constructor(){

         this.peliculas= []
         

          }


    public escribirEnFicheroJSON(nombreFichero: string){
        
        let ImdbBBDD1 = JSON.stringify(this);
        fs.writeFileSync (nombreFichero, ImdbBBDD1);


    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{

        let ImdbBBDD1 = fs.readFileSync(nombreFichero);
        let ImdbBBDD = JSON.parse(ImdbBBDD1);
        let nuevoIMDB = Object.assign(new Imdb(), ImdbBBDD);
        
        return nuevoIMDB;



    }




}


