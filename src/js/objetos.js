// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let mine = {
  nombre: "Daniel",
  apellido: "Abad",
  edad: 31,
  altura: 1.73,
  eresDesarrollador: true,
};

// Una variable que obtenga tu edad a partir del objeto anterior
let miEdad = mine.edad;
console.log(miEdad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

let list = [
  { ...mine },
  {
    nombre: "Alex",
    apellido: "Touchard",
    edad: 35,
    altura: 1.75,
    eresDesarrollador: true,
  },
  {
    nombre: "Xavi",
    apellido: "Serrano",
    edad: 30,
    altura: 1.7,
    eresDesarrollador: true,
  },
];
console.log(list);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let ageList = list.sort((a, b) => b.edad - a.edad);
console.log(ageList);
