const accounts = require('../database/database.js').accounts;
/**
Ejercicio 4
@description Devuelve un arreglo ordenado de mayor a menor con el saldo de los clientes que
tengan mÃ¡s de 25000 en el banco 'SCOTIABANK'
*/
function exercise4() {
    const NewClients = [];
    
    for (const cuenta in accounts) {
        if (accounts[cuenta].bankId == 1) {
            if (accounts[cuenta].balance > 25000) {
                NewClients.push(accounts[cuenta].balance);
            }
        }
    }

    return NewClients.sort((a, b) => b - a);
//TODO
}


const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{
    res.json(exercise4());
});

module.exports = router;