const argv = require ('./config/yargs').argv;
const {crear, getListado, actualizar, borrar} = require ('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let listado = getListado()
        console.log(listado);
        for (let tarea of listado) {
            console.log('========Por Hacer========='.green);
            console.log(tarea.desc);
            console.log('Estado: ', tarea.completado);
            console.log('==========================\n'.green);
        }
    break;
    case 'actualizar':
        let actualizacion = actualizar(argv.descripcion, argv.completado)
        console.log(actualizacion);
    break;
    case 'borrar':
        let borrarTarea = borrar(argv.descripcion)
        console.log(borrarTarea);
    break;

    default:
        console.log('comando no es reconocido');
        break;
}