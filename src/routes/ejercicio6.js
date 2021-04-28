const clients = require('../database/database.js').clients;
const accounts = require('../database/database.js').accounts;
const banks = require('../database/database.js').banks;
/**
Ejercicio 6
@description Devuelve un objeto en donde la key son los nombre de los bancos
y el valor es la cantidad de clientes que solo tienen una cuenta en ese banco
*/
function exercise6() {
    //TODO:
    let object = Object.create({ key: [] });
   
       banks.forEach(bank => {
           const NewArray = [];
           object[bank.name] = [];
           clients.forEach(client => {
               accounts.forEach(account =>{
                   if(bank.id == account.bankId && client.id == account.clientId){
                       if(NewArray.length == 0){
                           NewArray.push({ Rut : client.rut, Nombre : client.name, Cantidad : 1 });
                       }
                       else{
                           var bandera = true;
                           for(var i = 0; i < NewArray.length; i++){
                               if(NewArray[i].Rut == client.rut){
   
                                   NewArray[i].Cantidad = NewArray[i].Cantidad + 1 ;
   
                                   bandera = false;
                               }
                           }
                           if(bandera == true){
                               
                               NewArray.push({ Rut : client.rut, Nombre : client.name, Cantidad : 1 });
                               
                           }
                       }
                   }
               });
           });
           var contador = 0;
           for(var i = 0; i < NewArray.length; i++){
               if(NewArray[i].Cantidad == 1) {
                   contador = contador + 1;
               }
           }
           object[bank.name] = contador;
   });
   
    return object ;
   
   
   }
   
    
    

const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{

    res.json(exercise6());
});

module.exports = router;