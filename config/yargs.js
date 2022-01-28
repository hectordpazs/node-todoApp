const opts ={
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
}

const argv = require('yargs')
.command('crear','Crear un elemento por hacer', opts)
.command('actualizar', 'Actualiza el estado completado de una tarea', 
{   
    ...opts, 
    completado: {
        alias: 'c', 
        default:true, 
        desc: 'Marca como completado o pendiente una tarea'
    }
})
.command('borrar', 'Borra una tarea', opts)
.help()
.argv;

module.exports = {
    argv
}