import{Movie} from "./MyMovie"
import{Professional} from "./ClaseProfessional"

let pelicula1 : Movie = new Movie("Thelma & Louis",1991,"Comedia","USA")

let pelicula2 : Movie = new Movie("Titanic",1997,"Romance","Usa")

let pelicula3 : Movie = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido")


let actor1: Professional = new Professional ("Brad Pitt", 59, 78, 180, false, "Estadounidense", 2, "actor");

pelicula1.actors=[actor1]

let actor2: Professional = new Professional ("Leonardo Di Caprio", 48, 85, 183, false, "Estadounidense", 1, "actor");

pelicula2.actors=[actor2]

let actriz3: Professional = new Professional ("Meryl Streep", 73, 63, 167, false, "Estadounidense", 3, "actriz");

pelicula3.actors=[actriz3]

let director: Professional = new Professional ("Alejandro Amenabar", 54, 68, 165, false, "Spanish", 3, "director");

pelicula1.director= director

let director1: Professional = new Professional ("Quentin Tarantino", 65, 95, 190, false, "Italian", 2, "director");

pelicula2.director= director1

let director2: Professional = new Professional ("Steven Spielberg", 70, 68, 165, false, "Estadounidense", 4, "director");

pelicula3.director=director2

let writer: Professional = new Professional ("Juan Alias", 45, 65, 180, false, "Portuguese", 0, "guionista");

pelicula1.writer=writer

let writer1: Professional = new Professional ("Mary Watson", 35, 54, 157, false, "Australian", 2, "guionista");

pelicula2.writer=writer1

let writer2: Professional = new Professional ("Silviana Petrucci", 70, 63, 125, true, "Italian", 1, "guionista");

pelicula3.writer=writer2

pelicula1.showDatesMovie()
pelicula2.showDatesMovie()
pelicula3.showDatesMovie()


actor1.showAtributes ();
actor2.showAtributes ();
actriz3.showAtributes ();
director.showAtributes ();
director1.showAtributes ();
director2.showAtributes ();
writer.showAtributes ();
writer1.showAtributes ();
writer2.showAtributes ();
