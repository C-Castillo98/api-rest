const accounts = require('../database/database.js').accounts;
const banks = require('../database/database.js').banks;
/**
Ejercicio 5
@description Devuelve un arreglo con la 'id' de los Bancos de menor a mayor por el
TOTAL de dinero que administran en las cuentas de sus clientes
*/
function exercise5() {
    //TODO:
       const NewArray = [];
       banks.forEach(bank => {
           let total = 0;
           accounts.forEach(account =>{
               if(account.bankId == bank.id){
                   total = total + account.balance 
               }
           })
           NewArray.push({bankId : bank.id, Total : total});
       });
       //return NewArray;
       NewArray.sort((a,b) =>{
           if (a.Total < b.Total){
               return -1;
           }
           if(a.Total > b.Total){
               return 1;
           }
           return 0;
       })
       return NewArray.map((bank) => bank.bankId);
}
//   


const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{

    res.json(exercise5());
});

module.exports = router;