// Declaramos un arreglo de objetos con la información de las pinturas
const pinturas = [
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

// Recorremos el arreglo e imprimimos la info
pinturas.forEach(painting => {
    console.log(
        `Título: ${painting.titulo}, Artista: ${painting.artista}, Año: ${painting.año}`
    );
});

/*
Explicación:
1. Se creó un arreglo llamado pinturas que contiene objetos.
2. Cada objeto representa una pintura con tres atributos: titulo, artista y año
3. Se utilizó el método forEach para recorrer el array.
4. En cada vuelta se imprime la información completa.
*/