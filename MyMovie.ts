

export class Movie{

  public title: string;
  public releaseYear: number;
  public actors: string;
  public nacionality: string;
  public director: string;
  public writer: string;
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
     this.actors
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
    console.log(this.title)
    console.log(this.releaseYear)
    console.log(this.actors)
    console.log(this.nacionality)
    console.log(this.director)
    console.log(this.director)
    console.log(this.writer)
    console.log(this.language)
    console.log(this.plataforma)
    console.log(this.isMCU)
    console.log(this.mainCharacterName)
    console.log(this.producer)
    console.log(this.distributor)
    console.log(this.genre)
  }
}  