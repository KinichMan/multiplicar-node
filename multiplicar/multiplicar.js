const fs = require('fs');
const colors = require('colors');

//Se puede exportar la funcion de la siguiente manera
//module.exports.crearArchivo = (base) ... 
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introdicido ${base} no es un número`)
            return;
        }

        let data = ``;
        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} =  ${base * i}\n`);
        }

        //Noobre del archivo, datos que queremos grabar, callback que envía error si hay
        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`Tabla del ${base}`.red);
    console.log('======================'.blue);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} =  ${base * i}`);

    }
}

module.exports = {
    crearArchivo,
    listarTabla
}