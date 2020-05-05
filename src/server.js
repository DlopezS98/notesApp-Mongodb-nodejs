const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 4000); //obteniendo un puerto para el servidor
app.set('views', path.join(__dirname, 'views')); //Obteniendo la ruta de la carpeta "views"
//creando la configuracion para el motor de plantillas handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(express.urlencoded({extended : false})); //Permite que cada vez que lleguen datos atravez de cualquier tipo de metodo o peticion, convertir esos datos en un objeto json

//Global variables

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

//Statics file
/* Diciendo al servidor donde se localiza la carpeta "public" */
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;