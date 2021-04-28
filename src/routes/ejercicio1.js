const clients = require('../database/database.js').clients;

/**
Ejercicio 1
@description Retornar un arreglo con los ID de los clientes ordenados por RUT
*/
function exercise1() {
    clients.sort((a,b) =>{
        if (a.rut < b.rut){
            return -1;
        }
        if(a.rut > b.rut){
            return 1;
        }
        return 0;
    })
    return clients.map(client => client.id);
//TODO
}


const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{
    res.json(exercise1());
});

module.exports = router;