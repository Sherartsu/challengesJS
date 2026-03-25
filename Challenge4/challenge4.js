// constructor (no lo reescribo, solo lo dejo igual)
function Image(titulo, artista, año) {
    this.titulo = titulo;
    this.artista = artista;
    this.año = año;
}

// agregando metodo con prototype
Image.prototype.show = function () {
    console.log(`Titulo: ${this.titulo}, artistaa: ${this.artista}, Año: ${this.año}`);
};


// objeto images (el mismo del ejercicio anterior)
const images = {
    list: [],

    contains: function (titulo) {
        return this.list.some(img => img.titulo === titulo);
    },

    add: function (titulo, artista, año) {
        if (!this.contains(titulo)) {
            const newImage = new Image(titulo, artista, año);
            this.list.push(newImage);
        }
    },

    // MODIFICADO: ahora usa el show del prototype
    show: function () {
        this.list.forEach(img => img.show());
    },

    clear: function () {
        this.list = [];
    }
};


// NUEVOS METODOS (sin rehacer todo)

// editar imagen
images.edit = function (titulo, artista, año) {
    const img = this.list.find(i => i.titulo === titulo);
    if (img) {
        img.artista = artista;
        img.año = año;
    } else {
        console.log("no se encontro la imagen xd");
    }
};

// eliminar imagen
images.delete = function (titulo) {
    const index = this.list.findIndex(i => i.titulo === titulo);
    if (index !== -1) {
        this.list.splice(index, 1);
    } else {
        console.log("no existe la imegen");
    }
};


// PRUEBAS

images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Scream", "Edvard Munch", 1893);
images.add("Guernica", "Pablo Picasso", 1937);

console.log("lista original:");
images.show();

// editando
images.edit("Mona Lisa", "Da Vinci", 1504);

console.log("despues de editar:");
images.show();

// eliminando
images.delete("The Scream");

console.log("despues de eliminar:");
images.show();


/*
explicacion medio sencilla:

no cambie el constructor, solo le agregue un metodo con prototype (show)

luego modifique el show del objeto images para usar ese metodo

despues agregue edit:
busca la imagen con find y si existe cambia artistaa y año

y delete:
busca el index con findIndex y usa splice para borrarlo

y ya solo hice pruebas agregando, editando y eliminando
*/