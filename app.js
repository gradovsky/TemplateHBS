let express = require('express');
let app = express();
const request = require('request')
const exphdb = require('express-handlebars');
const path = require('path')

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

const getUsers = require('./controllers/userController/getUsers');
const RegisterPage = require('./controllers/Register');
const saveUsers = require('./controllers/userController/saveUsers');
const loginUser = require('./controllers/userController/loginUser');
const Home = require('./controllers/Home');
const entering = require ('./controllers/userController/Entering')
const base = require('./Bases/index').getInstance();
base.setModels()


app.get('/',Home);
app.get('/login', loginUser);
app.get('/registry', RegisterPage);
app.post('/save', saveUsers);
app.get('/users', getUsers);
app.post ('/enter', entering);

app.use(function(req, res){
    res.status(404);
    res.redirect('http://hotdot.pro/en/404/');
});



app.listen(3000, () => {
    console.log('Listen 3000....')
});










