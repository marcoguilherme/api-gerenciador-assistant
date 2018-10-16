var users = require('../../users');

module.exports = app => {

    app.route('/')
        .get((req, res) =>
             users.map((result)=>{
                 res.json(result);
             })
        );
}