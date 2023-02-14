import{Professional} from "./ClaseProfessional"

export class Movie{

  public title: string;
  public releaseYear: number;
  public actors: Professional [];
  public nacionality: string;
  public director: Professional;
  public writer: Professional;
  public language: string;
  public plataforma: string;
  public isMCU: boolean;
  public mainCharacterName: string;
  public producer: string;
  public distributor: string;
  public genre: string;

  constructor(title: string,releaseYear: number,genre: string,nacionality: string){

     this.title= title;
     this.releaseYear = releaseYear;
     this.actors = []
     this.nacionality = nacionality
     this.director
     this.writer
     this.language
     this.plataforma
     this.isMCU
     this.mainCharacterName
     this.producer
     this.distributor
     this.genre= genre


  }

  public showDatesMovie(){
    console.log("El titulo es " + this.title)
    console.log("El año de creacion es " + this.releaseYear)
    console.log("La nacionalidad es " + this.nacionality)
    console.log("El genero es " + this.genre)
    console.log(this.actors)
    console.log(this.director)
    console.log(this.writer)
    
  }
}  