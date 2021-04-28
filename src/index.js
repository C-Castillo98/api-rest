const express = require('express');
const app = express();
const morgan = require('morgan');


//ajustes
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan(`dev`));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use('/api/ejercicio0',require('./routes/ejercicio0'));
app.use('/api/ejercicio1',require('./routes/ejercicio1'));
app.use('/api/ejercicio2',require('./routes/ejercicio2'));
app.use('/api/ejercicio3',require('./routes/ejercicio3'));
app.use('/api/ejercicio4',require('./routes/ejercicio4'));
app.use('/api/ejercicio5',require('./routes/ejercicio5'));
app.use('/api/ejercicio6',require('./routes/ejercicio6'));
app.use('/api/ejercicio7',require('./routes/ejercicio7'));

// iniciacion de servidor
app.listen(app.get('port'),()=> {
    console.log(`Server on port  ${app.get('port')}`);
});