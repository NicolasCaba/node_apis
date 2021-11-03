const express = require('express');
const bodyParser = require('body-parser');
global.config = require('./config').config;

global.app = express();

// Configuracion para post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes');

// eslint-disable-next-line no-undef
app.listen(config.port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Servidor funcionando en el puerto ${config.port}`);
});
