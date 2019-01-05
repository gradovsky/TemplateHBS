module.exports = (req, res)=> {
    let dataBase = require('../Bases/index').getInstance();

    dataBase.getModel()
    res.render('RegisterPage');
};