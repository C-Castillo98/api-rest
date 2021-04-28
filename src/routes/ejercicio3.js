const clients = require('../database/database.js').clients;
const accounts = require('../database/database.js').accounts;
const banks = require('../database/database.js').banks;
/**
Ejercicio 3
@description Devuelve un objeto cuyo Ã­ndice es el nombre de los bancos
y cuyo valor es un arreglo de los ruts de los clientes ordenados alfabÃ©ticamente por 'nombre'
*/
function exercise3() {
    let object = Object.create({ key: [] });
    var numero = 0;

    banks.forEach(bank => {
        const NewArray = [];
        object[bank.name] = [];
        clients.forEach(client => {
            accounts.forEach(account =>{
                if(bank.id == account.bankId && client.id == account.clientId){
                    if(NewArray.length == 0){
                        NewArray.push({ Rut : client.rut, Nombre : client.name});
                    }
                    else{
                        var bandera = true;
                        for(var i = 0; i < NewArray.length; i++){
                            if(NewArray[i].Rut == client.rut){
                                bandera = false;
                            }
                        }
                        if(bandera == true){

                            NewArray.push({ Rut : client.rut, Nombre : client.name});
                        }
                    }
                }
            });
        });

        NewArray.sort(function (a, b) {
          if (a.Nombre > b.Nombre) {
            return 1;
          }
          if (a.Nombre < b.Nombre) {
            return -1;
          }
          return 0;
        });
        const NewArrayF = [];
        for (var i = 0; i < NewArray.length; i++) {
            NewArrayF.push(NewArray[i].Rut);
        }
        object[bank.name] = NewArrayF;
    });
    return object;

    //TODO
}



const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{

    res.json(exercise3());
});

module.exports = router;