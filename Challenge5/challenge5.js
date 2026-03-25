// funcion para comparar objetos profundamente
function deepComp(obj1, obj2) {

    // si son exactamente iguales
    if (obj1 === obj2) return true;

    // si alguno no es objeto o es null
    if (
        typeof obj1 !== "object" || obj1 === null ||
        typeof obj2 !== "object" || obj2 === null
    ) {
        return false;
    }

    // obtener propiedades
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // si tienen diferente cantidad de propiedades
    if (keys1.length !== keys2.length) return false;

    // recorrer propiedades
    for (let key of keys1) {

        // si la propiedad no existe en el otro objeto
        if (!keys2.includes(key)) return false;

        const val1 = obj1[key];
        const val2 = obj2[key];

        // si es objeto o array → recursion
        const sonObjetos =
            typeof val1 === "object" && val1 !== null &&
            typeof val2 === "object" && val2 !== null;

        if (sonObjetos) {
            if (!deepComp(val1, val2)) return false;
        } else {
            // comparacion normal
            if (val1 !== val2) return false;
        }
    }

    return true;
}


// PRUEBAS (ejemplo)
const a = {
    nombre: "Jose",
    edad: 18,
    direccion: {
        ciudad: "San Salvador",
        pais: "El Salvador"
    },
    hobbies: ["futbol", "programar"]
};

const b = {
    nombre: "Jose",
    edad: 18,
    direccion: {
        ciudad: "San Salvador",
        pais: "El Salvador"
    },
    hobbies: ["futbol", "programar"]
};

const c = {
    nombre: "Jose",
    edad: 19, // diferente
    direccion: {
        ciudad: "San Salvador",
        pais: "El Salvador"
    },
    hobbies: ["futbol", "programar"]
};

console.log(deepComp(a, b)); // true
console.log(deepComp(a, c)); // false


/*
explicacion medio rapida:

la funcion compara 2 objetos profundamente

primero verifica si son iguales directamente
luego verifica si son objetos

despues compara las llaves con Object.keys

si tienen diferente cantidad ya no son iguales

luego recorre cada propiedad:
si es objeto o array vuelve a llamar la funcion
si no compara normal

si todo pasa devuelve true

basicamente compara todo incluso si hay objetos dentro de objetos
*/