//require's
//Proyecto propio de node
//const fs = require('fs');
// const fs = require('express'); libreria externa, se debe de instalar
// const fs = require('./fs'); archivos que nosotros hacemos (escribimos)

/*
let data = ``;
for (let i = 1; i <= 10; i++) {
// let base = `1`;

// console.log(process.argv);
    data += (`${base} * ${i} =  ${base * i}\n`);
}

//Noobre del archivo, datos que queremos grabar, callback que envía error si hay
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`)

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado ${archivo}`.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

let argv2 = process.argv;
console.log('Base: ', argv.base);
console.log(`limite: `, argv.limite);

// let parametro = arg[2];
// let base = parametro.split('=')[1]