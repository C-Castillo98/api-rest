const clients = require('../database/database.js').clients;

/**
Ejercicio 0
@description Retornar un arreglo con los ID de los clientes
*/
function exercise0() {

    return clients.map(client =>client.id);
}

const { Router } = require('express');
const router = Router();
   
router.get('/',(req, res)=>{
    res.json(exercise0());
});

module.exports = router;