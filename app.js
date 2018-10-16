var app = require('./config/server');
require('dotenv').load();

app.listen(process.env.SERVER_PORT, function(){
    console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`)
})

