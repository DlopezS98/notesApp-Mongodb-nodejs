//ejecutando la funcion config de dotenv para acceder a las variables de entorno (.env)
require('dotenv').config();
const app = require('./server');
//ejecutando la conexion a la base de datos
require('./database');

async function main(){
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}

main();