//Creando el objeto para exportar a las rutas
const indexCtrl = {};

//renderizando la vista inicial
indexCtrl.renderIndex = (req, res) =>{
    res.render('index');
}

//renderizando la vista de about
indexCtrl.renderAbout = (req, res) =>{
    res.render('about');
}

module.exports = indexCtrl;