const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const login = require('../../module/login/login.js').login;
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

// routes.get('/login', (req, res) => {
//     res.json({ status : 'Login audaixa' })
// });

routes.post('/login', login);

// routes.use('/v1', require('./v1/index.js'))


module.exports = routes;
