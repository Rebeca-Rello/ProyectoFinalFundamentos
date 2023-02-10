import { Professional } from "./ClaseProfessional";


let actor1: Professional = new Professional ("Brad Pitt", 59, 78, 180, false, "Estadounidense", 2, "actor");

let actor2: Professional = new Professional ("Leonardo Di Caprio", 48, 85, 183, false, "Estadounidense", 1, "actor");

let actriz3: Professional = new Professional ("Meryl Streep", 73, 63, 167, false, "Estadounidense", 3, "actriz");

let director: Professional = new Professional ("Alejandro Amenabar", 54, 68, 165, false, "Spanish", 3, "director");

let director1: Professional = new Professional ("Quentin Tarantino", 65, 95, 190, false, "Italian", 2, "director");

let director2: Professional = new Professional ("Steven Spielberg", 70, 68, 165, false, "Estadounidense", 4, "director");

let writer: Professional = new Professional ("Juan Alias", 45, 65, 180, false, "Portuguese", 0, "guionista");

let writer1: Professional = new Professional ("Mary Watson", 35, 54, 157, false, "Australian", 2, "guionista");

let writer2: Professional = new Professional ("Silviana Petrucci", 70, 63, 125, true, "Italian", 1, "guionista");


console.log(actor1);
console.log(actor2);
console.log(actriz3);

console.log(director);
console.log(director1);
console.log(director2);

console.log(writer);
console.log(writer1);
console.log(writer2)

actor1.showAtributes ();
actor2.showAtributes ();
actriz3.showAtributes ();
director.showAtributes ();
director1.showAtributes ();
director2.showAtributes ();
writer.showAtributes ();
writer1.showAtributes ();
writer2.showAtributes ();

export {actor1, actor2, actriz3, director, director1, director2, writer, writer1, writer2}