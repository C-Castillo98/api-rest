const clients = require('../database/database.js').clients;
const accounts = require('../database/database.js').accounts;
/**
Ejercicio 2
@description Retornar un arreglo con los nombres de los clientes, ordenados de mayor a menor
por la suma TOTAL de los saldos de las Cuentas
*/
function exercise2() {
    const NewArray = [];

    clients.forEach(client => {
        let total = 0;
        accounts.forEach(account =>{
            if(account.clientId == client.id){
                total = total + account.balance;
            }
        })
        NewArray.push({ID : client.id, Balance : total, Nombre : client.name});
    });

    NewArray.sort((a,b) =>{
        if (a.Balance > b.Balance){
            return -1;
        }
        if(a.Balance < b.Balance){
            return 1;
        }
        return 0;
    })
    return NewArray.map(narray => narray.Nombre);

 //TODO
}


const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{
    res.json(exercise2());
});

module.exports = router;