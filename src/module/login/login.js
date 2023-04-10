const {database} = require('../../database/connection.js');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
const login = async (req, res, next) => {
    const requests = req.body;
    const pincode = requests.pincode;
    try {
        database.query('SELECT * FROM admin WHERE pincode = ?', [pincode], async (error, results) => {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                const user_id = results[0].id;
                const access_name = results[0].name;
                const access_email = results[0].email;
                const user_res = get_final_res(user_id , access_name , access_email );
                res.json(user_res);
            } else {
                res.json({ status: 'login_failed' });
            }
        });
    } catch (err) {
        next(err);
    } 
}

module.exports = {
    login
}

function get_final_res(user_id , access_name , access_email ) {
    const token = jwt.sign({ user_id: user_id }, process.env.JWT_SECRET);
    const user_res = {
        'status': 'login_verified',
        'access_name':access_name,
        'access_email':access_email,
        'acess_token': token,
    } 
    return user_res
}