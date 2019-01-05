let dataBase = require('../../../Bases/index').getInstance();

module.exports = async (req, res) => {

    let userModel = dataBase.getModel('User');
    let users = await userModel.findAll({});
    users.forEach(user => {
        console.log(user.dataValues);
    });
    res.end('WELL DONE');
};

