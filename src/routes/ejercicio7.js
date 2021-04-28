const clients = require('../database/database.js').clients;
const accounts = require('../database/database.js').accounts;
const banks = require('../database/database.js').banks;
/**
Ejercicio 7
@description Devuelve un objeto en donde la key son el nombre de los bancos
y el valor es el 'id' de su cliente con menos dinero.
*/
function exercise7() {
    //TODO:
    let object = Object.create({ key: [] });
    
        banks.forEach(bank => {
            const NewArray = [];
            object[bank.name] = [];
            clients.forEach(client => {
                accounts.forEach(account =>{
                    if(bank.id == account.bankId && client.id == account.clientId){
                        if(NewArray.length == 0){
                            NewArray.push({ Rut : client.rut, id : account.clientId, Balance : account.balance });
                        }
                        else{
                            var bandera = true;
                            for(var i = 0; i < NewArray.length; i++){
                                if(NewArray[i].Rut == client.rut){
    
                                    NewArray[i].Balance = NewArray[i].Balance + account.balance ;
    
                                    bandera = false;
                                }
                            }
                            if(bandera == true){
                                
                                NewArray.push({ Rut : client.rut, id : account.clientId , Balance : account.balance  });
                                
                            }
                        }
                    }
                });
            });
         
            var min = NewArray[0].Balance;
            var idF = 0 ;
            for(var i = 0; i < NewArray.length; i++){
    
                if(NewArray[i].Balance <= min ) {
                    min = NewArray[i].Balance;
                    idF = NewArray[i].id;
                }
            }
            object[bank.name] = idF;
    });
    
     return object ;
    }
    


const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{

    res.json(exercise7());
});

module.exports = router;