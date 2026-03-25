// constructor del ejercicio anterior
function Image(titulo, artist, año) {
    this.titulo = titulo;
    this.artist = artist;
    this.año = año;
}

// objeto images
const images = {
    list: [],

    // verifica si ya existe una imagen
    contains: function (titulo) {
        return this.list.some(img => img.titulo === titulo);
    },

    // agrega imagen si no existe
    add: function (titulo, artist, año) {
        if (!this.contains(titulo)) {
            const newImage = new Image(titulo, artist, año);
            this.list.push(newImage);
        } else {
            console.log("ya existe esa imagen xd");
        }
    },

    // muestra todas las imagenes
    show: function () {
        this.list.forEach(img => {
            console.log(`titulo: ${img.titulo}, artist: ${img.artist}, año: ${img.año}`);
        });
    },

    // limpia todo
    clear: function () {
        this.list = [];
    }
};


// PRUEBAS (lo que pide el ejercicio)

// agregando imagenes
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Scream", "Edvard Munch", 1893);
images.add("Mona Lisa", "Leonardo da Vinci", 1503); // repetida

// mostrando
images.show();

// limpiando
images.clear();

console.log("despues de limpiar:");
images.show();


/*
explicacion:

hice un objeto images con una lista osea un array y 4 metodos

contains: revisa si ya existe una imagen usando some
add: agrega una imagen usando el constructor pero solo si no existe
show: imprime todo con forEach
clear: borra todo el array

use el constructor Image para crear los objetos como decia el ejercicio

y pues al final hice pruebas agregando, mostrando y limpiando
*/