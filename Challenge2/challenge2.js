// arreglo del ejercicio anterior
const paintings = [
    { titulo: "Mona Lisa", artista: "Leonardo da Vinci", año: 1503 },
    { titulo: "The Last Supper", artista: "Leonardo da Vinci", año: 1495 },
    { titulo: "Starry Night", artista: "Vincent van Gogh", año: 1889 },
    { titulo: "The Scream", artista: "Edvard Munch", año: 1893 },
    { titulo: "Guernica", artista: "Pablo Picasso", año: 1937 },
    { titulo: "The Kiss", artista: "Gustav Klimt", año: 1907 },
    { titulo: "Girl With a Pearl Earring", artista: "Johannes Vermeer", año: 1665 },
    { titulo: "The Birth of Venus", artista: "Sandro Botticelli", año: 1485 },
    { titulo: "Las Meninas", artista: "Diego Velázquez", año: 1656 },
    { titulo: "The Creation of Adam", artista: "Michelangelo", año: 1512 }
];

// funcion constructor
function Image(titulo, artista, año) {
    this.titulo = titulo;
    this.artista = artista;
    this.año = año;
}

// funcion factory
function getImage(titulo, artista, año) {
    return {
        titulo: titulo,
        artista: artista,
        año: año
    };
}

// creamos images1 usando el constructor
const images1 = paintings.map(p => new Image(p.titulo, p.artista, p.año));

// creamos images2 usando la factory
const images2 = images1.map(p => getImage(p.titulo, p.artista, p.año));

// mostramos images2
images2.forEach(img => {
    console.log(`titulo: ${img.titulo}, artista: ${img.artista}, año: ${img.año}`);
});


/*
explicacion (medio rapida xd):

primero hice una funcion constructor (Image) que crea objetos usando "this"
despues hice otra funcion (getImage) que hace lo mismo pero retornando un objeto normal

luego use map para recorrer el arreglo original (paintings)
y cree images1 usando new Image (o sea el constructor)

despues con images1 hice images2 usando la otra funcion (factory)

y al final solo imprimi todo con forEach

basicamente es lo mismo pero usando 2 formas distintas de crear objetos
*/