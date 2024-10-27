const express = require('express'); 
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//archivos estaticos
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Mi Nombre es Gustavo Colina'});
});

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Mi cedula es: 31.182.936"});
})

app.listen(port, () => {
    console.log(`Ejemplo express escuchando en el puerto: ${port}`);
});

app.use((req, res, next) => {
    res.status(404).render("404", {
        title: 'Estoy en la seccion 4 de programacion 2',
        descripcion : 'Buenas noches un saludito'
    });
})