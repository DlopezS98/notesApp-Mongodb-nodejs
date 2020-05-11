const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

require('./config/passport');

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
    handlebars: allowInsecurePrototypeAccess(Handlebars),
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false})); //Permite que cada vez que lleguen datos atravez de cualquier tipo de metodo o peticion, convertir esos datos en un objeto json
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//Global variables
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); //recuperando el error que manda passport
    res.locals.user = req.user || null;
    next();
});

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

//Statics files
/* Diciendo al servidor donde se localiza la carpeta "public" */
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;