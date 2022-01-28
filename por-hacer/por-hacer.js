const fs = require ('fs');
const colors = require ('colors');

let listadoPorHacer = [];

const guardarDB = ()=>{

    let data = JSON.stringify (listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error ('No se pudo guardar')
    });
}

const cargarDB = ()=>{
    try {
        
        listadoPorHacer = require ('../db/data.json')
        
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (desc)=>{

    cargarDB();

    let porHacer = {
        desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB()

    return porHacer;
}

const getListado = ()=>{
    cargarDB()
    return listadoPorHacer;
}

const actualizar = (desc, completado = true)=>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.desc === desc
    })

    if(index>=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false
    }
}

const borrar = (desc)=>{
    cargarDB();

        let nuevoListado = listadoPorHacer.filter(lista=>{
            return lista.desc!== desc
        })

        if (listadoPorHacer.length === nuevoListado.length){
            return false
        }else{
            listadoPorHacer = nuevoListado;
            guardarDB();
            return true
        }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}