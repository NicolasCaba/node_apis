const express = require('express');
const bodyParser = require('body-parser');
global.config = require('./config').config;

global.app = express();

// Configuracion para post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes');

app.listen(config.port, () => {
  console.log(`Servidor funcionando en el puerto ${config.port}`);
});
